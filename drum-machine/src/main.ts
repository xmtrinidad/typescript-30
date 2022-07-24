import './style.css';
import { Drum, DRUMS, setDrumListeners, setKeydownListener } from './dromLogic';



const drums: Drum[] = DRUMS

const btnHTML = () => {
  let str = '';
  drums.forEach(drum => {
    str += `
      <button data-key="${drum.key}" class="key">
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
setKeydownListener();
