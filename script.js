
document.addEventListener('DOMContentLoaded', function() {
    var back = document.querySelectorAll('.back');
    var openMenu = document.getElementById('start-menu-button');
    var closeMenu = document.getElementById('end-menu-button');
    var menuSidebar = document.getElementById('menu-sidebar');

    openMenu.addEventListener('click', function(){
        menuSidebar.style.transform = 'translateX(0)';
        menuSidebar.style.opacity = '1';
    });
    closeMenu.addEventListener('click', function(){
        menuSidebar.style.opacity = '0';
        menuSidebar.style.transform = 'translateX(100%)';
    });

    back.forEach(function(backElement) {
        backElement.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            closeSidebars();
        });
    });

    function closeSidebars() {
        var sidebars = document.querySelectorAll('.other-sidebar');
        sidebars.forEach(function(sidebar) {
            sidebar.style.transform = 'translateX(100%)';
        });
    }

    var links = document.querySelectorAll('.sidebar-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('data-target');
            var targetSidebar = document.querySelector('.' + targetId);
            closeSidebars();
            targetSidebar.style.transform = 'translateX(0)';
        });
    });




});