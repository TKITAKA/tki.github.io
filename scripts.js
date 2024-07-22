document.addEventListener("DOMContentLoaded", function() {
  const pages = document.querySelectorAll('.page');
  const inputs = document.querySelectorAll('input[name="trigger"]');

  inputs.forEach((input, index) => {
    input.addEventListener('change', () => {
      pages.forEach((page, pageIndex) => {
        page.style.display = pageIndex === index ? 'block' : 'none';
      });
    });
  });

  // 기본적으로 첫 페이지를 표시합니다.
  if (inputs.length > 0) {
    inputs[0].checked = true;
    pages[0].style.display = 'block';
  }
});
