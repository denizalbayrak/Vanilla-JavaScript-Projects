const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.closeBtn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
})
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove("show-sidebar");
})