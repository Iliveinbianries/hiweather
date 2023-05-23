function changeValues() {
    let a = 50;
    let b = 50;
    let c = 50;
    let increment = 1;
    let incrementing = true;
  
    setInterval(() => {
      if (incrementing) {
        a += increment;
  
        if (a >= 160) {
          a = 160;
          b += increment;
  
          if (b >= 160) {
            b = 160;
            c += increment;
  
            if (c >= 160) {
              c = 160;
              incrementing = false;
            }
          }
        }
      } else {
        c -= increment;
  
        if (c <= 50) {
          c = 50;
          b -= increment;
  
          if (b <= 50) {
            b = 50;
            a -= increment;
  
            if (a <= 50) {
              a = 50;
              incrementing = true;
            }
          }
        }
      }
  
      const rgbValue = `rgb(${a}, ${b}, ${c})`;
      const element = document.getElementById('container'); 
      element.style.backgroundColor = rgbValue;
    }, 25);
  }
  
  changeValues();
  