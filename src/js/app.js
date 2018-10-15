import '../css/main.scss';
import { btnRandomGen, btnShowHide, output } from './dom-finder.js';
import reverse from './reverse';

const generateRandom = () => {
	output.textContent = Math.round(Math.random()*100);
};

const updateText = () => {
	btnShowHide.textContent = showGen ? reverse('Hide') : 'Show';
};

const toggle = () => {
	showGen = !showGen;
	btnRandomGen.style.display = showGen ? 'inline-block' : 'none';
	updateText();
};

let showGen = true;
btnRandomGen.addEventListener('click', generateRandom);
btnShowHide.addEventListener('click', toggle);
updateText();

