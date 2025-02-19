// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    distance(){
        return sqrt(this.x * this.x + this.y * this.y);
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(items = []) {
        this.items = items;
    }

    enqueue(a){   
        this.items.push(a);
    }

    peek(){
        if(this.items.length == 0)
            return "No elements";
    return this.items[0];
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
