
document.querySelectorAll('.video-js').forEach(video => {
    videojs(video);
})

document.addEventListener("DOMContentLoaded", function() {
    var openModalBtns = document.querySelectorAll(".openModalBtn");

    openModalBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var modalId = btn.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    var closeBtns = document.querySelectorAll(".modal .close");

    closeBtns.forEach(function(closeBtn) {
        closeBtn.addEventListener("click", function() {
            var modal = closeBtn.closest(".modal");
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        var modals = document.querySelectorAll(".modal");
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});



