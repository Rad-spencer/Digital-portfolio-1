Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["animation/BIGBOSS0001-0250.mp4","animation/ZODIAC CONTROLLER- colored.mp4","animation/Visual bleez.mp4"] });


gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1,
})

let sections = document.querySelectorAll(".fleftelem")
Shery.imageEffect(".images", {
    style: 5,
    config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
      sections.forEach(function(section,index){
        ScrollTrigger.create({
            trigger: section,
            start:"top top",
            scrub:1,
            onUpdate: function(prog){
               setScroll(prog.progress+index);
            }
        })
      })
    },
  });