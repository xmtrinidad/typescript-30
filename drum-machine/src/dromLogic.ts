export type Drum = {
  key: string,
  description: string,
  src: string
}

export const DRUMS: Drum[] = [
  {key: 'A', description: 'DRUM 1', src: './sounds/boom.wav'},
  {key: 'S', description: 'DRUM 2', src: ''},
  {key: 'D', description: 'DRUM 3', src: ''},
  {key: 'F', description: 'DRUM 4', src: ''},
  {key: 'G', description: 'DRUM 5', src: ''},
  {key: 'H', description: 'DRUM 6', src: ''},
  {key: 'J', description: 'DRUM 7', src: ''},
  {key: 'K', description: 'DRUM 8', src: ''},
  {key: 'L', description: 'DRUM 9', src: ''}
];

export function setDrumListeners(btns: HTMLButtonElement[]) {
  btns.forEach(btn => {
    btn.addEventListener('click', () => handleDrumClick(btn));
  });
}

export function setKeydownListener() {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    const keyClicked = e.key.toUpperCase();
    const drum = getDrum(keyClicked);
    if (drum) {
      playDrum(drum);
    }
  });
}

function getDrum(keyClicked: string): Drum | undefined {
  return DRUMS.find(drum => drum.key === keyClicked);
}

function handleDrumClick(btn: HTMLButtonElement) {
  const btnKey = btn.dataset.key;
  if (!btnKey) {
    return;
  }
  const drum = getDrum(btn.dataset.key!);
  playDrum(drum!);
}

function playDrum(drum: Drum) {
  const drumBtn: HTMLButtonElement = document.querySelector(`button[data-key="${drum.key}"]`)!;

  drumBtn.setAttribute('play', '');

  setTimeout(() => {
    drumBtn.removeAttribute('play');
  }, 100);
}
