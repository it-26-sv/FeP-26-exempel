
/*

// traditionell getElementById:
document.getElementById('light-1').style.backgroundColor = 'red';
// med querySelector kan vi använda CSS-selektorer
document.querySelector('#light-2').style.backgroundColor = 'yellow';
document.querySelector('#container > div:nth-child(3)').style.backgroundColor = 'lime';
 */

function resetColors(container) {
    for (const elem of document.querySelectorAll(`#${container} > .lights`)) {
        elem.style.backgroundColor = '#333333';
    };
}
resetColors("container");
resetColors("container-2");

// Skapa lyssnare skilt för vajer element
const colors = [ "red", "yellow", "lime"];
document.querySelectorAll('.lights').forEach((elem, i) => {
    //elem.style.backgroundColor = colors[i];
    elem.addEventListener('click', () => {
        //console.log(elem.id);
        resetColors('container');
        elem.style.backgroundColor= colors[i];
    })
}); 


// Plocka färgerna från html-elementet:
document.getElementById('container-2').addEventListener('click', (evt) => {
    const elem = evt.target;
    console.log(elem);
    if (!elem.classList.contains('lights')) return; // om elem in har klassen lights

    resetColors('container-2');
    elem.style.backgroundColor = elem.dataset.color
    
    //elem.style.backgroundColor = elem.getAttribute('data-color');
    //elem.style.backgroundColor = elem.dataset.color;
});