
// document.getElementById('date').innerHTML = new Date().toDateString();

document.addEventListener("DOMContentLoaded", function() {
    onInit();
  });

function onInit(){
    getCurrentTerm(); 
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
    var width = parseInt(document.getElementById("sidebar").style.width);
    console.log('wdith is', width);
    if (width > 0 ){
        console.log('got into the cmd');
        // If user clicks inside the sidebar, do nothing
        if (event.target.closest(".sidebar")) {
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

function sidebarOnClick(){
    var sidebar_width = parseInt(document.getElementById("sidebar").style.width);
    if (sidebar_width > 0 ){
        closeMenu();
        return;
    }
    else {
        openMenu();
    }

}

// functions to close and open the sidebar
function openMenu(){
    document.getElementById("sidebar").style.width = "250px";
    console.log('width is ', document.getElementById("sidebar").style.width);
}

function closeMenu(){
    console.log('close menu called');
    document.getElementById("sidebar").style.width = "0px";
}