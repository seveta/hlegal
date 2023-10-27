// Получаем элемент input и элемент для вывода сообщения об ошибке
let emailInput = document.getElementById('emailInput');
let phoneInput = document.getElementById('phoneInput');
let nameInput = document.getElementById('nameInput');


$('.popupBtn').click(function (event) {
    $('.popup-wrapper').addClass('active');
    const target = $(this).data('target');
    $(target).addClass('active');
});

$('.popup-wrapper, .popup-window .close, .nav .close, .burger-nav-wrapper').click(function (event) {

    if (this === event.target){
        $('.popup-wrapper').removeClass('active');
        $('.popup-window').removeClass('active');
        $('.burger-nav-wrapper').removeClass('active');
        $('.nav').removeClass('active');
    }

})

$('.burger').click(function(event) {
    $('.nav').addClass('active');
    $('.burger-nav-wrapper').addClass('active');
    const target = $(this).data('target');
    $(target).addClass('active');
})


function scrollToElem(event, elem){
    event.preventDefault()
    const target = document.querySelector(elem.hash)
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
    })
};

$('#main-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });

$(document).ready(function(){
    $('#slider').slick({
        speed: 300,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
      }
              },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      });
})

emailInput.addEventListener('input', function () {
    if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid'); 
    }
});
emailInput.addEventListener('blur', function () {
    emailInput.classList.remove('invalid');
});

function isValidEmail(email) {
    return email.includes('@');
}

phoneInput.addEventListener('input', function () {
    if (!isValidPhoneNumber(phoneInput.value)) {
        phoneInput.classList.add('invalid');
    } else {
        phoneInput.classList.remove('invalid');
    }
});

phoneInput.addEventListener('blur', function () {
    phoneInput.classList.remove('invalid');
});

function isValidPhoneNumber(phoneNumber) {
    return /\d{10}$/.test(phoneNumber);
}

nameInput.addEventListener('input', function () {
    if (!isValidName(nameInput.value)) {
        nameInput.classList.add('invalid');
    } else {
        nameInput.classList.remove('invalid');
    }
});

nameInput.addEventListener('blur', function () {
    nameInput.classList.remove('invalid');
});

function isValidName(name) {
    return /^[^\d]*$/.test(name);
}

