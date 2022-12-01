const box = document.getElementById('moving');

// Confirm it's working.

console.log('Working!');
console.log('Made by robot0730.');

// Setup the div

box.style.top = '150px';
box.style.left = '150px';

// Moving logic:

document.addEventListener('w', function up(event) {
    console.log('up!');
});
document.addEventListener('a', function left(event) {
    console.log('left!');
});
document.addEventListener('s', function down(event){
    console.log('down!');
});
document.addEventListener('d', function right(event){
    console.log('right!');
});