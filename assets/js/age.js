document.addEventListener("DOMContentLoaded", function() {
    let currentAge = 17;

    const ageText = document.getElementById("ageText");

    const currentDate = newDate();
    if (currentDate.getMonth() == 2 && currentDate.getDate() == 5) {
        currentAge++;
        ageText.textContent = currentAge;
    }
})