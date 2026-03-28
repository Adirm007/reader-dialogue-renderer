// 读者对话渲染 - 入口文件
// 由 webpack 打包成单个 HTML 文件
import './style.css';

// 初始化: 从 window._dn 和 window._dt 读取正则捕获组传入的数据
// 外链版正则 JSON 的 replaceString 会在 load() 前设置这两个变量
(function injectDreamData() {
  var name = window._dn || '';
  var text = window._dt || '';
  var contentEl = document.getElementById('dream-content');
  var nameEl = document.getElementById('dream-name');
  if (contentEl && text) contentEl.innerHTML = text;
  if (nameEl && name) nameEl.textContent = name;
})();

// 加载核心逻辑
import './main.js';
