var shape = prompt("Choose the shape circle-triangle-square-rectangle-Parallelogram-Trapezium-Ellipse:");
switch(shape){
    case "circle":
       r = Number(prompt("Enter the radius:"));
       area = Math.PI *r *r;
       alert("the area of circle=" +area);
       break;
    case "triangle":
        b = Number(prompt("Enter the base:"));
        h = Number(prompt("Enter the hight:"));
        area = 0.5 * b * h;
        alert("the area of triangle=" +area);
        break;
    case "Parallelogram":
        b = Number(prompt("Enter the base:"));
        h = Number(prompt("Enter the hight:"));
        area = b * h;
        alert("the area of Parallelogram=" +area);
        break;
    case "square":
                a = Number(prompt("Enter length of side:"));
                area =  a * a;
                alert("the area of square=" +area);
                break;
    case "rectangle":
                l = Number(prompt("Enter the length:"));
                w = Number(prompt("Enter the width:"));
                area = l * w;
                alert("the area of Rectangle=" +area);
                break;
    case "Trapezium":
                    a = Number(prompt("Enter the first length of parallel side:"));
                    b = Number(prompt("Enter the second length of parallel side:"));
                    h = Number(prompt("Enter the hight:"));
                    area = 0.5*(a+b) * h;
                    alert("the area of Trapezium=" +area);
                    break;
    case "Ellipse":
                    a = Number(prompt("Enter the 0.5 mainor axis:"));
                    b = Number(prompt("Enter the 0.5 major axis:"));
                    area = Math.PI * a *  b;
                    alert("the area of Ellipse=" +area);
                    break;
}