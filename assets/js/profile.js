/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tc => {
                    tc.classList.remove('filters__active')
                })
                target.classList.add('filters__active')
                
                tabs.forEach(t => {
                    t.classList.remove('filter-tab-active')
                })
                tab.classList.add('filter-tab-active')
            })
        })

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filter`, {delay: 1000})

/*=============== LIKE BUTTON ===============*/
var likeButton = document.getElementById("like-button");
var likeCount = document.getElementById("like-count");

// check if there is a stored like count in localStorage
if (localStorage.getItem("likeCount")) {
  likeCount.innerHTML = localStorage.getItem("likeCount");
} else {
  // set the initial like count to 0
  localStorage.setItem("likeCount", 0);
  likeCount.innerHTML = 0;
}

// check if the button has been clicked before
if (localStorage.getItem("clicked") === "true") {
  likeButton.innerHTML = '<i class="ri-thumb-up-fill"></i>';
}

likeButton.addEventListener("click", function() {
  var count = parseInt(localStorage.getItem("likeCount"));
  // check the button text and toggle the count accordingly
  if (likeButton.innerHTML === '<i class="ri-thumb-up-line"></i>') {
    count++;
    localStorage.setItem("clicked", "true");
    likeButton.innerHTML = '<i class="ri-thumb-up-fill"></i>';
  } else {
    count--;
    localStorage.setItem("clicked", "false");
    likeButton.innerHTML = '<i class="ri-thumb-up-line"></i>';
  }
  localStorage.setItem("likeCount", count);
  likeCount.innerHTML = count;
});
