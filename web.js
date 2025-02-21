document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".mohit, .pranav");
    const indicators = document.querySelectorAll(".number ul li");
    let currentIndex = 0;
    const intervalTime = 10000;
    let interval;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = "none";
        });
        sections[index].style.display = "block";

        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add("active");
                indicator.style.backgroundColor = "black";
            } else {
                indicator.classList.remove("active");
                indicator.style.backgroundColor = "gray";
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % sections.length;
        showSection(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + sections.length) % sections.length;
        showSection(currentIndex);
    }

    function startSlideshow() {
        interval = setInterval(nextSlide, intervalTime);
    }

    indicators.forEach((indicator, index) => {
        indicator.style.cursor = "pointer";
        indicator.addEventListener("click", function () {
            clearInterval(interval);
            currentIndex = index;
            showSection(currentIndex);
            startSlideshow();
        });
    });

    showSection(currentIndex);
    startSlideshow();
});
