import me from '../../assets/self-portrait.jpg';

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
  Hey there! My name is Damon Self and I'm a software developer.
  I graduated from Flatiron School's 15 week immersive bootcamp in 
  December of 2019. I absolutely love designing software that is intuitive 
  for user consumption because impacting someone's happiness on a daily basis 
  brings me joy. If one of my creations or contributions change someone's day
  for the better then I've succeeded as a developer.
  `
  + "<br>" + "<br>" + 
  `
  My passion for developing software bloomed while working for retail stores and 
  using their proprietary software. Often it would be frustrating and slow or the
  system would go down. While downtime is unavoidable in some situations, I believe
  that keeping software fast and operational as often as possible is the goal
  for any software engineer. Well, aside from creating a time machine to remove
  technical debt before it happens.
  `
  ;

  about_damon_image.src = me;

  about_info_container.append(about_damon_text, about_damon_image);
  about.append(about_title, about_info_container);
  return about;
};