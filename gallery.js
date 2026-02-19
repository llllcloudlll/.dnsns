document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    const closeBtn = document.getElementsByClassName("close-modal")[0];
    const images = document.querySelectorAll(".gallery-img");

    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() { modal.style.display = "none"; });
    modal.addEventListener("click", function(e) {
        if(e.target === modal) { modal.style.display = "none"; }
    });
});
