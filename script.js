let dictionary = {
    "Hello": "A greeting",
    "World": "The earth, together with all of its countries and peoples",
    "JavaScript": "A programming language commonly used in web development",
    "Code": "A system of words, letters, figures, or symbols used to represent others",
    "Function": "A block of code designed to perform a particular task"
}
console.log("Dictionary: ", dictionary);

function getSelectedWord() {
    const selectedRadio = document.querySelector('input[name="word"]:checked');
    console.log("Selected Radio: ", selectedRadio);
    if (selectedRadio) {
        if (selectedRadio.value in dictionary) {
            const meaning = dictionary[selectedRadio.value];
            console.log("Meaning: ", meaning);
            document.getElementById("meaning").innerText = meaning;
        }
        else {
            alert("Meaning not found for the selected word.");
            const meaning = 'Meaning not found for the selected word.'
            console.log("Meaning: ", meaning);
            document.getElementById("meaning").innerText = meaning;
            // Changing color of the result div
            const resultDiv = document.querySelector(".result");
            resultDiv.style.backgroundColor = "rgb(255, 200, 200)"; // light red
        }

    }
    else {
        alert("Please select a word.");
        return;
    }
}