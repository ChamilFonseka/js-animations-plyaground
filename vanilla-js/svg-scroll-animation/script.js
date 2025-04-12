const progressBar = document.getElementById('scroll-progress-bar');
const svgPaths = document.querySelectorAll('svg path');

// Prepare each path
svgPaths.forEach(path => {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.dataset.length = length; // Store length for later
});

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = scrollTop / scrollHeight;
  const percent = scrollPercent * 100;

  console.log(`${scrollPercent} : ${percent}% : ${scrollTop/scrollHeight}`); // Debugging line

  // Update progress bar
  progressBar.style.width = percent + '%';

  // Animate each SVG path
  svgPaths.forEach(path => {
    const length = parseFloat(path.dataset.length);
    const drawLength = length * scrollPercent;
    path.style.strokeDashoffset = length - drawLength;
  });
});
