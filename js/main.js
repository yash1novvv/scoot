let navList = document.querySelector(".nav-list");
let openBtn = document.querySelector(".opBtn");
let closeBtn = document.querySelector(".clBtn")

openBtn.addEventListener("click", function() {
    openBtn.classList.add("btnOpen");
    openBtn.classList.remove("open-btn");
    closeBtn.classList.add("close-btn")
    closeBtn.classList.remove("clBtn");
    navList.classList.add("list");
    navList.classList.remove("list-none")
})

closeBtn.addEventListener("click", function() {
    openBtn.classList.add("open-btn");
    openBtn.classList.remove("btnOpen");
    closeBtn.classList.add("clBtn")
    closeBtn.classList.remove("close-btn");
    navList.classList.add("list-none");
    navList.classList.remove("list")
})