// mélanger la liste

const alveolusArray = Array.from(document.querySelectorAll("#grid li")).map(li => li.innerHTML);

function animatedHive() {
    for (i = 0; i < document.querySelectorAll('#grid li').length; i++) {
        document.querySelectorAll('#grid li')[i].animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 1000,
            delay: i * 100,
            fill: "backwards",
        });
    }
};

function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //random index
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    };
    for (let i = 1; i <= 16; i++) {
        document.querySelector(`#grid li:nth-child(${i})`).innerHTML = arr[i];
    };
    animatedHive();
}

fisherYatesShuffle(alveolusArray);

document.querySelector("#shuffleButton").addEventListener("click", function () {
    fisherYatesShuffle(alveolusArray);
});