document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".basic, .standerd, .premium");
    const indicators = document.querySelectorAll(".price ul li");
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
                indicator.style.backgroundColor = "gray";
            } else {
                indicator.classList.remove("active");
                indicator.style.backgroundColor = "white";
            }
        });
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
