import me from '../../assets/self-portrait.jpg';

export default () => {
  const about = document.createElement('section');
  const about_text_container = document.createElement('section');
  const about_title = document.createElement('h2');
  const about_damon_image = document.createElement('img');
  const about_damon_text = document.createElement('p');

  about.className = 'about-content';
  about_text_container.className = 'text-container';
  about_title.className = 'about-title';
  about_damon_image.className = 'damon-about-image';
  about_damon_text.className = 'about-text';

  about_title.textContent = 'All About Me!';

  about_damon_text.textContent = 
  `
  Hi! Thanks for visiting my site. My name is Damon Self and I'm
  a software developer that graduated from Flatiron school in December
  of 2019. I absolutely love designing software that is intuitive for 
  users because I find happiness in other people's happiness! If something
  that I design can change someone's job, life, or just day for the better
  then I have succeeded as a developer.
  `;

  about_damon_image.src = me;

  about_text_container.append(about_title, about_damon_text);
  about.append(about_text_container, about_damon_image);
  return about;
};