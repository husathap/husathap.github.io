

placeEntropy = function(entropyObject) {
    // Items remove code: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
    let elems = document.querySelector(".entropy-balls")
    while (elems != null && elems.length > 0) elems[0].remove();

    let entroBalls = [];
    let probKeys = Object.keys(entropyObject.probs);
    let size = probKeys.length;
    //console.log(probKeys);

    let r = 3;

    let mask = document.querySelector("#mask");

    for (i = 0; i < size; i++) {
        let angle = 2 * Math.PI / (size+1) * i;
        let x = r * Math.cos(angle);
        let y = r * Math.sin(angle);
        let c = Math.ceil(entropyObject.probs[probKeys[i]] * 255);


        entroBalls[i] = document.createElement("a-sphere");
        entroBalls[i].setAttribute("position", `${x} ${y} -3`);
        entroBalls[i].setAttribute("radius", "1");
        entroBalls[i].setAttribute("color", `rgb(${c}, ${c}, ${c})`);
        entroBalls[i].setAttribute("class", ".entropy-balls");
        //entroBalls[i].setAttribute("color", `rgb(${0}, ${0}, ${0})`);

        //console.log(`rgb(${probKeys[i] * 255}, 127, 255)`);

        mask.appendChild(entroBalls[i]);
    }

    /*let scene = document.querySelector("a-scene");
    let particle_effect = document.createElement("a-entity");
    particle_effect.setAttribute("position", "0 2.24 -15");
    particle_effect.setAttribute("particle-system", "preset: dust");
    scene.prepend(particle_effect);
    particle_effect.setAttribute("enabled", "true");*/
}