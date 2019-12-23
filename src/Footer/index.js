export default () => {
  const footer = document.createElement('section');

  const footer_icons = [
    {
      'name' : 'Damon Self © 2019',
      'image-link' : '#',
      'content-link' : '#'
    },
    {
      'name' : 'github',
      'image-link' : '../../assets/circular-purple-github-logo.jpg',
      'content-link' : 'https://github.com/DaemonSpelledWrong'
    },
    {
      'name' : 'linkedin',
      'image-link' : '../../assets/LinkedIn-Icon.png',
      'content-link' : 'https://www.linkedin.com/in/damonself/'
    },
    {
      'name' : 'youtube',
      'image-link' : '../../assets/circular-youtube-logo.png',
      'content-link' : 'https://www.youtube.com/channel/UCyy2cgxviiZX5t7QY0NJqhA'
    },
  ];

  footer.className = 'footer';

  footer_icons.forEach(icon => {
    const footer_icon_link = document.createElement('a');
    const footer_icon_image = document.createElement('img');

    footer_icon_image.className = 'footer-images';

    footer_icon_link.href = icon['content-link'];
    footer_icon_image.src = icon['image-link'];
    footer_icon_image.alt = icon['name'];

    footer_icon_link.appendChild(footer_icon_image);
    footer.appendChild(footer_icon_link);
  });

  return footer;
};
