let display = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    btn_text = e.target.innerHTML;
    if (btn_text == '=') {
      display = eval(display);
      document.querySelector('input').value = display;
    } else if (btn_text == 'AC') {
      display = '';
      document.querySelector('input').value = display;
    } else if (btn_text == 'sin') {
      display = Math.sin(display);
      document.querySelector('input').value = display;
    } else if (btn_text == 'cos') {
      display = Math.cos(display);
      document.querySelector('input').value = display;
    } else if (btn_text == 'tan') {
      display = Math.tan(display);
      document.querySelector('input').value = display;
    } else if (btn_text == 'e') {
      display = Math.exp(display);
      document.querySelector('input').value = display;
    } else if (btn_text == 'ln') {
      display = Math.log(display);
      document.querySelector('input').value = display;
    } else if (btn_text == 'log') {
      display = Math.log10(display);
      document.querySelector('input').value = display;
    } else if (btn_text == 'pi') {
      display = display * Math.PI;
      document.querySelector('input').value = display;
    } else if (btn_text == '√') {
      display = Math.sqrt(display);
      document.querySelector('input').value = display;
    } else if (btn_text == '%') {
      display = display / 100;
      document.querySelector('input').value = display;
    } else if (btn_text == 'Rad') {
      display = display * (Math.PI / 180);
      document.querySelector('input').value = display;
    } else if (btn_text == 'Deg') {
      display = display * (180 / Math.PI);
      document.querySelector('input').value = display;
    } else if (btn_text == 'x!') {
      var result = 1;
      if (display === 0) {
        display = '1';
      } else if (display < 0) {
        display = 'undefined';
      } else {
        var result = 1;
        for (var i = display; i > 0; i--) {
          result = result * i;
        }
        display = result;
      }
      document.querySelector('input').value = display;
    } else if (btn_text == 'DEL') {
      display = display.substring(0, display.length - 1);
      document.querySelector('input').value = display;
    } else if (btn_text == 'EXP') {
      display = Math.exp(display);
      document.querySelector('input').value = display;
    } else if (btn_text == 'x^2') {
      display = eval(display * display);
      document.querySelector('input').value = display;
    } else if (btn_text == 'Inv') {
      display = Math.inv(display);
      document.querySelector('input').value = display;
    } else {
      display += btn_text;
      document.querySelector('input').value = display;
    }
  });
});
