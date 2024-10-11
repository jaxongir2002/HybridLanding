const canvas = document.getElementById("renderSurface");
let myFluid = new Fluid(canvas)
myFluid.mapBehaviors({
    curl: 10
});
myFluid.activate()

