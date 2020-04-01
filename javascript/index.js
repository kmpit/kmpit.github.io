
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