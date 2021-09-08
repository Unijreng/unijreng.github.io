let i;

function loading() {
    i = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    const myDiv = document.getElementById("myDiv");
    myDiv.style.display = "flex";
    //menambahkan comment
    myDiv.style.flexDirection = "column";
}

// const paragraph = document.querySelector(".paragraph");
const about = document.querySelector("#about");
const par = document.querySelector(".par1 p");
const button = document.querySelector(".buttonKirim");
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const iframe = document.querySelector(".map iframe");
const unijreng = document.querySelector(".unijreng");

function fadeInUp(element) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated")
                entry.target.classList.add("animate__fadeInUp");
                entry.target.style.animationDuration = "1.5s";
            }
        });
    });
    observer.observe(element);
}

function fadeInUp2(element) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated")
                entry.target.classList.add("animate__fadeInUp");
                entry.target.style.animationDuration = "0.8s";
            }
        });
    });
    observer.observe(element);
}

function fadeInDown(element) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated");
                entry.target.classList.add("animate__fadeInDown");
                entry.target.style.animationDuration = "1s";
            }
        });
    });
    observer.observe(element);
}

fadeInUp(about);
fadeInUp(par);
fadeInUp(button);
fadeInUp(card1);
fadeInUp(card2);
fadeInDown(iframe);
fadeInUp2(unijreng);