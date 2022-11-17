// Only change code below this line
function myForLoop1(){
    var evenNumbers = "";
    for(i=0; i<9; i++){
        if(i%2==0){
            i!=8 ? evenNumbers += i + ", " : evenNumbers += i;
        }
    }
    return evenNumbers;
}
function myForLoop2(){
    var evenInverseNumbers = "";
    for(j=8; j>-1; j--){
        if(j%2==0){
            j!=0 ? evenInverseNumbers += j + ", " : evenInverseNumbers += j;
        }
    }
    return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};