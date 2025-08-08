$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#product1', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});

// Hero Carousel
let currentSlide = 0;
const slides = $('.carousel-slide');
const indicatorsContainer = $('.carousel-indicators');

slides.each((i) => {
    indicatorsContainer.append(`<span data-index="${i}"></span>`);
});
const indicators = $('.carousel-indicators span');

function showSlide(index) {
    slides.removeClass('active');
    $(slides[index]).addClass('active');
    indicators.removeClass('active').eq(index).addClass('active');
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

$('.next').click(function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

$('.prev').click(function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

indicatorsContainer.on('click', 'span', function () {
    const index = $(this).data('index');
    showSlide(index);
    resetCarouselTimer();
});

// Auto-slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 8000);

// Submenu Mobile
document.addEventListener("DOMContentLoaded", () => {
    const mobileBtn = document.getElementById("mobile_btn");
    const mobileMenu = document.getElementById("mobile_menu");
  
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
      });
    }
  
    const submenuToggles = document.querySelectorAll(".submenu-toggle");
  
    submenuToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        const parentItem = toggle.closest(".has-submenu");
        parentItem.classList.toggle("open");
  
        // Alternar ícone (chevron down/up)
        const icon = toggle.querySelector("i");
        if (icon) {
          icon.classList.toggle("fa-chevron-down");
          icon.classList.toggle("fa-chevron-up");
        }
      });
    });
  });
