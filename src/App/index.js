import navbar from '../Navbar/';
import main from '../Main/';

import './app.css';
import '../Navbar/navbar.css';
import '../Main/main.css';

export default () => {
  document.body.append(navbar(), main());
}
