
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


function omkrets() {
    const rad = Number(document.getElementById('rad').value);
    console.log(typeof rad);
    const diameter = rad + rad;
    
    console.log(`Omkretsen på cirkeln ${diameter * piVal}!`);
}


//console.log("Värdet av " + piName + " är " + piVal + "!");

console.log(`Värdet av ${piName} är ${piVal}!`);

let diameter = 5;
console.log(`Omkretsen på cirkeln ${piVal * diameter}!`);

console.log(`
    <p>
        Värdet av ${piName} är ${piVal}!
    </p>
`);





