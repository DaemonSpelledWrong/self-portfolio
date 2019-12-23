import about from '../About';

import '../About/about.css';

export default () => {
  const home = document.createElement('section');
  const home_greeting = document.createElement('h1');


  home.className = 'home-content';
  home_greeting.className = 'home-greeting';
  
  home_greeting.textContent = 'Welcome to my website! Feel free to look around:';

  home.append(home_greeting, about());
  return home;
};