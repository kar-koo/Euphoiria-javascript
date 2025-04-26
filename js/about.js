document.addEventListener("DOMContentLoaded", function () {
    // Toggle Content Display and Button Rotation
    var img = document.getElementById("toggleBtn");
    var content = document.getElementById("content");
    img.addEventListener("click", function () {
        content.style.display = (content.style.display === "none") ? "block" : "none";
        img.style.transform = (img.style.transform === "rotate(0deg)") ? "rotate(180deg)" : "rotate(0deg)";
    });

    // Size Option Selection
    const sizeOptions = document.querySelectorAll(".size-option");
    sizeOptions.forEach(option => {
        option.addEventListener("click", function () {
            // Remove 'selected' class from all options
            sizeOptions.forEach(opt => opt.classList.remove("selected"));
            // Add 'selected' class to the clicked option
            this.classList.add("selected");
        });
    });

    // Dots Color Option Selection
    const dotsColor = document.querySelectorAll(".size-option-dots");
    dotsColor.forEach(option => {
        option.addEventListener("click", function () {
            // Remove 'selectedd' class from all options
            dotsColor.forEach(opt => opt.classList.remove("selectedd"));
            // Add 'selectedd' class to the clicked option
            this.classList.add("selectedd");
        });
    });

    // Menu List Activation
    function setActiveMenu(selectedTab) {
        document.querySelectorAll('.menu-list').forEach(menu => {
            menu.classList.remove('active_menu');
        });
        selectedTab.classList.add('active_menu');
    }

    // Similar Items - Toggle 'Active' State on Love Icons
    document.querySelectorAll(".love-icon").forEach(icon => {
        icon.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
    document.querySelectorAll("..small-image").forEach(img => {
        icon.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});
const scrollContainer = document.querySelector('.more-images');
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});
scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});
scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});
scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});
