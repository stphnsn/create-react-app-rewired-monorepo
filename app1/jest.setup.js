import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

global.fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });
