// Inclusive random integer
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const numOfStars = Math.floor(document.body.clientWidth) / 10; // 10 is an arbitrary choice! :-)

for (let i = 0; i < numOfStars; i++) {
  // Create properties of a star
  const xPos = random(0, 100); // % across body
  const yPos = random(0, 100);
  const size = random(1, 4);
  const opacity = random(4, 8) / 10; // 0.4 to 0.8
  // const colour = '#ffffff';

  // Add a star to the body
  let star = document.createElement('div');
  star.style.position = 'fixed';
  star.style.zIndex = -100;
  star.style.left = xPos + '%';
  star.style.top = yPos + '%';
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  // star.style.backgroundColor = colour;
  star.style.backgroundImage = 'radial-gradient(#ffffff, #000000)';
  star.style.opacity = opacity;
  document.body.appendChild(star);
}

