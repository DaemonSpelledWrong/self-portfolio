import navbar from '../Navbar/';
import main from '../Main/';
import footer from '../Footer/';

import '../Navbar/navbar.css';
import '../Main/main.css';
import '../Footer/footer.css';

export default () => {
  document.body.append(navbar(), main(), footer());
}
