document.addEventListener("deviceready", init, false);
function init() {

    navigator.contacts.find(
        [navigator.contacts.fieldType.displayName],
        gotContacts,
        errorHandler);
	
}

function errorHandler(e) {
    console.log("errorHandler: "+e);
}

function gotContacts(c) {
    console.log("Znalazłem kontakty. Ich liczba to: "+c.length);
    for(var i=0, len=c.length; i<len; i++) {
        console.dir(c[i]);
    }
}