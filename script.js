// Toggle box open/close on click
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});

// Change box color
function changeColor(boxId, color) {
  document.getElementById(boxId).style.backgroundColor = color;
}

// Change box size
function changeSize(boxId, size) {
  let box = document.getElementById(boxId);
  box.classList.remove('small', 'medium', 'large');
  box.classList.add(size);
}
