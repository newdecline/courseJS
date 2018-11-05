window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  class Option {
    constructor(height = 10, width = 10, bg = '#ccc', fontSize = '16px', textAlign = 'center') {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    makeDiv() {
      let div = document.createElement('div');
      div.textContent = 'Привет админ';
      div.style.cssText = 
      `height: ${this.height}px; 
      width: ${this.width}px; 
      background: ${this.bg}; 
      font-size: ${this.fontSize};
      text-align: ${this.textAlign};`
      
      document.body.appendChild(div);
      console.log(div);
    }
  }

  let test1 = new Option(100, 100, '#0cc', '10px', 'right');
  let test2 = new Option(200, 200, '#00c', '20px', 'left');
  let test3 = new Option(300, 300, '#0cf', '30px', 'center');

  test1.makeDiv();
  test2.makeDiv();
  test3.makeDiv();

});