import './style.css';
import { setDrumListeners } from './drum';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <div class="keys">
      <button class="key">
        <span class="key-letter">A</span>
        <span class="key-description">BOOM</span>
      </button>
      <button class="key">
        <span class="key-letter">A</span>
        <span class="key-description">BOOM</span>
      </button>
      <button class="key">
        <span class="key-letter">A</span>
        <span class="key-description">BOOM</span>
      </button>
    </div>
  </div>
`;

const btns = Array.from(document.querySelectorAll('button'));
setDrumListeners(btns);
