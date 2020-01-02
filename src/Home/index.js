window.addEventListener('DOMContentLoaded', event => {
  document.querySelector('.navbar').childNodes.forEach(child => {
    child.addEventListener('click', event => {
      event.preventDefault();

      if(child.innerText === 'About'){
        document.querySelector('.about-content').scrollIntoView({ behavior: 'smooth' });
      } else if(child.innerText === 'Projects'){
        document.querySelector('.projects-content').scrollIntoView({ behavior: 'smooth' });
      } else if(child.innerText === 'Contact'){
        document.querySelector('.contact-zone').scrollIntoView({ behavior: 'smooth' });
      } else {
        null;
      };
    });
  });
});

const navbar_items = [ 'About', 'Projects', 'Contact'];

export default () => {
  const home = document.createElement('section');
  const home_greeting = document.createElement('h1');
  const navbar = document.createElement('nav');

  navbar.className = 'navbar';
  home.className = 'home-content';
  home_greeting.className = 'home-greeting';
  
  home_greeting.textContent = 'Welcome to my website! Feel free to look around below.';
  
  navbar_items.forEach(page => {
    const page_link = document.createElement('a');

    page_link.href = '#';
    page_link.textContent = page;

    navbar.appendChild(page_link);
  });

  home.append(home_greeting, navbar);
  return home;
};