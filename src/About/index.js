import me from '../../assets/me_jan_2024.jpg';

export default () => {
  const about = document.createElement('section');
  const about_info_container = document.createElement('section');
  const about_title = document.createElement('h2');
  const about_damon_image = document.createElement('img');
  const about_damon_text = document.createElement('p');

  about.className = 'about-content';
  about_info_container.className = 'info-container';
  about_title.className = 'about-title';
  about_damon_image.className = 'damon-about-image';
  about_damon_text.className = 'about-text';

  about_title.textContent = 'About Me';

  about_damon_text.innerHTML = 
  `
  Hi! My name is Damon Self and I've been a software developer for over 4 years now.
  I graduated from Flatiron School's 15 week immersive bootcamp in 
  December of 2019 and have been working as a Backend Software Developer at Whiplash
  E-Commerce since May of 2020.
  `
  + "<br>" + "<br>" + 
  `
  My passion for developing software bloomed while working for retail stores and 
  using their proprietary software. Often it would be unintuitive, slow, or the
  system would go down entirely. While downtime is unavoidable, I believe
  keeping software fast and operational, as often as possible, is the goal
  for any software engineer.
  `
  + "<br>" + "</br>" + 
  `
  My passions lie in site reliability, API design, system design, cloud architecture,
  and integrating with interesting third party services. Outside of software, I'm also
  an avid boulderer and reader.
  `
  ;

  about_damon_image.src = me;

  about_info_container.append(about_damon_text, about_damon_image);
  about.append(about_title, about_info_container);
  return about;
};