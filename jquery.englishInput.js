"strict mode";

$("#last-name").on("keypress", function (event) {

    var englishAlphabetAndWhiteSpace = /[A-Za-z]/g;
    var key = String.fromCharCode(event.which);
    if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 ||
        englishAlphabetAndWhiteSpace.test(key)) 
        return true;
    return false;
});

$('#last-name').on("paste", function (e) {
    e.preventDefault();
});
