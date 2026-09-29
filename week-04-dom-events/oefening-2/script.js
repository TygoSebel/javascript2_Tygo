
const boxes = document.querySelectorAll('.box');



for (const box of boxes) {
	box.addEventListener('click', () => {
		box.classList.toggle('active');
	});
}
