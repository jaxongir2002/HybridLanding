document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("renderSurface");
    let myFluid = new Fluid(canvas); // Assuming Fluid is a class
    myFluid.mapBehaviors({
        curl: 10
    });
    myFluid.activate();
});