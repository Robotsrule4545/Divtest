const box = document.getElementById('moving');

// Confirm it's working.

console.log('Working!');
console.log('Made by robot0730.');

// Setup the div

box.style.top = '150px';
box.style.left = '150px';

// Moving logic:

document.addEventListener('keydown', movement, false);

function movement(e) {
    var keyCode = e.keyCode;
    if (keycode == 87); {
        int(box.style.top) = int(box.style.top) + 1;
        console.log(box.style.top);
    }
    elif (keyCode == 65); {
        box.style.left = int(box.style.left) + 1;
        console.log(box.style.left);
    }
    elif (keyCode == 83); {
        box.style.top = box.style.top - 1;
        console.log(box.style.down);
    }
    elif (keyCode == 68); {
        box.style.left = box.style.left - 1;
        console.log(box.style.right);
    }
}