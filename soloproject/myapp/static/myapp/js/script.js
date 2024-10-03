// slider

let currentSlide = 1;
                  let totalSlides = 10;
                  
                  $('.next').click(function() {
                    if (currentSlide < totalSlides) {
                      currentSlide++;
                      $('.row').animate({
                        scrollLeft: '+=' + (300 * currentSlide) + 'px'
                      }, 500);
                      updateNumeration();
                    }
                  });
                  
                  $('.prev').click(function() {
                    if (currentSlide > 1) {
                      currentSlide--;
                      $('.row').animate({
                        scrollLeft: '-=' + (300 * currentSlide) + 'px'
                      }, 500);
                      updateNumeration();
                    }
                  });
                  
                  function updateNumeration() {
                    $('.numeration span').text(currentSlide + '/' + totalSlides);
                  }


//Password Show/Hide
const passwordinputs = document.querySelectorAll('input[type="password"]');
passwordinputs.forEach(input=> {
  const toggleButton =
  document.createElement('button');
  toggleButton.textContent = 'Show';
  input.parentNode.appendChild(toggleButton);
  
  toggleButton.addEventListener('click', () =>{
  if(input.type === 'password'){
    input.type = 'text';
    toggleButton.textContent = 'Hide';
  } else {
    input.type = 'password';
    toggleButton.textContent = 'Show';
  }


  });

  });


  //Search Input Placeholder Animation

  //search input

  const searchinput =
  document.querySelector('.search-input');
  searchInput.addEveentlistener('focus', () =>
  {

    searchInput.placeholder = ";
  });
  searchInput.addEventlistener('blur', () => {
    searchInput.placeholder = 'Search....';
  })
