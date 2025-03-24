class SearchFilter {
  constructor(containerId, config) {
    this.container = document.getElementById(containerId);
    this.config = {
      tableName: '',
      searchColumns: [],
      ...config
    };
  }

  render() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-filter';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search...';
    input.addEventListener('input', (e) => this.handleSearch(e.target.value));

    searchContainer.appendChild(input);
    this.container.appendChild(searchContainer);
  }

  async handleSearch(query) {
    const searchParams = this.config.searchColumns.reduce((acc, col) => {
      acc[col] = query;
      return acc;
    }, {});

    const { data } = await dataService.searchTable(this.config.tableName, searchParams);
    this.container.dispatchEvent(new CustomEvent('searchUpdate', {
      detail: { results: data }
    }));
  }
}

export default SearchFilter;