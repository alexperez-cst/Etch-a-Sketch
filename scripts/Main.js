'use strict';
const squaresContainer = document.getElementById('squaresContainer');
const gridScale = document.querySelector('#percentages');
const resetGridButton = document.getElementById('reset');
resetGridButton.addEventListener('click', resetGrid);
gridScale.addEventListener('change', setColumnAndRow);
setSquares(16);
function setSquares(numSquares) {
	removeChilds();
	for (let i = 0; i < numSquares; i++) {
		let newDiv = document.createElement('div');
		newDiv.classList.add('square');
		newDiv.addEventListener('mouseenter', (e) => {
			e.target.classList.add('selectedSquare');
		});
		squaresContainer.appendChild(newDiv);
	}
}
function setColumnAndRow(event) {
	let targetValue = Number(event.target.value);
	squaresContainer.style.cssText = `grid-template-columns: repeat(${targetValue}, 1fr); grid-template-rows: repeat(${targetValue}, 1fr);`;
	setSquares(targetValue * targetValue);
}
function resetGrid() {
	let squareList = document.querySelectorAll('.square');
	setSquares(squareList.length);
}
function removeChilds() {
	let squaresInContainer = squaresContainer.lastElementChild;
	while (squaresInContainer) {
		squaresContainer.removeChild(squaresInContainer);
		squaresInContainer = squaresContainer.lastElementChild;
	}
}
