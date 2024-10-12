// If Fluid is a named export
// import { Fluid } from './fluid.min.js';

// Or if it's a default export
// import Fluid from './fluid.min.js';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("renderSurface");
    let myFluid = new Fluid(canvas); // Assuming Fluid is a class
    myFluid.mapBehaviors({
        curl: 10
    });
    myFluid.activate();
});