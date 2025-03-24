<div align="center">
  <img src="public/logo.svg" alt="SellSmart Docs Logo" width="200" />
  <h1 style="background: linear-gradient(135deg, #059669 0%, #06b6d4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 20px 0; font-family: 'Inter', sans-serif; font-weight: 800;">SellSmart Documentation Hub</h1>
  
  ***A modern, version-controlled documentation system with intelligent search and markdown support for technical documentation.***

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
    <img src="public\default.svg" alt="Documentation Preview" style="width: 100%; height: auto; border-radius: 12px; padding: 1rem; background: rgba(6, 182, 212, 0.05);">
    <img src="public\default.svg" alt="API Reference" style="width: 100%; height: auto; border-radius: 12px; padding: 1rem; background: rgba(6, 182, 212, 0.05);">
    <img src="public\default.svg" alt="Version Control" style="width: 100%; height: auto; border-radius: 12px; padding: 1rem; background: rgba(6, 182, 212, 0.05);">
  </div>
</div>

## 📚 Documentation Features

- **Markdown Processing** - Extended Markdown support with custom components
- **Version Control** - Documentation versioning with branch-based releases
- **Smart Search** - Full-text search with semantic understanding
- **API Reference** - Automated OpenAPI spec integration
- **Content Validation** - CI/CD checks for broken links and formatting
- **Multi-format Export** - PDF/EPUB generation from markdown

## 🛠 Documentation Stack

- **Framework**: Vite + Vitepress
- **Search**: Algolia DocSearch
- **Styling**: Tailwind CSS + shadcn/ui
- **Markdown**: MDX with rehype plugins
- **Hosting**: Vercel Edge Network
- **CI/CD**: GitHub Actions

## 🏁 Getting Started

1. Clone the docs repository
   ```bash
   git clone https://github.com/johnwesleyquintero/sellsmart-docs.git
   cd sellsmart-docs
   ```

2. Install documentation dependencies
   ```bash
   npm install
   ```

3. Start local development server
   ```bash
   npm run dev
   ```

👩💻 Open http://localhost:3000 to access the documentation locally

## 🤝 Contributing Guidelines

1. Create content branch from `docs-production`
2. Write markdown files in `/content` directory
3. Run validation checks:
   ```bash
   npm run lint:content
   ```
4. Open PR against `docs-staging` branch

## 🔗 Important Links

| Resource          | URL                                      |
|--------------------|------------------------------------------|
| Live Documentation| https://sellsmart-docs.vercel.app       |
| API Reference     | https://api.sellsmart-docs.vercel.app   |
| Style Guide       | /content/style-guide.md                |
| Contribution Docs | /content/contributing.md               |

## Professional Links

| **Platform**       | **URL**                                                                 |
|--------------------|-------------------------------------------------------------------------|
| LinkedIn          | [View Profile](https://www.linkedin.com/in/wesleyquintero/)             |
| Certifications    | [View Certifications](https://www.linkedin.com/in/wesleyquintero/details/certifications/) |
| GitHub            | [View Repository](https://github.com/johnwesleyquintero)               |
| Portfolio         | [View Portfolio](https://wesleyquintero.vercel.app/)                   |
| Documentation     | [View Documentation](https://sellsmart-docs.vercel.app/)              |
| Main Web App      | [View Main Web App](https://sellsmart-hub.vercel.app/)                |
| DevFlowDB         | [View DevFlowDB](https://devflowdb.vercel.app/)                   |
