
let userName = localStorage.getItem('lektion8userName');

if (!userName) {
    userName = prompt("Vad heter du?");
    localStorage.setItem('lektion8userName', userName);
}

document.getElementById('user-name').textContent = userName;

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('lektion8userName');
    localStorage.removeItem('visitCount');
    location.reload();
});

// localStorage och Number
let visitCount = localStorage.getItem('visitCount') || 1; // default 1
localStorage.setItem('visitCount', Number(visitCount) + 1);
document.getElementById('visit-count').textContent = visitCount;


// Synkron kod
function two() {
    for (let index = 0; index < 1000; index++) {
        console.log('');
    }
    console.log('två');
}
console.log('ett');
two();
console.log('tre');

// Asynkron kod
console.log(1);
setTimeout(() => console.log(2), 1);
console.log(3);


async function getJoke() {
    try {
        const resp = await fetch('https://icanhazdadjoke.com/123', {
            headers: { "Accept": "text/plain" }
        });
        if (!resp.ok) throw new Error(`HTTP error: ${resp.status}`);

        const jokeText = await resp.text();
        console.log(jokeText);

        document.getElementById('joke').textContent = jokeText;

    } catch (error) {
        console.log(error);
        document.getElementById('joke').textContent = `
            ERROR: Någonting gick snett!
        `;

    }

}

async function getInfo() {
    const resp = await fetch('./info.txt');
    document.getElementById('info').innerHTML = await resp.text();

}
getJoke();
getInfo();

/*

async function getRecipe(recipeFile) {
    // fetch.... recipeFile
}
getRecipe('soup');

*/