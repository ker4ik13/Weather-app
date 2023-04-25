export const weatherForm = (event) => {
    if(event.target.value){
      document.querySelector('.weather__submit').classList.remove('invisible');
    } else {
      document.querySelector('.weather__submit').classList.add('invisible');
    }
  }