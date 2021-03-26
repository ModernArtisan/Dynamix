//  Dynamix

// Define our viewportWidth variable
var viewportWidth;
// Set/update the viewportWidth value
var setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}
// Log the viewport width into the console
var logWidth = function () {
	if (viewportWidth > 640) {
		console.log('Wide viewport');
	} else {
		console.log('Small viewport');
	}
} 

function mix(){
    var dynamixer = document.getElementById('dynamixer');
    var welcome = document.getElementById('welcome');
    var gridframe =  document.getElementById('gridframe');
    var gframe = document.getElementById('gframe');
    if (gridframe.style.display === 'block'){
        gridframe.style.display = 'none';
        gframe.style.display = 'block';
        dynamixer.style.backgroundColor = '#56ccf2';
        dynamixer.style.color = '#eb5757';
        welcome.style.color = '#ffffff'; 
        removeClass('#welcome', 'bs-c');
        addClass('#welcome', 'bs-cw');
        removeClass('#welcome', 'whi');
        addClass('#welcome', 'blk');
    } else {
        gridframe.style.display = 'block';
        gframe.style.display = 'none';
        dynamixer.style.backgroundColor = '#eb5757';
        dynamixer.style.color = '#56ccf2';
        welcome.style.color = '#000000';
        removeClass('#welcome', 'bs-cw');
        addClass('#welcome', 'bs-c');
        removeClass('#welcome', 'blk');
        addClass('#welcome', 'whi');
    }
}; 

const dentureWhite = " class='two sbx whi'>2</div>";
const dentureBlack = " class='two sbx blk fwhi'>2</div>";

var dynamix = function(){
    if (viewportWidth < 640) {
        compactor();
        console.log('Compactor via dynamix...');
    } else {
        expander();
        console.log('Expander via dynamix...');
    }
};

// Set our initial width and log it
setViewportWidth();
logWidth();  
 
window.addEventListener('load', function(){ 
    console.log('Dynamix loaded....');  
    dynamix();
}); 

// On resize events, recalculate and log
window.addEventListener('resize', function () {
	setViewportWidth();
	logWidth(); 
    dynamix();
}, false);

function compactor(){
    removeClass('.sbm', 'two');
    addClass('.sbm','three');
    console.log('Remove two and add three...');
    removeMolar('.sbx');
    console.log('Compacted molar removal...');
}

function expander(){
    removeClass('.sbm', 'three');
    addClass('.sbm','two');
    addDentures(dentureWhite, dentureBlack);
    console.log('Multi-ethnic dentures arriving...'); 
}

function removeMolar(molar) {
    // if there are no elements, we're done
    if (!molar) { 
        console.log('Molar tooth: ' +molar+ ' \nNone found.'); 
        return; 
    } 
    if (typeof(molar) === 'string') {
        console.log('String tied to molar: ' +molar);
        molar = document.querySelectorAll(molar);
        for (var i=0; i<molar.length; i++) {
            var incisor = molar[i].className;
            console.log('Masticated: ' +molar[i].className+ '\nOr var: ' +incisor); 
            molar[i].remove(incisor);
            console.log('Element: ' +molar[i]+ ' removed'); 
        }
}};

function addDentures(pearls, blackpearls) {
    console.log('Pasting dentures...');
    var sbx = document.querySelectorAll('.sbx');
    if ( sbx.length > 0) { 
        console.log('No Pearly Whites!: ' +pearls); 
        return; 
    } 
    // if we have a selector, get the chosen elements
    if (typeof(pearls) === 'string') {
        console.log('Fixodent found.');
        elements = document.querySelectorAll('.sbm');
        // add class to all chosen elements
        for (var i=0; i<elements.length; i++) {
            console.log('sbm iterated.');
            // if class is not already found
            if ( i == 1) { 
                // add class
                pearl = elements[i];
                var btn = document.createElement('div'); 
                var dentix = document.createTextNode('!Dynamix!');
                pearl.parentNode.insertBefore(btn, pearl.nextSibling);
                btn.setAttribute('class', 'sbx two whi');
                btn.appendChild(dentix);
                console.log('Pearlies installed!');
            } if ( i == 3) {
                blackpearl = elements[i];
                var btn = document.createElement('div');
                var dentix = document.createTextNode('!Dynamix!');
                blackpearl.parentNode.insertBefore(btn, blackpearl.nextSibling); 
                btn.setAttribute('class', 'sbx two blk fwhi');
                btn.appendChild(dentix);
                console.log('Black Pearlies installed!');
            }
        }
}};

function addClass(elements, classChange) {
    // if there are no elements, we're done
    if (!elements) { 
        console.log('Add selector: ' +elements+ '.\nNone found.');
        console.log('Add mutex: ' +classChange+ '.\nUnsuccessful.')
        return; 
    } 
    // if we have a selector, get the chosen elements
    if (typeof(elements) === 'string') {
        console.log('addClass counted a string.');
        elements = document.querySelectorAll(elements);
        // add class to all chosen elements
        for (var i=0; i<elements.length; i++) {
            console.log('addClass iterated a hit.');
            // if class is not already found
            if ( (' '+elements[i].className+' ').indexOf(' '+classChange+' ') < 0 ) { 
                // add class
                elements[i].className += ' ' + classChange;
                console.log('Add selector: ' +elements+ '.\nMutex: ' +classChange+ ' successfully added!');
            }
        }
    } 
    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) { 
        console.log('addClass.tagName got arrayed.\nDissapointing....');
        elements=[elements]; 
    }
}

function removeClass(element, newRemover) {
    // if there are no elements, we're done
    if (!element) { 
        console.log('Remover selector: ' +element+ ' \nNone found.');
        console.log('Remover change: ' +newRemover+ ' \nUnsuccessful.')
        return; 
    } 
    if (typeof(element) === 'string') {
        console.log('removeClass: ' +element+ ' \nMutex: ' +newRemover);
        element = document.querySelectorAll(element);
        for (var i=0; i<element.length; i++) {
            var elindex = element[i].className;
            console.log('Iterated: ' +element[i].className+ '\nOr var: ' +elindex);
            if( (' '+element[i].className+' ').indexOf(' '+newRemover+' ') > 0 ){ 
            element[i].classList.remove(newRemover);
            console.log('Element: ' +element[i]+ ' \nRemoved: ' +newRemover);
            }
        }
}};