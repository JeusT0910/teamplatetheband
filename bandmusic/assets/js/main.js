var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlider");
  for (i = 0; i < x.length; i++) {
      
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// dong mo mobile
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHight = header.clientHeight;
mobileMenu.onclick = function() {
  var isClosed = header.clientHeight === headerHight;
  if(isClosed) {
    header.style.height = 'auto';

  }else {
    header.style.height = null;
  }
}
// tu dong dong khi click vao mobile
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var a = 0; a < menuItems.length; a++) {
  var menuItem = menuItems[a];
  menuItem.onclick = function(event) {
    var isParentMenu = this.nextElementSibling && this;
    if(isParentMenu) {
      event.preventDefault();
      
    } else {
      header.style.height = null;
    }
    
  }
}
