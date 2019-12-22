export default () => {
  const header = document.createElement('header');
  const name_heading = document.createElement('section');
  const navbar = document.createElement('nav');
  const navbar_items = ['Home', 'About', 'Projects', 'Contact', 'YouTube']

  header.className = 'navigation';
  name_heading.className = 'name-heading';
  navbar.className = 'navbar';

  name_heading.textContent = 'Damon Self'
  
  navbar_items.forEach(page => {
    let page_link = document.createElement('a');

    page_link.href = '#';
    page_link.textContent = page;

    navbar.appendChild(page_link);
  });
  
  header.append(name_heading, navbar);
  return header;
};
