// UI Manager Module
class UIManager {
  constructor(dbManager) {
    this.dbManager = dbManager;
    this.queryBuilder = new QueryBuilder(dbManager);
    this.resultsContainer = null;
    this.statsContainer = null;
    this.queryInput = null;
    this.tableSelect = null;
  }

  // Initialize UI components
  async init() {
    this._createUIComponents();
    this._attachEventListeners();
    await this._initializeTableSelect();
  }

  // Create UI components
  _createUIComponents() {
    const container = document.createElement('div');
    container.className = 'db-interface';
    container.innerHTML = `
      <div class="query-builder">
        <select class="table-select"></select>
        <div class="query-input-container">
          <textarea class="query-input" class="query-input" placeholder="Enter SQL query or use Query Builder..."></textarea>
          <button class="run-query-btn">Run Query</button>
          <button class="export-btn">Export CSV</button>
        </div>
        <div class="query-stats"></div>
      </div>
      <div class="results-container">
        <div class="results-table"></div>
        <div class="pagination"></div>
      </div>
    `;

    document.body.appendChild(container);

    this.resultsContainer = container.querySelector('.results-table');
    this.statsContainer = container.querySelector('.query-stats');
    this.queryInput = container.querySelector('.query-input');
    this.tableSelect = container.querySelector('.table-select');
  }

  // Initialize table select dropdown
  async _initializeTableSelect() {
    const tables = await this.queryBuilder.getTables();
    this.tableSelect.innerHTML = `
      <option value="">Select a table...</option>
      ${tables.map(table => `<option value="${table}">${table}</option>`).join('')}
    `;
  }

  // Attach event listeners
  _attachEventListeners() {
    const runQueryBtn = document.querySelector('.run-query-btn');
    const exportBtn = document.querySelector('.export-btn');

    runQueryBtn.addEventListener('click', () => this._executeQuery());
    exportBtn.addEventListener('click', () => this._exportResults());
    this.tableSelect.addEventListener('change', (e) => this._handleTableSelect(e));
  }

  // Handle table selection
  _handleTableSelect(event) {
    const table = event.target.value;
    if (table) {
      this.queryBuilder.init(table);
      this.queryInput.value = this.queryBuilder.select().build();
    }
  }

  // Execute query and display results
  async _executeQuery() {
    try {
      let query = this.queryInput.value.trim();
      if (!query) {
        query = this.queryBuilder.build();
      }
      if (!query) return;

      const results = await this.dbManager.query(query);
      this._displayResults(results);
      this._updateStats();
    } catch (err) {
      console.error('Error executing query:', err);
      this._showError(`Error executing query: ${err.message}`);
    }
  }

  // Display query results
  _displayResults(results) {
    if (!results || !results.length) {
      this.resultsContainer.innerHTML = '<p>No results found</p>';
      return;
    }

    const columns = results[0].columns;
    const rows = results[0].values;

    const table = `
      <table class="results-table">
        <thead>
          <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    `;

    this.resultsContainer.innerHTML = table;
  }

  // Export results to CSV
  // Refactored to use CSVExporter module
  _exportResults() {
    const query = this.queryInput.value.trim();
    if (!query) return;

    this.dbManager.query(query).then(results => {
      const csv = CSVExporter.exportToCSV(results);
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'query_results.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  // Update query statistics
  _updateStats() {
    const stats = this.dbManager.getQueryStats();
    this.statsContainer.innerHTML = `
      <div class="stats">
        <span>Queries: ${stats.totalQueries}</span>
        <span>Avg Duration: ${stats.averageDuration.toFixed(2)}ms</span>
        <span>Cache Size: ${stats.cacheSize}</span>
      </div>
    `;
  }

  // Show error message
  _showError(message) {
    this.resultsContainer.innerHTML = `<div class="error">${message}</div>`;
  }
}

// Export the UIManager class
window.UIManager = UIManager;