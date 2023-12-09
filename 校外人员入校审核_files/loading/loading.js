/**
 * 倒计时10s中提醒用户
 */
function reloadTips() {
  setTimeout(() => {
    let ele = document.getElementById("loading-tips");
    if (ele) {
      ele.innerHTML = "加载时间过长，请检查网络或退出重试"
    }
  }, 10 * 1000);
}


/**
 * 显示加载框
 */
function showLoading() {
  var loading = "    <div class=\"loading\">\n" +
    "        <div class=\"loading-container\">\n" +
    "            <div class=\"loading-container-dot dot-1\"></div>\n" +
    "            <div class=\"loading-container-dot dot-2\"></div>\n" +
    "            <div class=\"loading-container-dot dot-3\"></div>\n" +
    "        </div>\n" +
    "        <div id='loading-tips' class=\"loading-tips\">&nbsp;</div>\n" +
    "    </div>";
  var root = document.getElementById("app");
  root.innerHTML = loading;

  reloadTips();
}

showLoading();
