function attach() {
  var text_val = document.getElementById("ex1").value;
  var list_ele = document.getElementById("tags");
  var ele = document.createElement("li");
  var span_ele = document.createElement("span");
  span_ele.setAttribute("class", "close mt-2");
  span_ele.setAttribute("onclick", "this.parentElement.style.display='none'");
  span_ele.innerHTML = "&times;";
  ele.innerText = text_val;
  ele.append(span_ele);
  console.log(ele);
  console.log(span_ele);
  document.getElementById("ex1").value = "";
  list_ele.appendChild(ele);
}

var closebtns = document.getElementsByClassName("close");
var i;
console.log(closebtns.length);
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}
