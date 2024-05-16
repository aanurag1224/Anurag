// document.addEventListener('DOMContentLoaded', function() {
//     var media = document.getElementById('media');
//     var mediaLink = document.getElementById('media-link');
//     var back = document.getElementById('back');

//     media.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent the default anchor behavior
//         mediaLink.style.transform = 'translateX(0)';
//     });

//     back.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent the default anchor behavior
//         mediaLink.style.transform = 'translateX(100%)';
//     });

// });

document.addEventListener('DOMContentLoaded', function() {
    var back = document.querySelectorAll('.back');

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