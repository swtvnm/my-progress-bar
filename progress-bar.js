function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.value = scrollPercentage;
  }
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('load', updateProgressBar);
