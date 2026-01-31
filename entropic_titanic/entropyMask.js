

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

    let h_sum = 0;

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
        h_sum -= entropyObject.hs[probKeys[i]];

        mask.appendChild(entroBalls[i]);

    }

    h_mean = h_sum / size;
    h_color = Math.ceil(h_mean / entropyObject.H * 255);
    
    console.log(`Mean entropy color: ${h_color}`);

    let particle_effect = document.getElementById("rain");
    particle_effect.setAttribute("particle-system", `preset: snow; color: rgb(${255-h_color}, 255, ${h_color}); particleCount: ${entropyObject * 2500})`);
}