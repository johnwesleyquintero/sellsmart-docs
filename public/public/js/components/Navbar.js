import { navLinks } from './config/nav-links.js';

class Navbar {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.links = navLinks;
  }

  render() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    
    const list = document.createElement('ul');
    this.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.title;
      li.appendChild(a);
      list.appendChild(li);
    });

    nav.appendChild(list);
    this.container.appendChild(nav);
  }
}

export default Navbar;