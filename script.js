// Typing animation

const text = ["a Frontend Devloper", "a Problem Solver", "a Software Developer"]
const typingElement = document.getElementById("typing")
const typingDelay = 1000

let index = 0
let char = 0
let isDeleting = false

function typeEffect(){

const current = text[index]

typingElement.textContent = current.substring(0, char)

if(!isDeleting && char < current.length){
char++
setTimeout(typeEffect, 100)
return
}

if(!isDeleting && char === current.length){
isDeleting = true
setTimeout(typeEffect, 1200)
return
}

if(isDeleting && char > 0){
char--
setTimeout(typeEffect, 60)
return
}

isDeleting = false
index = (index + 1) % text.length
setTimeout(typeEffect, 250)
}

setTimeout(() => {
typingElement.classList.add("typing-active")
typeEffect()
}, typingDelay)

// Skills filter
const skillFilterButtons = document.querySelectorAll(".skill-filter-btn")
const skillCards = document.querySelectorAll(".skill-showcase-card")

function updateSkillCategory(category){
skillFilterButtons.forEach((button) => {
button.classList.toggle("active", button.dataset.category === category)
})

skillCards.forEach((card) => {
card.hidden = card.dataset.category !== category
})
}

skillFilterButtons.forEach((button) => {
button.addEventListener("click", () => {
updateSkillCategory(button.dataset.category)
})
})

// Records filter
const recordFilterButtons = document.querySelectorAll(".record-filter-btn")
const recordCards = document.querySelectorAll(".record-card")

function updateRecordCategory(category){
recordFilterButtons.forEach((button) => {
button.classList.toggle("active", button.dataset.category === category)
})

recordCards.forEach((card) => {
card.hidden = card.dataset.category !== category
})
}

recordFilterButtons.forEach((button) => {
button.addEventListener("click", () => {
updateRecordCategory(button.dataset.category)
})
})

const activeRecordButton = document.querySelector(".record-filter-btn.active")

if(activeRecordButton){
updateRecordCategory(activeRecordButton.dataset.category)
}

// Contact form
const contactForm = document.getElementById("contactForm")

if(contactForm){
contactForm.addEventListener("submit", (event) => {
event.preventDefault()

const formData = new FormData(contactForm)
const name = formData.get("name")
const email = formData.get("email")
const subject = formData.get("subject")
const message = formData.get("message")

const emailSubject = encodeURIComponent(`${subject} - Message from ${name}`)
const emailBody = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}`
)

window.location.href = `mailto:shifakarnleia@email.com?subject=${emailSubject}&body=${emailBody}`
})
}

// Dark mode toggle
const toggle = document.getElementById("modeToggle")

toggle.onclick = function(){

document.body.classList.toggle("dark-mode")

if(document.body.classList.contains("dark-mode")){
toggle.innerHTML = "\u2600\uFE0F"
}else{
toggle.innerHTML = "\uD83C\uDF19"
}

}
