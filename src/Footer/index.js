export default () => {
  const footer = document.createElement('section');

  const footer_icons = [
    {
      'name' : 'Damon Self © 2019',
      'image-link' : '#',
      'content-link' : '#'
    },
    {
      'name' : 'linkedin',
      'image-link' : 'http://www.vectorico.com/download/social_media/LinkedIn-Icon.png',
      'content-link' : 'https://www.linkedin.com/in/damonself/'
    },
    {
      'name' : 'github',
      'image-link' : 'https://image.flaticon.com/icons/png/512/25/25231.png',
      'content-link' : 'https://github.com/DaemonSpelledWrong'
    },
    {
      'name' : 'youtube',
      'image-link' : 'https://i.pinimg.com/originals/19/7b/36/197b365922d1ea3aa1a932ff9bbda4a6.png',
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
