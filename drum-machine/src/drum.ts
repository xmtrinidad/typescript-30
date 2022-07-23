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

function handleDrumClick(btn: HTMLButtonElement) {
  console.log(btn);
}