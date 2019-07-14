function rotate(p, angle) {
    let newX = Math.cos(angle) * p.x - Math.sin(angle) * p.y;
    let newY = Math.sin(angle) * p.x + Math.cos(angle) * p.y;
    return {x: newX, y: newY};
}

let pixels = [];
for (let i = 0; i < 10000; i++) {
    pixels[i] = {x: i, y: i + 5};
}

let runs = 50;
while (runs--) {
    for (let i = 0; i < 10000; i++) {
        pixels[i] = rotate(pixels[i], Math.PI/2);
        pixels[i] = rotate(pixels[i], Math.PI);
    }
}

