import './style.css';
import { setDrumListeners } from './drum';

type Drum = {
  key: string,
  description: string,
  file: string
}

const drums: Drum[] = [
  {key: 'A', description: 'BOOM', file: ''},
  {key: 'S', description: 'THING', file: ''},
  {key: 'D', description: 'TEST', file: ''}
];

const btnHTML = () => {
  let str = '';
  drums.forEach(drum => {
    str += `
      <button class="key">
        <span class="key-letter">${drum.key}</span>
        <span class="key-description">${drum.description}</span>
      </button>
    `;
  });
  return str;
};


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <div class="keys">
      ${btnHTML()}
    </div>
  </div>
`;

const btns = Array.from(document.querySelectorAll('button'));
setDrumListeners(btns);
