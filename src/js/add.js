console.log('2')
const canvas = document.getElementById("renderSurface");

let myFluid = new Fluid(canvas)
console.log('1')
myFluid.mapBehaviors({
    curl: 10
});

myFluid.activate()