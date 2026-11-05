
function hello() {
    const namn = document.getElementById('namn').value;
    let output = "";

    if (namn === "Fredrik" || namn === "Fredde") {
        output = "Hej, du gillar JavaScript!";
    } else if (namn === "Dennis") {
        output = "Hej, du gillar robotar!";
    } else {
        output = "Jag känner inte dig.";
    }

    document.getElementById('name-output').textContent = output;
}

