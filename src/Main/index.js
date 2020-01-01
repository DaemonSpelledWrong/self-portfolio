import home from '../Home';
import about from '../About';
import projects from '../Projects';
import contact from '../Contact';

import '../Home/home.css';
import '../About/about.css';
import '../Projects/projects.css';
import '../Contact/contact.css';

export default () => {
  const main = document.createElement('section');

  main.className = 'main-content';

  main.append(home(), about(), projects(), contact());
  return main;
};
