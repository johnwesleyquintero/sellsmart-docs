// CSV Exporter Module
class CSVExporter {
  static exportToCSV(results) {
    if (!results || !results.length) return '';

    const columns = results[0].columns;
    const rows = results[0].values;

    let csv = columns.join(',') + '\\n';
    rows.forEach(row => {
      csv += row.map(value => {
        if (typeof value === 'string') {
          return `"${value.replace(/"/g, '""')}"`; // Escape double quotes
        }
        return `"${value}"`;
      }).join(',') + '\\n';
    });

    return csv;
  }
}

window.CSVExporter = CSVExporter;