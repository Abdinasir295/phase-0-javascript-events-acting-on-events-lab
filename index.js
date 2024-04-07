function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left) || 0;
    const newPosition = Math.max(0, currentPosition - 10) + 'px';
    dodger.style.left = newPosition;
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left) || 0;
    const newPosition = Math.min(360, currentPosition + 10) + 'px';
    dodger.style.left = newPosition;
}

