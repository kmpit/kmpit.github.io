/*Functions-----------------------------------------------------------------------------------------*/

function onInit(){
    console.log('onInit called');

    /* Show default items */
    document.getElementById("Avidbots_content").style.display = "block";
    document.getElementById("music_content").style.display = "block";

    // getCurrentTerm(); 
    // createCards();    
}

// populate current term in the header
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
    document.getElementById('current_term').innerHTML = (term+' Systems Design Engineering, UWaterloo');
}


/* Functions -------------------------------------------------------------*/

// Nav menu

// onclick for nav menu - either close or open
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

// functions to close and open the nav menu
function openMenu(){
    document.getElementById("nav_menu").style.height = "35vh";
    // console.log('width is ', document.getElementById("nav_menu").style.width);
}

function closeMenu(){
    document.getElementById("nav_menu").style.height = "0px";
}

//event listener to close the nav menu when user clicks elsewhere
document.addEventListener("click", function(event) {
    // check that sidebar is opened
    var height = parseInt(document.getElementById("nav_menu").style.height);
    // console.log('wdith is', width);
    if (height > 0 ){
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


// Function to show the appropriate content for selection list + display sections
function openDisplay(caller, section){

    /* Hide all the display items in the section and show only the one that was clicked */
    content_children = document.getElementById(section.concat("_display")).children;
    for (var i = 0; i < content_children.length; i++){
        content_children[i].style.display = "none";
    }
    var item_name = caller.id.concat("_content");
    document.getElementById(item_name).style.display = "block";

    /* De-select all the list items in the section and select the one that was clicked */
    list_children = document.getElementById(section.concat("_list")).children;
    for (var j = 0; j < list_children.length; j++){
        if (list_children[j].className == "list_item selected"){
            list_children[j].className = list_children[j].className.replace(" selected", "");
        }
    }
    caller.className += " selected";
}

// Mobile-only: event listener for when user scrolls through the selection list 

document.getElementById("experience_list").addEventListener("scroll", function(event) {

    // all the list items
    var children = document.getElementById("experience_list").children;

    // track whether the item the user has scrolled to is found
    var found = false;
    var index = 0; // the index of the chosen item

    for (var i = 0; i < children.length; i++){

        // find leftmost pixel of each list item
        var rect = children[i].getBoundingClientRect();
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        var left = rect.left + scrollLeft; 

        // open the list item that the user has scrolled into view
        if (!found && left > 0){
            found = true;
            index = i;
            console.log('index is', index);
            openDisplay(children[i], 'experience');
        }
    }

    // highlight the circle corresponding to the item 
    console.log('here i am');
    circles = document.getElementById("exp_page_indicator").children;
    for (var j = 0; j < circles.length; j++){
        if (circles[j].className == "circle selected"){
            circles[j].className = circles[j].className.replace(" selected", "");
        }
        if (j == index){
            circles[j].className+=" selected";
        }
     }
});

// Mobile-only: onclick function for the page indicator 

function circleClick (index) {

    const portrait_width = 450; // max width of phone in portrait
    var scroll_distance; // calculates distance to scroll list based on circle clicked and screen orientation

    if (screen.width < portrait_width ){
        scroll_distance = screen.width * 0.95 * index;
    }
    else {
        scroll_distance = screen.width * 0.1 + screen.width * 0.8 * index;
    }

    // scroll the list to the desired element and the scroll event listener will update the display
    document.getElementById('experience_list').scrollTo(scroll_distance, 0);

    circles = document.getElementById("exp_page_indicator").children;
    circles[index].className+=" selected";


}

