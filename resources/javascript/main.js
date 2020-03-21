// Mobile Nav
function openNav() {
  document.getElementById("mobile").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile").style.width = "0%";
  document.getElementById("mobileShop").style.width = "0%";
}

// Shop nav

function openShop() {
  document.getElementById("mobileShop").style.width = "87%";
}

function closeShop() {
  document.getElementById("mobileShop").style.width = "0%";
}

// Pages

function openPage(pageName) {
  // Hide all elements with class="tabcontent" by default */
  var i, page, tab;
  page = document.getElementsByClassName("page");
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
}

document.getElementById("defaultOpen").click();

// Thanks Message
