import {initDOM} from './DOM/index.js';


var init = function() {
    init = () => {};
    initDOM();
};

if ('complete' === document.readyState) {
  init();
} else {
  document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
          delete document.onreadystatechange;
          init();
      }
  };
}
