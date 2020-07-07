// Your code here
const dodger = document.getElementById('dodger');

// tried to get it mor DRY but I kept getting undefined for the stylePosition when passing this doger.style.whatever
// const move = (stylePosition, inc) => {
//   console.log(stylePosition)
//   const number = stylePosition.replace("px", "");
//   const pos = parseInt(number, 10);
//   stylePosition = `${pos - inc}px`;
// }

const moveDodgerLeft = () => {
    const number = dodger.style.left.replace("px", "");
    const pos = parseInt(number, 10);
    dodger.style.left = `${pos - 1}px`;
}

const moveDodgerRight = () => {
  const number = dodger.style.left.replace("px", "");
  const pos = parseInt(number, 10);
  dodger.style.left = `${pos + 1}px`;
}