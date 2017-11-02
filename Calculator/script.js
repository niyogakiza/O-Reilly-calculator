
//
// init some globals
var w, d, b, target;

//define event handlers

function handleClick(e){
    if(e.target.tagName === 'BUTTON'){

        var value = e.target.getAttribute('data-value');

        if(value === 'clear'){
            target.innerHTML = '';
        } else {
            target.innerHTML += e.target.getAttribute('data-value');
        }
    }
}

function handleTouchStart(e){
    e.preventDefault();//Prevent over scroll rubber banding
    if(e.target.targetName === 'BUTTON'){
        var elem = e.target;
        var value = elem.getAttribute('data-value');
        elem.className = 'active';
        if(value === 'clear'){
            target.innerHTML = '';
        } else{
            target.innerHTML += e.target.getAttribute('data-value');
            repeat = setInterval(function (elem) { //pause
                target.innerHTML += elem.getAttribute('data-value');
            }, 100, elem);
        }
    }
}

function handleTouchEnd(e) {
    if(e.target.tagName === 'BUTTON'){
        clearInterval(repeat);
        var elem = e.target;
        elem.className = '';//remove class name
    }

}

//Let's rock!
window.onload = function () {

    // Cashe some common elements globally

    w = window;
    d = document;
    b = d.body;
    target = document.getElementById('target');

    //Attach handlers
   // b.addEventListener('click', handleClick, false);
    //touchstart is better
    b.addEventListener('touchstart', handleTouchStart, false);
    b.addEventListener('touchend',   handleTouchEnd, false);


};