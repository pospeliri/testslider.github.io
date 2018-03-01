var el = document.getElementsByClassName("nav_container")[0];
var el2 = document.getElementsByClassName("fixed_nav")[0];
var el3 = document.getElementsByClassName("hamburger")[0];
var el4 = document.getElementsByClassName("mobile_menu")[0];
var nav = document.getElementsByTagName('nav')[0];
var windowWidth = window.innerWidth;
var indexTrg = 0;

function onScroll(event){
  var offset = window.pageYOffset || document.documentElement.scrollTop;
  
  /* Mobile Menu */
  if (windowWidth <= 770) {
    if(indexTrg%2 == 1) {
      el.style.cssText = "transform:translate(0,0px); opacity: 1;";
    }
    else if (offset < 100) {
      el.style.cssText = "transform:translate(0,0px); opacity: 1;";
    }
    else if(offset > previousTop){
      el.style.cssText = "transform:translate(0,-60px); opacity: 0;";
    }
    else {
      el.style.cssText = "transform:translate(0,0px); opacity: 1;  background-color: #282f36; box-shadow: 0 25px 100px rgba(0, 0, 0, 0.3);";
    }
  }
  

  /* Fixed Nav */
  if (offset < 650) {
    el2.style.cssText = "transform:translate(0,-60px); opacity: 0;";
  }
  else {
    el2.style.cssText = "transform:translate(0,0px); opacity: 1;";
  }
  previousTop = offset;
}

function changeMenu () {

  var offset = window.pageYOffset || document.documentElement.scrollTop;
  previousTop = offset;
  indexTrg++;
  if(indexTrg%2 == 1) {
    el.style.cssText = "transform:translate(0,0px); opacity: 1; background-color: #282f36;";
    el3.className = 'hamburger close';
    el4.style.cssText = 'transform:translate(100%,0);';
    document.getElementsByTagName("body")[0].style.cssText = 'overflow:hidden;'
  }
  else {
    el.style.cssText = "transform:translate(0,0px); opacity: 1;  background-color: #282f36; box-shadow: 0 25px 100px rgba(0, 0, 0, 0.3);";
    el3.className = 'hamburger';
    el4.style.cssText = 'transform:translate(0%,0);';
    document.getElementsByTagName("body")[0].style.cssText = 'overflow:initial;'
  }
}

var previousTop = 0;
window.addEventListener('scroll', onScroll);