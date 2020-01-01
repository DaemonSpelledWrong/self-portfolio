import github from '../../assets/circular-purple-github-logo.jpg';
import linkedin from '../../assets/LinkedIn-Icon.png';
import youtube from '../../assets/circular-youtube-logo.png';

window.addEventListener('DOMContentLoaded', event => {
  document.querySelector('.name-heading').addEventListener('click', event => {
    document.querySelector('.home-content').scrollIntoView({ behavior: 'smooth' });
  });
});

export default () => {
  const header = document.createElement('header');
  const name_heading = document.createElement('section');
  const media_container = document.createElement('div');

  const media_icons = [
    {
      'name' : 'github',
      'image-link' : github,
      'content-link' : 'https://github.com/DaemonSpelledWrong'
    },
    {
      'name' : 'linkedin',
      'image-link' : linkedin,
      'content-link' : 'https://www.linkedin.com/in/damonself/'
    },
    {
      'name' : 'youtube',
      'image-link' : youtube,
      'content-link' : 'https://www.youtube.com/channel/UCyy2cgxviiZX5t7QY0NJqhA'
    },
  ];

  media_icons.forEach(icon => {
    const media_icon_link = document.createElement('a');
    const media_icon_image = document.createElement('img');

    media_container.className = 'media-container';
    media_icon_image.className = 'media-images';

    media_icon_link.href = icon['content-link'];
    media_icon_image.src = icon['image-link'];
    media_icon_image.alt = icon['name'];

    media_icon_link.appendChild(media_icon_image);
    media_container.appendChild(media_icon_link);
  });

  header.className = 'navigation';
  name_heading.className = 'name-heading';

  name_heading.textContent = 'Damon Self'

  header.append(name_heading, media_container);
  return header;
};
