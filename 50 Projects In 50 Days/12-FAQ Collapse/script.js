const faq_toggle = document.querySelectorAll('.faq-toggle')
faq_toggle.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})