const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<img src="${imgSrc}" alt="Enlarged Image">`;
    document.body.appendChild(modal);
    
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});
