class DataService {
  constructor() {
    this.client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  async fetchTableData(tableName) {
    const { data, error } = await this.client
      .from(tableName)
      .select('*');

    return { data, error };
  }

  async searchTable(tableName, searchParams) {
    const query = this.client
      .from(tableName)
      .select('*');

    Object.entries(searchParams).forEach(([key, value]) => {
      query.ilike(key, `%${value}%`);
    });

    const { data, error } = await query;
    return { data, error };
  }

  async getSortedData(tableName, sortBy, ascending=true) {
    const { data, error } = await this.client
      .from(tableName)
      .select('*')
      .order(sortBy, { ascending });

    return { data, error };
  }
}

export default new DataService();