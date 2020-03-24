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
// GSAP Animaition

var controller = new ScrollMagic.Controller();

$(".wrapper").each(function() {
  var tl = new TimelineMax();
  var child = $(this).find(".child");
  tl.to(child, 1, { y: -180, ease: Linear.easeNone });

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.4,
    duration: "100%"
  })
    .setTween(tl)
    .addIndicators({
      colorTrigger: "wheat",
      colorStart: "wheat",
      colorEnd: "wheat",
      indent: 10
    })
    .addTo(controller);
});
