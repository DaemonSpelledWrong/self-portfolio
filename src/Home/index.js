export default () => {
  const home = document.createElement('section');
  const home_greeting = document.createElement('h1');
  const navbar = document.createElement('nav');
  const navbar_items = ['Home', 'About', 'Projects', 'Contact', 'YouTube']

  navbar.className = 'navbar';
  home.className = 'home-content';
  home_greeting.className = 'home-greeting';
  
  home_greeting.textContent = 'Welcome to my website! Feel free to look around below.';
  
  navbar_items.forEach(page => {
    let page_link = document.createElement('a');

    page_link.href = '#';
    page_link.textContent = page;

    navbar.appendChild(page_link);
  });

  home.append(home_greeting, navbar);
  return home;
};