function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  // let isCheck = document.getElementById('check');
  // let isBgColor = document.getElementById('text').style.backgroundColor;
  // if (isCheck) {
  //   isBgColor = "#ff0000";
  // }else {
  //   isBgColor = '';
  // }
  if (document.getElementById('check')) {
    document.getElementById('text').style.backgroundColor = "#ff0000";
  }else {
    document.getElementById('text').style.backgroundColor = '';
  }
}
