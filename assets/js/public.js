/**
 * 获取url里的参数 ....?type=html&name=a&attr=mail
 * @returns
 *  type - 类型
 *  name - js 文件名
 *  attr - 字段/属性
 */
function getParams() {
  return new Promise((resolve) => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    // 参数对象
    const params = {};
    for (let param of urlParams.entries()) {
      params[param[0]] = param[1];
    }
    resolve(params);
  });
}

/**
 * 动态加载JS文件
 * @param {*} file
 * @param {*} cb
 */
function loadJS(file, cb) {
  const head = document.getElementsByTagName("head")[0];
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = file;
    s.addEventListener("load", (e) => resolve(), false);
    head.appendChild(s);
  }).then(cb);
}

// /**
//  * 动态加载JS复数文件
//  * @param {*} files
//  * @param {*} cb
//  */
// function loadJSs(files, cb) {
//   const head = document.getElementsByTagName('head')[0];
//   Promise.all(
//     files.map((file) => {
//       return new Promise((resolve) => {
//         const s = document.createElement('script');
//         s.type = 'text/javascript';
//         s.async = true;
//         s.src = file;
//         s.addEventListener('load', (e) => resolve(), false);
//         head.appendChild(s);
//       });
//     })
//   ).then(cb);
// }

// window.addEventListener()
// window.addEventListener('beforeunload', function (event) {
//   // 在用户关闭页面之前执行的操作
//   // 可以在这里做一些清理工作，保存数据等
//   // 在某些浏览器中，必须返回一个字符串以触发浏览器的确认框弹出
//   event.preventDefault();
//   event.returnValue = ''; // 这里可以返回一个字符串来触发浏览器的确认框弹出
//   console.log('111111111111111111111111111111');
// });
