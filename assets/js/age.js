document.addEventListener("DOMContentLoaded", function() {
    let currentAge = 17;

    const ageText = document.getElementById("ageText");

    function incrementAge() {
        const currentDate = new Date();
        if (currentDate.getMonth() === 2 && currentDate.getDate() === 5) {
            currentAge++;
            //ageText.textContent = currentAge;
        }
        ageText.textContent = currentAge;
    }

    setInterval(incrementAge, 1000);
});