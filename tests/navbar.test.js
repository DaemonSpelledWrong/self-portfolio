import navbar from '../src/navbar';
jest.mock('../src/navbar');

beforeEach(() => {
  navbar.mockClear();
});

test('Checks if navbar is appended properly', () => {
  document.body.append(navbar());
  expect(document.body.getElementsByClassName('navbar').toBeTruthy());
});
