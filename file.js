const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const calculate = document.querySelector("#calculate")
const yourBMI = document.querySelector("#yourBMI")

calculate.addEventListener("click" , ()=>{
        //BMI = Body Mass Index
    //m = Mass Means Weight (KG)
    //h = Height (CM)
    //Formula = B = m/h²

    if(height.value != "" && weight.value != ""){
        let bmiValue = weight.value / (height.value * height.value) * 10000;
        yourBMI.innerHTML = `Your BMI Is : <span> ${bmiValue.toFixed(2)} </span>`
    }
else
{
    yourBMI.innerHTML ='please Enter Correct Value'
}

    
})

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  };
  window.addEventListener("scroll", scrollUp);
  
  /*=============== SCROLL REVEAL ANIMATION ===============*/
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });
  sr.reveal(`.home__data, .footer__container, .footer__group`);
  sr.reveal(`.home__img`, { delay: 700, origin: "bottom" });
  sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 });
  sr.reveal(`.choose__img, #calculator`, { origin: "left" });
  sr.reveal(`.choose__content, #calculator`, { origin: "right" });