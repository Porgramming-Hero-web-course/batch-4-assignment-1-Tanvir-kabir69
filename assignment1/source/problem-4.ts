// Define a union type Circle and Rectangle, where each type has a
// unique shape property. Create a function calculateShapeArea that
// uses type guards to calculate the area based on the shape type


type Circle = {
    shape : "circle";
    radius : number;
};

type Rectangle = {
    shape : "rectangle";
    length : number;
    width : number;
};

type Shape = Circle | Rectangle ;

function isCircle (shape : Shape) : shape is Circle{
    return shape.shape === "circle"
}

function isRectangle (shape : Shape) : shape is Rectangle {
    return shape.shape === "rectangle"
}

function calculateShapeArea(shape : Shape) : number {
    if(isCircle(shape)){
        let area : number = Math.PI*shape.radius*shape.radius;
        return area;
    }
    else if (isRectangle(shape)){
        let area : number = shape.length*shape.width
        return area;
    }
    return 0;
}

let circle : Circle = {
    shape : "circle",
    radius : 5
}

let rectangle : Rectangle = {
    shape : "rectangle",
    length : 5,
    width : 4
}

console.log(calculateShapeArea(circle),",", calculateShapeArea(rectangle))

