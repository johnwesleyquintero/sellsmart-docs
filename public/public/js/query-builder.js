// Query Builder Module
class QueryBuilder {
  constructor(dbManager) {
    this.dbManager = dbManager;
    this.tables = [];
    this.currentTable = '';
    this.selectedColumns = [];
    this.conditions = [];
    this.orderBy = '';
    this.limit = 0;
    this._loadTables();
  }

  async _loadTables() {
    this.tables = await this.dbManager.getAvailableTables();
  }

  // Initialize the query builder with table schema
  init(table) {
    this.currentTable = table;
    this.selectedColumns = [];
    this.conditions = [];
    this.orderBy = '';
    this.limit = 0;
    return this;
  }

  // Select columns
  select(columns = ['*']) {
    this.selectedColumns = Array.isArray(columns) ? columns : [columns];
    return this;
  }

  // Add WHERE condition
  where(column, operator, value) {
    this.conditions.push({
      column,
      operator,
      value: typeof value === 'string' ? '?' : value // Use ? as a placeholder
    });
    return this;
  }

  // Add ORDER BY clause
  orderBy(column, direction = 'ASC') {
    this.orderBy = `${column} ${direction}`;
    return this;
  }

  // Add LIMIT clause
  setLimit(limit) {
    this.limit = limit;
    return this;
  }

  // Build the SQL query
  build() {
    if (!this.currentTable) {
      throw new Error('Table not selected');
    }

    let query = `SELECT ${this.selectedColumns.join(', ')} FROM ${this.currentTable}`;

    if (this.conditions.length > 0) {
      const whereClause = this.conditions
        .map(c => `${c.column} ${c.operator} ${c.value}`)
        .join(' AND ');
      query += ` WHERE ${whereClause}`;
    }

    if (this.orderBy) {
      query += ` ORDER BY ${this.orderBy}`;
    }

    if (this.limit > 0) {
      query += ` LIMIT ${this.limit}`;
    }

    return query;
  }

  // Get available tables
  getTables() {
    return this.tables;
  }

  // Reset builder state
  reset() {
    this.currentTable = '';
    this.selectedColumns = [];
    this.conditions = [];
    this.orderBy = '';
    this.limit = 0;
    return this;
  }
}

// Export the QueryBuilder class
window.QueryBuilder = QueryBuilder;