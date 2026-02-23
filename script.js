const strengthSelect = document.getElementById("strength");
const inputNewDiv = document.getElementById("inputnew");
const generateBtn = document.getElementById("generate");
const passwordOutput = document.getElementById("password");

const specialChars = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
    '{', '}', '[', ']', '|', '\\', '/', ':', ';', '"', "'", '<', '>', ',',
    '.', '?', '`', '~'
];

strengthSelect.addEventListener("change", function () {

    inputNewDiv.innerHTML = "";

    if (this.value === "hard" || this.value === "ultimate") {

        const input3 = document.createElement("input");
        input3.type = "text";
        input3.id = "thirdword";
        input3.placeholder = "Enter third word";

        const input4 = document.createElement("input");
        input4.type = "text";
        input4.id = "fourthword";
        input4.placeholder = "Enter fourth word";

        inputNewDiv.appendChild(input3);
        inputNewDiv.appendChild(input4);
    }
});


generateBtn.addEventListener("click", function () {

    const strength = strengthSelect.value;

    let firstword = document.getElementById("firstword").value;
    let secondword = document.getElementById("secondword").value;

    let thirdword = "";
    let fourthword = "";

    if (strength === "hard" || strength === "ultimate") {
        thirdword = document.getElementById("thirdword")?.value || "";
        fourthword = document.getElementById("fourthword")?.value || "";
    }

    function randomChar() {
        return specialChars[Math.floor(Math.random() * specialChars.length)];
    }

    let password = "";

    if (strength === "easy") {

        password =
            firstword + randomChar() +
            secondword + randomChar();

    } else if (strength === "hard") {

        password =
            firstword.split("").reverse().join("") + randomChar() +
            secondword.split("").reverse().join("") + randomChar() +
            thirdword.split("").reverse().join("") + randomChar() +
            fourthword.split("").reverse().join("") + randomChar();

    } else if (strength === "ultimate") {

        function alternateCase(str) {
            return str.split("")
                .map((char, index) =>
                    index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
                )
                .join("");
        }

        password =
            alternateCase(firstword).split("").reverse().join("") + randomChar() +
            alternateCase(secondword).split("").reverse().join("") + randomChar() +
            alternateCase(thirdword).split("").reverse().join("") + randomChar() +
            alternateCase(fourthword).split("").reverse().join("") + randomChar();
    }

    passwordOutput.textContent = password;
});