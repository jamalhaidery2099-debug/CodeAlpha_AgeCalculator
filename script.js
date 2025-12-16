function calculateAge() {
    let dob = document.getElementById("dob").value;
    let result = document.getElementById("result");

    // Input Validation
    if (dob === "") {
        result.innerHTML = "⚠ Please select your Date of Birth";
        result.style.color = "red";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.style.color = "green";
    result.innerHTML = `Your Age is <br> 
        ${years} Years, ${months} Months, ${days} Days`;
}
