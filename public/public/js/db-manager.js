// Database Manager Module
class DatabaseManager {
  constructor() {
    this.cache = new Map();
    this.db = null;
    this.queryHistory = [];
    this.isInitialized = false;
  }

  // Initialize the database connection
  async init(dbPath) {
    if (this.isInitialized) return;
    
    try {
      const SQL = await initSqlJs({
        locateFile: file => `/public/js/sql.js/${file}`,
        wasmBinary: await (await fetch('/public/js/sql.js/sql-wasm.wasm')).arrayBuffer()
      });

      // Configure HTTPvfs with chunked loading
      await SQL.registerHttpVfs({
        http: {
          mode: 'range',
          maxPayloadSize: 4096,
          prefetch: {
            triggerSize: 2048,
            prefetchSize: 4096
          }
        }
      });

      this.db = new SQL.Database(dbPath, {
        vfs: 'http',
        http: {
          headers: {
            'Accept-Encoding': 'gzip'
          },
          timeout: 30000
        }
      });

      this.isInitialized = true;
    } catch (err) {
      console.error('Failed to initialize database:', err);
      throw new Error(`Database initialization failed: ${err.message}`);
    }
  }

  // Execute query with caching
  async query(sql, params = []) {
    if (!this.isInitialized) {
      throw new Error('Database not initialized');
    }

    const cacheKey = this._generateCacheKey(sql, params);
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      console.log('Cache hit for query:', sql);
      return this.cache.get(cacheKey);
    }

    try {
      console.log('Executing query:', sql);
      const start = performance.now();
      const results = this.db.exec(sql, params);
      const duration = performance.now() - start;

      // Store in query history
      this.queryHistory.push({
        sql,
        params,
        duration,
        timestamp: new Date()
      });

      // Cache the results if it's a SELECT query
      if (sql.trim().toLowerCase().startsWith('select')) {
        this.cache.set(cacheKey, results);
      }

      return results;
    } catch (err) {
      console.error('Query execution failed:', err);
      throw err;
    }
  }

  // Clear cache for specific query or all cache
  clearCache(sql = null, params = []) {
    if (sql) {
      const cacheKey = this._generateCacheKey(sql, params);
      this.cache.delete(cacheKey);
    } else {
      this.cache.clear();
    }
  }

  // Get query execution statistics
  getQueryStats() {
    return {
      totalQueries: this.queryHistory.length,
      averageDuration: this._calculateAverageDuration(),
      cacheSize: this.cache.size
    };
  }

  // Export data to CSV
  exportToCSV(results) {
    if (!results || !results.length) return '';
    
    const columns = results[0].columns;
    const rows = results[0].values;
    
    let csv = columns.join(',') + '\n';
    rows.forEach(row => {
      csv += row.map(value => `"${value}"`).join(',') + '\n';
    });
    
    return csv;
  }

  // Private helper methods
  _generateCacheKey(sql, params) {
    return `${sql}-${JSON.stringify(params)}`;
  }

  _calculateAverageDuration() {
    if (!this.queryHistory.length) return 0;
    const total = this.queryHistory.reduce((sum, query) => sum + query.duration, 0);
    return total / this.queryHistory.length;
  }
}

// Export the DatabaseManager class
window.DatabaseManager = DatabaseManager;