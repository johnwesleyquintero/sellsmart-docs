class DataTable {
  constructor(containerId, config) {
    this.container = document.getElementById(containerId);
    this.config = {
      columns: [],
      dataSource: [],
      ...config
    };
  }

  async fetchData() {
    const { data, error } = await supabase
      .from(this.config.tableName)
      .select('*');
    
    if (!error) this.config.dataSource = data;
    return this;
  }

  render() {
    const table = document.createElement('table');
    table.className = 'data-table';
    
    // Render header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    this.config.columns.forEach(col => {
      const th = document.createElement('th');
      th.textContent = col.title;
      th.addEventListener('click', () => this.sortData(col.key));
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    
    // Render body
    const tbody = document.createElement('tbody');
    this.config.dataSource.forEach(item => {
      const row = document.createElement('tr');
      this.config.columns.forEach(col => {
        const td = document.createElement('td');
        td.textContent = item[col.key];
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    
    table.appendChild(thead);
    table.appendChild(tbody);
    this.container.appendChild(table);
  }

  sortData(key) {
    this.config.dataSource.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    this.container.innerHTML = '';
    this.render();
  }
}

export default DataTable;