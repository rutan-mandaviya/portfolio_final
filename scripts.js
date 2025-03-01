var tl=gsap.timeline()
// var tl = gsap.timeline();


tl.from("#right a",{
    // y:0,
    opacity:0,
    duration:.8,
    stagger:0.4,
    // rotate:100,
})


tl.from("#content",{
    // rotate:360,
    opacity:0,
    duration:.8,
    x:-300,
    stagger:0.4,
})

tl.from("#button a",{
    y:50,
    x:50,
    opacity:0,
    duration:1,
    stagger:0.4,
})
tl.from(".social-bar",{
    y:-50,
    x:-50,
    rotate3d:150,
    opacity:0,
    duration:1,
    stagger:0.4,
})