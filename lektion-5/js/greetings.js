console.log("init greetings");

// Vi kan dölja modulens interna logik 
function createGreeting(phrase, name) {
    return `${phrase} ${name}!`;
}

// Vi exporterar funktioner så de kan importeras i main
export function hello(name) {
    return createGreeting('Hello', name);
}
export function hej(name) {
    return createGreeting('Hej', name);
}

