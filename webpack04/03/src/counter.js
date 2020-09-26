/*
 * @Author: 梁杰
 * @Date: 2020-09-26 17:21:25
 * @LastEditors: 梁杰
 * @LastEditTime: 2020-09-26 17:21:53
 * @Description: 
 */
function counter() {
    var div = document.createElement("div");
    div.setAttribute("id", "counter");
    div.innerHTML = 1;
    div.onclick = function () {
        div.innerHTML = parseInt(div.innerHTML, 10) + 1;

    };
    document.body.appendChild(div);
}
export default counter;