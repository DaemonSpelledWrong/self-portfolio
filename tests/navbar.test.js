import navbar from '../src/Navbar/navbar.js';
jest.mock('../src/Navbar/navbar.js');

beforeEach(() => {
  navbar.mockClear();
});

test('Checks if navbar is appended properly', () => {
  document.body.append(navbar());
  expect(document.body.getElementsByClassName('navbar'));
});
