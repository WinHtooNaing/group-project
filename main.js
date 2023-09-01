// change navbar styles on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
})


//show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(clickedFaq => {
    clickedFaq.addEventListener('click', () => {
        clickedFaq.classList.toggle('open');

        // Change icon
        const icon = clickedFaq.querySelector('.faq_icon i');
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    });
});

//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");
const navContainerForPhoneTag = document.querySelector(".navContainerForPhone")



// closeBtn.addEventListener('click', () => {
//     menu.classList = ("navBarForX");
// })

let isTrue = false;

menuBtn.addEventListener('click', () => {
    if(isTrue == true) {
        navContainerForPhoneTag.style.left = "-100vw"
        isTrue= false

    }else{
        navContainerForPhoneTag.style.left = "0vw"
        isTrue = true

    }
});



