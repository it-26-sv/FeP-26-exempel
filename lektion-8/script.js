
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
