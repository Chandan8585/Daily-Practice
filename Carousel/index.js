const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const slider = document.querySelectorAll(".image-container");
let currentSlider = 0;
let maxSlider = slider.length - 1;

slider.forEach((image, index)=> {
    image.style.transform = `translateX(${index * 100}%)`
})

const nextButtonClickHandler = ()=> {
     if(currentSlider=== maxSlider){
        currentSlider = 0
     }
     else{
         currentSlider++;
     }
      slider.forEach((image, index)=> {
        image.style.transform = `translateX(${(index - currentSlider)* 100}%)`
      })
}

const prevButtonClickHandler = ()=> {
    if(currentSlider===0){
        currentSlider = maxSlider
    }else{
        currentSlider--;
    }
    slider.forEach((image,index)=> {
        image.style.transform = `translateX(${(index - currentSlider)* 100}%)`
    })
}

prevBtn.addEventListener("click", nextButtonClickHandler) ;
nextBtn.addEventListener("click", prevButtonClickHandler);