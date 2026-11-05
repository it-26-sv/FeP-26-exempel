
const piName = "Pi";
const piVal = 3.14159;

function hello() {
    //const namn = prompt("Vad heter du?");
    const namn = document.getElementById('namn').value;
    //alert(`Hej ${namn}!`);
    document.getElementById('name-output').textContent = `Hej ${namn}!`;

    //document.getElementById('name-output2').innerHTML = `Hej <b>${namn}</b>!`;
    console.log(`Hej ${namn}!`);
}

