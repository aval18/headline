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

//

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
