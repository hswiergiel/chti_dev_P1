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

// style du formulaire
let submitionMsg = document.querySelector(".submitionText");

document.querySelector("#submitButton").addEventListener('click', function (event) {
    event.preventDefault();
    submitionMsg.classList.toggle("hiddenmsg");
    document.querySelector(".formPresentation").reset();
});


//alveoles qui se retournent

document.querySelector(`#grid li:nth-child(1)`).addEventListener('mouseenter', function () {
    document.querySelector(`#grid li:nth-child(1) .hexagon img`).animate([
        { transform: "rotateY(0deg)", opacity: "1" },
        { transform: "rotateY(90deg)", opacity: "0" }
    ], 700);
    document.querySelector(`#grid li:nth-child(1) .hexagon img`).style.opacity = "0";
    document.querySelector(`#grid li:nth-child(1) .hexagon .box`).animate([
        { opacity: "0" },
        { opacity: "1" }
    ], 700);
    document.querySelector(`#grid li:nth-child(1) .hexagon .box`).style.opacity = "1";
});

document.querySelector(`#grid li:nth-child(1)`).addEventListener('mouseleave', function () {
    document.querySelector(`#grid li:nth-child(1) .hexagon img`).animate([
        { transform: "rotateY(90deg)", opacity: "0" },
        { transform: "rotateY(0deg)", opacity: "1" }
    ], 700);
    document.querySelector(`#grid li:nth-child(1) .hexagon img`).style.opacity = "1";
    document.querySelector(`#grid li:nth-child(1) .hexagon img`).style.filter = "grayscale(100%)";
    document.querySelector(`#grid li:nth-child(1) .hexagon .box`).animate([
        { opacity: "1" },
        { opacity: "0" }
    ], 700);
    document.querySelector(`#grid li:nth-child(1) .hexagon .box`).style.opacity = "0";
});

document.querySelector(`#grid li:nth-child(2)`).addEventListener('mouseenter', function () {
    document.querySelector(`#grid li:nth-child(2) .hexagon img`).animate([
        { opacity: "1", filter: "blur(0)" },
        { opacity: "0", filter: "blur(2rem)" }
    ], 700);
    document.querySelector(`#grid li:nth-child(2) .hexagon img`).style.opacity = "0";
    document.querySelector(`#grid li:nth-child(2) .hexagon .box`).animate([
        { opacity: "0" },
        { opacity: "1" }
    ], 700);
    document.querySelector(`#grid li:nth-child(2) .hexagon .box`).style.opacity = "1";
});

document.querySelector(`#grid li:nth-child(2)`).addEventListener('mouseleave', function () {
    document.querySelector(`#grid li:nth-child(2) .hexagon img`).animate([
        { opacity: "0", filter: "blur(2rem)" },
        { opacity: "1", filter: "blur(0)" }
    ], 700);
    document.querySelector(`#grid li:nth-child(2) .hexagon img`).style.opacity = "1";
    document.querySelector(`#grid li:nth-child(2) .hexagon img`).style.filter = "grayscale(100%)";
    document.querySelector(`#grid li:nth-child(2) .hexagon .box`).animate([
        { opacity: "1" },
        { opacity: "0" }
    ], 700);
    document.querySelector(`#grid li:nth-child(2) .hexagon .box`).style.opacity = "0";
});

document.querySelector(`#grid li:nth-child(3)`).addEventListener('click', function () {
    if (document.querySelector(`#grid li:nth-child(3) .hexagon img`).style.opacity === "" ||
        document.querySelector(`#grid li:nth-child(3) .hexagon img`).style.opacity === "1") {
        document.querySelector(`#grid li:nth-child(3) .hexagon img`).animate([
            { opacity: "1" },
            { opacity: "0.1" }
        ], 700);
        document.querySelector(`#grid li:nth-child(3) .hexagon img`).style.opacity = "0.1";
        document.querySelector(`#grid li:nth-child(3) .hexagon .box`).animate([
            { opacity: "0" },
            { opacity: "0.9" }
        ], 700);
        document.querySelector(`#grid li:nth-child(3) .hexagon .box`).style.opacity = "0.9";
    } else {
        document.querySelector(`#grid li:nth-child(3) .hexagon img`).animate([
            { opacity: "0.1" },
            { opacity: "1" }
        ], 700);
        document.querySelector(`#grid li:nth-child(3) .hexagon img`).style.opacity = "1";
        document.querySelector(`#grid li:nth-child(3) .hexagon img`).style.filter = "grayscale(100%)";
        document.querySelector(`#grid li:nth-child(3) .hexagon .box`).animate([
            { opacity: "0.9" },
            { opacity: "0" }
        ], 700);
        document.querySelector(`#grid li:nth-child(3) .hexagon .box`).style.opacity = "0";
    }
});
document.querySelector(`#grid li:nth-child(3)`).addEventListener('mouseenter', function () {
    document.querySelector(`#grid li:nth-child(3)`).style.cursor = "pointer";
});

//boucle essai 1
// for (i = 1; i <= 16; i++) {
//     document.querySelector(`#grid li:nth-child(${i})`).addEventListener('mouseenter', function () {
//         document.querySelector(`#grid li:nth-child(${i}) .hexagon img`).animate([
//             { transform: "rotateY(0deg)", opacity: "1" },
//             { transform: "rotateY(90deg)", opacity: "0" }
//             // { opacity: "1", filter: "blur(0)" },
//             // { opacity: "0", filter: "blur(2rem)" }
//         ], 700);
//         document.querySelector(`#grid li:nth-child(${i}) .hexagon img`).style.opacity = "0";
//         document.querySelector(`#grid li:nth-child(${i}) .hexagon .box`).animate([
//             { opacity: "0" },
//             { opacity: "1" }
//         ], 700);
//         document.querySelector(`#grid li:nth-child(${i}) .hexagon .box`).style.opacity = "1";
//     });

//     document.querySelector(`#grid li:nth-child(${i})`).addEventListener('mouseleave', function () {
//         document.querySelector(`#grid li:nth-child(${i}) .hexagon img`).animate([
//             { transform: "rotateY(90deg)", opacity: "0" },
//             { transform: "rotateY(0deg)", opacity: "1" }
//             // { opacity: "0", filter: "blur(2rem)" },
//             // { opacity: "1", filter: "blur(0)" }
//         ], 700);
//         document.querySelector(`#grid li:nth-child(${i}) .hexagon img`).style.opacity = "1";
//         document.querySelector(`#grid li:nth-child(${i}) .hexagon img`).style.filter = "grayscale(100%)";
//         document.querySelector(`#grid li:nth-child(${i}) .hexagon .box`).animate([
//             { opacity: "1" },
//             { opacity: "0" }
//         ], 700);
//         document.querySelector(`#grid li:nth-child(${i}) .hexagon .box`).style.opacity = "0";
//     });
// }

//boucle essai 2
// let AllLi = document.querySelectorAll("#grid li");
// let Allimg = document.querySelectorAll("#grid li hexagon > img");
// let Allboxes = document.querySelectorAll("#grid li .hexagon .box");

// for (i = 1; i <= 16; i++) {
//     AllLi[i].addEventListener('mouseenter', function () {
//         Allimg[i].animate([
//             { transform: "rotateY(0deg)", opacity: "1" },
//             { transform: "rotateY(90deg)", opacity: "0" }
//             // { opacity: "1", filter: "blur(0)" },
//             // { opacity: "0", filter: "blur(2rem)" }
//         ], 700);
//         Allimg[i].style.opacity = "0";
//         Allboxes[i].animate([
//             { opacity: "0" },
//             { opacity: "1" }
//         ], 700);
//         Allboxes[i].style.opacity = "1";
//     });

//     AllLi[i].addEventListener('mouseleave', function () {
//         Allimg[i].animate([
//             { transform: "rotateY(90deg)", opacity: "0" },
//             { transform: "rotateY(0deg)", opacity: "1" }
//             // { opacity: "0", filter: "blur(2rem)" },
//             // { opacity: "1", filter: "blur(0)" }
//         ], 700);
//         Allimg[i].style.opacity = "1";
//         Allimg[i].style.filter = "grayscale(100%)";
//         Allboxes[i].animate([
//             { opacity: "1" },
//             { opacity: "0" }
//         ], 700);
//         Allboxes[i].style.opacity = "0";
//     });
// }

const closeButton = document.querySelector('.closemenu');
const openButton = document.querySelector('.openmenu');
const menuItems = document.querySelectorAll('.menuitem');

function burgermenu() {
    closeButton.style.display = "none";
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = "none";
    }

    openButton.addEventListener('click', function () {
        openButton.style.display = "none";
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "block";
        };
        closeButton.style.display = "block";
    });

    closeButton.addEventListener('click', function () {
        openButton.style.display = "block";
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "none";
        };
        closeButton.style.display = "none";
    })
};

window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        openButton.style.display = "block";
        burgermenu();
    } else if (window.innerWidth > 768) {
        closeButton.style.display = "none";
        openButton.style.display = "none";
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "block";
        };
    };
})

// if (window.innerWidth < 768) {
//     burgermenu();
// } else {
//     closeButton.style.display = "none";
//     openButton.style.display = "none";
//     for (let i = 0; i < menuItems.length; i++) {
//         menuItems[i].style.display = "block";
//     };
// };

if (window.matchMedia('(max-width:768px)').matches) {
    burgermenu();
} else if (window.matchMedia('(min-width:768px)').matches) {
    closeButton.style.display = "none";
    openButton.style.display = "none";
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = "block";
    };
}

// const mediaQuery = windows.matchMedia("(max-width:768px)");

// burgermenu(mediaQuery);
// mediaQuery.addEventListener(burgermenu);
