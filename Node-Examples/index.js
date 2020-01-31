var rect = require('./rectangle');
function SolveRect(l,b) {
    console.log("This function is solve the rectangle with L="+l+"and B="+b);
    if(l<=0 || b<=0){
        console.log("Error in dimesions of the rectangle");
    }
    else{
        console.log("The area of rectangle is ="+rect.area(l,b));
        console.log("The perimeter of rectangle is ="+rect.perimeter(l,b));
    }
}
SolveRect(2,4);
SolveRect(0,5);