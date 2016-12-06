var rem,window_w;
function resetREM(){
    window_w = window.innerWidth;
    rem = window_w / 750 * 100;
    document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}
window.onload = window.onresize = resetREM;