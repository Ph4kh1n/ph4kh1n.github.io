document.addEventListener("DOMContentLoaded", function() {
    let currentAge = 17;

    function isOct13() {
        let currentDate = new Date();
        return currentDate.getMonth() === 2 && currentDate.getDay() === 6;
    }

    /*function incrementAge() {
        currentAge++;
    }*/

    setInterval(function() {
        if (isOct13()) {
            //incrementAge();
            currentAge++;
        }
        document.getElementById("ageText").innerText = currentAge;
    }, 1000);
});