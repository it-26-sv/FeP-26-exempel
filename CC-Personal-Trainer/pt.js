function pt() {
    const MIN_TID = 30;
    const MAX_TID = 180;

    const minutes = document.getElementById('minutes').value;
    let ptOutput = "";

    // guard statement
    if (minutes === '' || isNaN(minutes)) return alert('Inte ett giltigt tal!');

    if (minutes <= 0) {
        ptOutput = "Du borde motionera varje dag!";
    } else if (minutes < MIN_TID) {
        ptOutput = "Bra, men du kan nog bättre.";
    } else if (minutes > MAX_TID) {
        ptOutput = "Duktigt, kom ihåg att vila lite ibland.";
    } else {
        ptOutput = "Bra jobbat, fortsätt i samma stil!";
    }

    document.getElementById('pt-output').textContent = ptOutput;
}

document.getElementById('btn-ok').addEventListener('click', function (evt) {
    pt();
    console.log(evt);
});