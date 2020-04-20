

class Project {
    constructor(title, location, date_range, short_desc, long_desc) {
        this.title = title;
        this.location = location;
        this.date_range = date_range;
        this.short_desc = short_desc;
        this.long_desc = long_desc;
    }
}












/*Functions-----------------------------------------------------------------------------------*/

function onInit(){
    console.log('onInit called');
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

// // populate the cards 
// function createCards(){
//     let projects = [
//         new Project (
//             "Personal Website",
//             "Independent Project",
//             "Apr 2020",
//             "Short description of the project. Outcome was as such, first place in such and such.\
//             Tools: Tool X, Tool Y, XJkaak, and my vast mind.",
//             "INfo about the project. More step by step with pictures and shit\
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\
//              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo \
//              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
//         ),
//         new Project(
//             "Audio Equalization Filter",
//             "UW: Analog Circuits + Instrumentation",
//             "Fall 2019",
//             "Short description of the project. Outcome was as such, first place in such and such.\
//             Tools: Tool X, Tool Y, XJkaak, and my vast mind.",
//             "INfo about the project. More step by step with pictures and shit\
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\
//              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo \
//              inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
//         ),
//         new Project (
//             "Infographic Design",
//             "Various",
//             "2019-present",
//             "Short description of the project. Outcome was as such, first place in such and such.\
//             Tools: Tool X, Tool Y, XJkaak, and my vast mind.",
//             "INfo about the project. More step by step with pictures and shit\
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\
//                 doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo \
//                 inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
//         ),
//         new Project (
//             "Concept: CIBC Evolve",
//             "CIBC",
//             "Fall 2018",
//             "Short description of the project. Outcome was as such, first place in such and such.\
//             Tools: Tool X, Tool Y, XJkaak, and my vast mind.",
//             "INfo about the project. More step by step with pictures and shit\
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\
//                 doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo \
//                 inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
//         ),
//         new Project(
//             "Electronic Boardgame",
//             "UW: Digital Systems",
//             "Spring 2018",
//             "Short description of the project. Outcome was as such, first place in such and such.\
//             Tools: Tool X, Tool Y, XJkaak, and my vast mind.",
//             "INfo about the project. More step by step with pictures and shit\
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\
//                 doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo \
//                 inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
//         ), 
//         new Project(
//             "WaToPlan Organization System",
//             "UW: Intro to Systems Design",
//             "Fall 2017",
//             "Short description of the project. Outcome was as such, first place in such and such.\
//             Tools: Tool X, Tool Y, XJkaak, and my vast mind.",
//             "INfo about the project. More step by step with pictures and shit\
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\
//                 doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo \
//                 inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
//         ),      
//     ]
//     console.log(projects);
//     console.log(projects.length);

//     for (i=0; i < projects.length; i++){
//         console.log(i);
//         let row_num = Math.floor(i/4);
//         console.log(row_num);

//         if ((i%4)==0){
//             let row = document.createElement("div");
//             row.setAttribute("class", "row");
//             row.setAttribute("id", "row"+row_num);

//             let parentElement = document.getElementById("card_container");
//             parentElement.appendChild(row);
//         }

//         let column = document.createElement("div");
//         column.setAttribute("class", "column");
//         let parentElement = document.getElementById("row"+row_num);
//         parentElement.appendChild(column);

//         let card = document.createElement("div");
//         card.textContent=(projects[i].short_desc);
//         card.setAttribute("class", "card");
    
//         parentElement = column;
//         parentElement.appendChild(card);
//     }


// }

/*Event listeners n shitttttt------------------------------------------------------------*/

//event listener to close the nav menu
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


// functions to show the appropriate content for menu / display sections
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
        console.log(list_children[j].className);
        if (list_children[j].className == "list_item selected"){
            list_children[j].className = list_children[j].className.replace(" selected", "");
        }
    }

    caller.className += " selected";
}
