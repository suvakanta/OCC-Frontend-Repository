class Shape{
    constructor(width,height){
        this.width =width;
        this.height =height;
    }
    calculateArea(){
        throw new Error("method not implemented.");

    }
}
class Rectangle extends Shape{
    displayFormula(){
        console.log('width*height = area of a rectangle');
    }
    calculateArea(){
        console.log("Area is :" +this.width*this.height);
    }

}
const shape1 = new Rectangle(5,7);
shape1.displayFormula();
shape1.calculateArea();