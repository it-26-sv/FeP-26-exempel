const colors = [ "red", "green", "blue" ];


const grassColor = colors[1];

console.log(`Roses are ${colors[0]}
    The sky is ${colors[2]}
    the grass is ${grassColor}`);

console.log(`green is index ${colors.indexOf('green')}`);

console.log(colors);
colors.push('purple');
console.log(colors);


colors[3] = 'orange';
console.log(colors);


// split och join
const str = "ett två tre";
console.log(str);
const splitArr = str.split(" ");
console.log(splitArr);
const joinedStr = splitArr.join(", ");
console.log(joinedStr);

const myElemId = 'listitem-5';
console.log(Number(myElemId.split('-')[1]));

// en array går bra att loopa!
for (let i = 0; i < colors.length; i++) {
    console.log(`${i}: ${colors[i]}`);
}

const person = {
    name: "Linus",
    age: 50,
    likes: "Programmering",
    colors: colors // man kan ha en array i ett objekt
};
console.log(`${person.name} gillar ${person.likes}`);
// hakparenteser funkar också, används i specialfall
console.log(`${person['name']} gillar ${person['likes']}`);

const colorObjArr = [
   { name: "Red", hex: "#ff0000" },
   { name: "Green", hex: "#00ff00" },
   { name: "Blue", hex: "#0000ff" },
   { name: "Yellow", hex: "#ffff00" }
];

// Array av objekt är kraftfulla när man loopar dem!
for (let i = 0; i < colorObjArr.length; i++) {
    document.getElementById('colors').innerHTML += `
        <li style="background-color: ${colorObjArr[i].hex}">
            ${colorObjArr[i].name}
        </li>
    `;
}

/*
const pageColor = 1;
document.body.innerHTML = colorObjArr[pageColor].name;
document.body.style.backgroundColor = colorObjArr[pageColor].hex;
*/