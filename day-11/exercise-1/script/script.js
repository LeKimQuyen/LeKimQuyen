function togglePattern() {
  // Enter your code here!
  console.log("Hello world!");
  let video = document.querySelector('#pattern');
  let btn = document.querySelector('#patternButton');

  if (video.style.display === 'none') {
    video.style.display = 'block';
    btn.innerHTML = 'Hide pattern';
  } else {
    video.style.display = 'none';
    btn.innerHTML = 'Reveal!';
  }
};