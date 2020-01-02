export default () => {
  const contact_zone = document.createElement('section');
  const contact_cards = document.createElement('div');
  const contacts_title = document.createElement('h1');
  const contact_form = document.createElement('p');
  const contact_info = [
    {
      'type' : 'Email',
      'content' : 'damongself@gmail.com'
    },
    {
      'type' : 'Phone',
      'content' : '(720) 345-7924'
    },
    {
      'type' : 'Resume',
      'content' : 'Attached soon!'
    },
  ];

  contacts_title.textContent = 'My Contact Info!';
  contact_form.textContent = 'Form for directly messaging me is coming soon!';

  contact_zone.className = 'contact-zone';
  contact_cards.className = 'contacts-card-container';
  contacts_title.className = 'contacts-title';

  contact_info.forEach(contact => {
    const contact_card = document.createElement('div');
    const contact_content_title = document.createElement('h2');
    const contact_content = document.createElement('p');

    contact_card.className = 'contact-cards';

    contact_content_title.textContent = contact['type'];
    contact_content.textContent = contact['content'];

    contact_card.append(contact_content_title, contact_content);
    contact_cards.appendChild(contact_card);
  });

  contact_zone.append(contacts_title, contact_cards, contact_form);

  return contact_zone;
};
