const date = new Date()
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;







function showSideBar(){
    const sidebar = document.getElementById('burger-menu')
    sidebar.style.display = "flex"
}

function closeSideBar(){
    const sidebar = document.getElementById('burger-menu')
    sidebar.style.display = "none"
}