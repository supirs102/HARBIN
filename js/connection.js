httpRequest = false;
if(window.XMLHttpRequest) {
    // Firefox, Opera など
    httpRequest = new XMLHttpRequest();
    httpRequest.overrideMimeType('text/xml');
} else if(window.ActiveXObject) {
    // IE
    try {
        httpRequest = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
        httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
    }
}