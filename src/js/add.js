// import Fluid from './fluid.min.js'; // Adjust the path as necessary
const canvas = document.getElementById("renderSurface");

let myFluid = new Fluid(canvas)

myFluid.mapBehaviors({
    curl: 10
});

myFluid.activate()
