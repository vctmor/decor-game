const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
//const form = document.querySelector('.login-form');

input.addEventListener('input', () => {
    if (input.value.length >= 3 ){
        button.removeAttribute('disabled');        
    } else {
        button.setAttribute('disabled','')
    }
});

/* compreender o motivo pelo qual o código abaixo não funciona
const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}
*/


