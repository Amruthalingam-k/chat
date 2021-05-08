// check document is loaded
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}


// toggle display

var toggleDisplay=(id)=>{
    if(document.getElementById(id).style.display == 'none'){
        document.getElementById(id).classList.remove('no-display')

    }
    else{
        document.getElementById(id).classList.add('no-display')


    }
}
