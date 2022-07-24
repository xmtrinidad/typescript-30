export type Drum = {
  key: string,
  description: string,
  file: string
}

export const DRUMS: Drum[] = [
  {key: 'A', description: 'BOOM', file: ''},
  {key: 'S', description: 'THING', file: ''},
  {key: 'D', description: 'TEST', file: ''}
];

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

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
