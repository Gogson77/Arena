// Only change code below this line
var str = "Paragon!";
function myReverse(str){
    var revStr = "";
    for(i=0; i<str.length; i++){
        revStr += str.slice(str.length-1-i, str.length-i);
    }
    return revStr;
}
// Only change code above this line
console.log(myReverse(str));
module.exports = myReverse;

