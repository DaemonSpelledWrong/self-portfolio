import home from '../Home';

import '../Home/home.css';

export default () => {
  const main = document.createElement('section');

  main.className = 'main-content';

  main.appendChild(home());
  return main;
};
