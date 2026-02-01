// JavaScript source code
var id = null;
function Move() {
    FillClock();
    const elem = document.getElementById("animation");
    const con = document.getElementById("container");
    con.style.width = window.innerWidth+"px";
    con.style.height = window.innerHeight+"px";
    var x_pos = 0;
    var y_pos = 0;
    var x_shift = 1;;
    var y_shift = 1;
    clearInterval(id);
    let fontSize = document.getElementById("font-size").value;
    elem.style.fontSize = fontSize+"px";

    let interval = document.getElementById("interval").value;
    id = setInterval(frame, interval);
    function frame() {
        //if (pos == 250) clearInterval(id);
        //else
        //{
        x_pos += x_shift;
        y_pos += y_shift;
        elem.style.top = x_pos + 'px';
        elem.style.left = y_pos + 'px';
        if (x_pos === 0) x_shift = 1;
        if (x_pos === window.innerHeight) x_shift = -1;
        if (y_pos === 0) y_shift = 1;
        if (y_pos === window.innerWidth) y_shift = -1;

        //}
    }
}
function FillClock(){
    const elem = document.getElementById("animation");
    var d = new Date();
    elem.innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}
window.onload = function ()
{
    FillClock();
    window.setInterval
    (
        function ()
        {
                FillClock();

        }
    , 1000);

}