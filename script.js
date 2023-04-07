//Cor Do Texto Metal
const txtElements = document.querySelectorAll('td');
const fontPicker = document.getElementById('fontPicker');

fontPicker.addEventListener('input', () => {
  const color = fontPicker.value;
  txtElements.forEach(element => {
    element.style.color = color;
  });
});


  ////Ametal e Metal

  const ametalElements = document.getElementsByClassName('ametal');
  const ametalPicker = document.getElementById("ametalPicker");
  
  ametalPicker.addEventListener("input", function() {
    let intervalId = setInterval(function() {
      for (let i = 0; i < ametalElements.length; i++) {
        ametalElements[i].style.backgroundColor = ametalPicker.value;
      }
    }, 10);
    
    setTimeout(function() {
      clearInterval(intervalId);
    }, 500);
  }); 

  const metalElements = document.getElementsByClassName('metal');
  const metalPicker = document.getElementById("metalPicker");
  
  metalPicker.addEventListener("input", function() {
    let intervalId = setInterval(function() {
      for (let i = 0; i < metalElements.length; i++) {
        metalElements[i].style.backgroundColor = metalPicker.value;
      }
    }, 10);
    
    setTimeout(function() {
      clearInterval(intervalId);
    }, 500);
  }); 


  

  
  
