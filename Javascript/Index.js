var elements = document.getElementsByClassName("column");
var i;
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
    elements[i].style.MarginRight = "100%";
  }
}
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "25%";
    elements[i].style.marginRight = "0%";
  }
} 