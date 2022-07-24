const mover = document.querySelector(".circle");
const slider = document.querySelector(".slider");
const box = document.querySelector(".box");


mover.onmousedown = function (event) {

  function moveAt(pageX) {
    const sliderStyle = getComputedStyle(slider);
    let sliderLeft = sliderStyle.left;
    sliderLeft = parseInt(sliderLeft.replace("px", ""));


    const boxStyle = getComputedStyle(box);
    let boxLeft = boxStyle.left;
    boxLeft = parseInt(boxLeft.replace("px", ""));

    if (pageX >= sliderLeft + boxLeft && pageX <= sliderLeft + boxLeft + slider.offsetWidth) {
      mover.style.left = (pageX - boxLeft - mover.offsetWidth / 2) + "px";
      slider.style.backgroundImage = 'linear-gradient(to right, hsl(174, 77%, 80%) ' + (pageX - sliderLeft - boxLeft) + 'px, hsl(224, 65%, 95%) ' + (pageX - sliderLeft - boxLeft) + 'px 400px)';
    }


  }

  moveAt(event.pageX);

  function onMouseMove(event) {
    moveAt(event.pageX);
  }

  document.addEventListener("mousemove", onMouseMove);

  document.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    mover.onmouseup = null;
  };

};

mover.ondragstart = function(){
  return false;
};
