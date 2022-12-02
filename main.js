const box = document.getElementById('moving');
let output = '';
let output2 = '';

// Confirm it's working.

console.log('Working!');
console.log('Made by robot0730.');

// Setup the div

box.style.top = '150px';
box.style.left = '150px';


// Moving logic:

document.addEventListener('keydown', movement, false);

function movement(e) {
    var key = e.key;
    if (key == "w") {
    }
    else if (key == "a") {
    }
    else if (key == "s") {
    }
    else if (key == "d") {
    }
}
    // Converting the box.style.top = 150px to become 150

function convert(input) {
    let halfput = input.slice(0, -2);
    console.log(halfput);
    output = int(halfput);
    console.log(halfput + "Is halfput.");
}

function parseBack(input) {
    output = input.toString() + 'px';
}