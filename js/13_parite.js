/*    for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write("<h4>" + i + " est pair");
    }
    else {
        document.write("<h4>" + i + " est impair");
}
}
document.write("<hr />");*/

var i = parseInt(prompt("tapez un nombre"));
var j = (i + 10);
while (i <= j){
    if (i % 2 === 0) {
    document.write("<h4>" + i + " est pair" + "</h4>");
    }
    else {
    document.write("<h4>" + i + " est impair" + "</h4>");
    }
    i++
}
document.write("<hr />");

var i = parseInt(prompt("tapez un nombre"));
var j = (i + 10);
for (var k = i; k < j; k++){
    if (k % 2 === 0) {
        document.write("<h4>" + k + " est pair" + "</h4>");
    } else
        document.write("<h4>" + k + " est impair" + "</h4>");
    }
