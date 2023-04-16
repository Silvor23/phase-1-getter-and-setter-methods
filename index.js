// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return 2*this.radius;
    }
    get circumference(){
        return 2*this.radius*Math.PI;
    }
    get area(){
        return this.radius*this.radius*Math.PI;
    }
    set diameter(value){
        this.radius = value/2;
    }
    set circumference(value){
        this.radius= 0.5*value/ (Math.PI);
    }
    set area(value){
        this.radius=Math.sqrt(value/Math.PI);
    }
}