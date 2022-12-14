const motherOfDivs = document.querySelector('#container');
const button = document.querySelector('button');

let numberOfSquares = 16;

button.addEventListener('click', () => {
    numberOfSquares = prompt('Enter the number of squares on each side');

    while (numberOfSquares < 1 || numberOfSquares > 100) {
        numberOfSquares = prompt('Enter the number of squares on each side');
    }

    clearMotherOfDivs();
    divGenerator();
});

function divGenerator() {
    let counter = 0;

    while (counter < (numberOfSquares * numberOfSquares)) {
        const div = document.createElement('div');

        let divSize = 48 / (numberOfSquares);

        div.style.width = `${divSize}rem`;
        div.style.height = `${divSize}rem`;

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = randomRGB();
        });

        motherOfDivs.appendChild(div);

        counter++;
    }
};

function clearMotherOfDivs() {
    let child = motherOfDivs.lastElementChild;

    while (child) {
        motherOfDivs.removeChild(child);
        child = motherOfDivs.lastElementChild;
    }
};

function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;
}

divGenerator();