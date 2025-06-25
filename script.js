// 获取按钮元素
const btn = document.querySelector('button');
// 给按钮绑定点击事件
btn.addEventListener('click', () => {
  // 基础版：弹窗提示
  alert('报名成功！我们会尽快联系你～');
  // 进阶版：跳转页面（需创建 success.html 文件）
  // window.location.href = 'success.html';
});
// 行程安排点击展开详情（假设每个 day 可以点开展开隐藏内容）
const days = document.querySelectorAll('.day');
days.forEach(day => {
  day.addEventListener('click', () => {
    const details = day.querySelector('p');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
    // 也可以加动画，比如用 CSS 过渡
    // details.style.transition = 'all 0.3s ease';
    // details.style.maxHeight = details.style.maxHeight ? null : '200px';
  });
});