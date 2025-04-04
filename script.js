// console.log("Js Running...");
let button = document.querySelector('button');
let box = document.getElementById('box');
let colorINFO = document.querySelector('.color-info h3');


button.addEventListener("click", function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    // console.log(`Current Color = rgb(${c1},${c2},${c3})`);

    colorINFO.innerHTML = ` <h3><span>Current Color =</span> rgb(${c1},${c2},${c3})</h3>`;
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
});
