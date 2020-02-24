import trails from '../../assets/trails.png';
import deckbuilder from '../../assets/deckbuilder.png';
import portfolio from '../../assets/portfolio.png';

export default () => {
  const projects_zone = document.createElement('section');
  const projects_title = document.createElement('h1');
  const project_cards = document.createElement('div');

  projects_zone.className = 'projects-content';
  project_cards.className = 'card-zone';
  projects_title.className = 'projects-title';

  projects_title.textContent = 'Projects';

  const projects = [
    {
      'name'        : 'Magic the Gathering Deck Builder',
      'link'        : 'https://react-deckbuilder-frontend.firebaseapp.com/',
      'description' : 'A web application that users can register and log in on to build decks for MTG.',
      'image'       : deckbuilder,
      'youtube'     : '',
      'github'      : 'https://github.com/DaemonSpelledWrong/React-Deckbuilder-Frontend'
    },
    {
      'name'        : 'Self Portfolio',
      'link'        : 'https://damon-self.firebaseapp.com/',
      'description' : 'The portfolio you are currently reading! Check out the source code if you like.',
      'image'       : portfolio,
      'youtube'     : '',
      'github'      : 'https://github.com/DaemonSpelledWrong/self-portfolio'
    },
    {
      'name'        : 'Trails',
      'link'        : 'https://github.com/DaemonSpelledWrong/mod2project',
      'description' : 'A partner project with Lizzy Tong that allows users to browse Colorado hikes!',
      'image'       : trails,
      'youtube'     : '',
      'github'      : 'https://github.com/DaemonSpelledWrong/mod2project'
    }
  ];

  projects.forEach(project => {
    const project_container = document.createElement('div');
    const project_name_and_link = document.createElement('a');
    const project_description = document.createElement('p');
    const project_image = document.createElement('img');
    const project_youtube_link = document.createElement('a');
    const project_content = document.createElement('section');

    project_container.className = 'project-cards';
    project_content.className = 'project-content';
    project_image.className = 'project-images';

    project_name_and_link.textContent = project['name'];
    project_name_and_link.href = project['link'];
    project_description.textContent = project['description'];
    project_image.src = project['image'];
    project_youtube_link.href = project['youtube'];

    project_content.append(project_description, project_image)

    project_container.append(project_name_and_link, project_content, project_youtube_link);


    project_cards.appendChild(project_container);
  });

  projects_zone.append(projects_title, project_cards);

  return projects_zone;
};