// footer year
const date = new Date()
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

// NAVBAR Mechanics
function showSideBar(){
    const sidebar = document.getElementById('burger-menu')
    sidebar.style.display = "flex"
}

function closeSideBar(){
    const sidebar = document.getElementById('burger-menu')
    sidebar.style.display = "none"
}

// Animations
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const profpic = document.getElementById('profpic');
    const abouther = document.getElementById('abouther');
    


    if (scrolled > 11){
        profpic.classList.add("slideRight");
        abouther.classList.add("slideLeft");
    }
    else{
        profpic.classList.remove("slideRight");
        abouther.classList.remove("slideLeft");
    }

    
});

window.addEventListener('scroll', () => {

    const scrolled = window.scrollY;
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');
    const div4 = document.getElementById('div4');
    const div5 = document.getElementById('div5');
    const div6 = document.getElementById('div6');

    if (scrolled >= 1700){
        div1.classList.add("slideRight2");
        div2.classList.add("slideLeft2");
    }
    if(scrolled >= 2100){
        div3.classList.add("slideRight2")
        div4.classList.add("slideLeft2");
    }
    if(scrolled >= 2400){
        div5.classList.add("slideRight2")
        div6.classList.add("slideLeft2");
    }
});