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
