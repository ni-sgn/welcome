const element = document.querySelector('.my-element');
element.addEventListener('mouseover', () => {
  element.style.color = 'red';
});

element.addEventListener('mouseout', () => {
  element.style.color = 'black';
});
