
// document.getElementById('date').innerHTML = new Date().toDateString();

document.addEventListener("DOMContentLoaded", function() {
    onInit();
  });

function onInit(){
    getCurrentTerm(); 

    var foreground = document.getElementById("foreground");
    console.log (document.getElementById("titleblock").contains(foreground));
    
}

function getCurrentTerm(){
    console.log('onload called');
    var current_date = new Date(); 
    var term  = '';
    if ( current_date > new Date('2022-04-30')){
        term = 'Graduate,';
    }
    else if ( current_date > new Date('2022-01-01')){
        term = '4B';
    }
    else if ( current_date > new Date('2021-05-01')){
        term = '4A';
    }
    else if ( current_date > new Date('2020-09-01')){
        term = '3B';
    }
    else {
        term = '3A';
    }

    document.getElementById('current_term').innerHTML = (term+' Systems Design Engineering');
}

//event listener to close the sidebar
document.addEventListener("click", function(event) {
    console.log('event listern fired');
    // check that sidebar is opened
    var height = parseInt(document.getElementById("nav_menu").style.height);
    // console.log('wdith is', width);
    if (height > 0 ){
        console.log('got into the cmd');
        console.log(event.target.closest);
        // If user clicks inside the sidebar, do nothing
        if (event.target.closest(".nav_menu")) {
            return;
        }
        // If user is just opening the sidebar
        else if (event.target.closest(".button")) {
            return;
        }
        // else close the sidebar
        else {
            closeMenu(); 
        }
     }
});

function navOnClick(){
    var nav_height = parseInt(document.getElementById("nav_menu").style.height);
    if (nav_height > 0 ){
        closeMenu();
        return;
    }
    else {
        openMenu();
    }

}

// functions to close and open the sidebar
function openMenu(){
    document.getElementById("nav_menu").style.height = "200px";
    // console.log('width is ', document.getElementById("nav_menu").style.width);
}

function closeMenu(){
    console.log('close menu called');
    document.getElementById("nav_menu").style.height = "0px";
}