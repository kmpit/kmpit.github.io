/*Functions-----------------------------------------------------------------------------------------*/

// Init stuff

function onInit(){
    console.log('onInit called');

    /* Show default items */
    document.getElementById("Avidbots_content").style.display = "block";

    // getCurrentTerm(); 
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
    document.getElementById('current_term').innerHTML = (term);
}


// ***************************************************************************************//
// Nav menu
// ***************************************************************************************//

// onclick for nav menu - either close or open
function navOnClick(){
    var nav_height = document.getElementById("nav_menu").style.height;

    if (nav_height == "auto"){
        closeMenu();
        return;
    }
    else {
        openMenu();
    }
}

// functions to close and open the nav menu
function openMenu(){
    document.getElementById("nav_menu").style.height = "auto";
    document.getElementById("nav_menu").style.maxHeight = "70vh";

}

function closeMenu(){
    document.getElementById("nav_menu").style.height = "0px";
    document.getElementById("nav_menu").style.maxHeight = "0vh";

}

// event listener to close the nav menu when user clicks elsewhere
document.addEventListener("click", function(event) {
    // check that sidebar is opened
    var nav_height = document.getElementById("nav_menu").style.height;

    // console.log('wdith is', width);
    if (nav_height == "auto" ){
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

// ***************************************************************************************//
// Side list and display panels
// ***************************************************************************************//

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

        // get starting position of each list item
        var rect = children[i].getBoundingClientRect();
        var left = rect.left; 

        // open the first list item that is scrolled into view and exit
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
        // unhighlight previous selection
        if (circles[j].className == "circle selected"){
            circles[j].className = circles[j].className.replace(" selected", "");
        }
        //highlight circle for new selection
        if (j == index){
            circles[j].className+=" selected";
        }
     }
});

// Mobile-only: onclick function for the page indicator 

function circleClick (index) {
    console.log('circle click fired');
    console.log(index);

    // get starting position of list item we should be scrolling to 
    var children = document.getElementById("experience_list").children;
    var rect = children[index].getBoundingClientRect();
    // account for existing scroll to get correct scroll_distance to plug into scrollTo
    var scrollLeft = window.pageXOffset || document.getElementById("experience_list").scrollLeft;

    var scroll_distance = rect.left + scrollLeft; 

    // scroll the list to the desired element and the scroll event listener will update the display
    document.getElementById('experience_list').scrollTo(scroll_distance, 0);

    circles = document.getElementById("exp_page_indicator").children;
    circles[index].className+=" selected";
}


// ***************************************************************************************//
// Project section
// ***************************************************************************************//
function projectClick (caller){
    console.log(caller);

    document.getElementsByClassName("modal")[0].style.display = "block";
    document.getElementsByClassName("modal_content")[0].style.display = "block";
    document.getElementsByClassName("page_overlay")[0].style.display = "block";
    document.body.style.overflow = "hidden";
    // document.getElementsByClassName("modal")[0].style.overflowY = "auto";
    document.getElementsByClassName("modal_content")[0].style.overflowY = "auto";


    var name = caller.id + "_content";

    var project_details = document.getElementById(name);
    
    var clone = project_details.cloneNode(true);

    clone.style.display = "block";

    document.getElementsByClassName("modal_content")[0].appendChild (clone);
    
    //Make sure the top of content is shown, even if user previously scrolled down on other content
    clone.scrollIntoView(); //scrolls exactly to top of modal_content
    document.getElementsByClassName("modal")[0].scrollTop -= "5vh"; //scroll up a bit more to show the padding on the modal


};

// event listener to close the modal when user clicks elsewhere
document.addEventListener("click", function(event) {
    // console.log('fired');

    // check that modal is showing
    var display = document.getElementsByClassName("modal_content")[0].style.display;
    if (display != "none"){
        // If user clicks inside the modal, do nothing
        if (event.target.closest(".modal")) {
            return;
        }
        // If user is just opening the modal
        else if (event.target.closest(".card")) {
            return;
        }
        // else close the sidebar
        else {
            closeModal(); 
        }
     }
});
    
function closeModal(){
    document.getElementsByClassName("modal")[0].style.display = "none";
    document.getElementsByClassName("modal_content")[0].style.display = "none";
    document.getElementsByClassName("page_overlay")[0].style.display = "none"; 
    var child = document.getElementsByClassName("modal_content")[0].children[0];
    console.log(child);
    if (child) {
        document.getElementsByClassName("modal_content")[0].removeChild(child);
        document.body.style.overflow = "auto";

    }
}

