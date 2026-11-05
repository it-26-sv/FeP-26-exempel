
function hello(namn) {
    let output = "";

    if (namn === "Fredrik" || namn === "Fredde") {
        output = "Hej, du gillar JavaScript!";
    } else if (namn === "Dennis") {
        output = "Hej, du gillar robotar!";
    } else {
        output = "Jag känner inte dig.";
    }
    return output;
}

function helloHandler() {
    const namn = document.getElementById('namn').value;
    const helloOutput = hello(namn);
    document.getElementById('name-output').textContent = helloOutput;
}

