import './scss/main.scss';
console.log('Hello, SASS');
console.log('Hello, HTML');



const pianoKey = document.querySelector(".piano__key");
const keys = document.querySelectorAll(".key");
pianoKey.addEventListener("click", (event) => {
    setTimeout(() => (keys.forEach(el => el.classList.remove("active"))), 200);

    if (event.target.classList.contains("key")) {
        event.target.classList.add("active");
        let soundKey = event.target.dataset.sound;
        new Audio(`sounds/${soundKey}.wav`).play();

    } else if (event.target.parentNode.classList.contains("key")) {
        event.target.parentNode.classList.add("active");
        let soundKey = event.target.parentNode.dataset.sound;
        new Audio(`sounds/${soundKey}.wav`).play();
    }
});


let сontrolКeys = {
    a: "do",
    s: "re",
    d: "mi",
    g: "fa",
    h: "sol",
    j: "la",
    k: "si",
    w: "do_",
    e: "re_",
    y: "fa_",
    u: "sol_",
    i: "la_"
}


window.addEventListener("keydown", (event) => {

    let myKey = event.key;
    let newSoundKey = сontrolКeys[myKey];

    setTimeout(() => (keys.forEach(el => el.classList.remove("active"))), 200);

    if (newSoundKey) {
        new Audio(`sounds/${newSoundKey}.wav`).play();

        keys.forEach(key => {
            if (key.dataset.sound == newSoundKey) {
                key.classList.add("active")
            };
        });

    } else {
        return
    }
});

document.querySelector(".funny-geese__prompt").addEventListener("click", (event) => {
    event.target.classList.toggle("active");
    document.querySelectorAll(".piano__title-key").forEach(el => el.classList.toggle("visibility"));
})

let playActiv = false;
const play = document.querySelector(".funny-geese__button");

play.addEventListener("click", (event) => {
    if (!playActiv) {
        playActiv = true
        keys.forEach(key => {
            if (key.dataset.sound == "fa") {
                setTimeout(() => (key.click()), 100);
            };
            if (key.dataset.sound == "mi") {
                setTimeout(() => (key.click()), 400);
            };
            if (key.dataset.sound == "re") {
                setTimeout(() => (key.click()), 700);
            };
            if (key.dataset.sound == "do") {
                setTimeout(() => (key.click()), 1000);
            };
            if (key.dataset.sound == "sol") {
                setTimeout(() => (key.click()), 1300);
            };
            if (key.dataset.sound == "sol") {
                setTimeout(() => (key.click()), 1900);
            };
            if (key.dataset.sound == "fa") {
                setTimeout(() => (key.click()), 2400);
            };
            if (key.dataset.sound == "mi") {
                setTimeout(() => (key.click()), 2700);
            };
            if (key.dataset.sound == "re") {
                setTimeout(() => (key.click()), 3000);
            };
            if (key.dataset.sound == "do") {
                setTimeout(() => (key.click()), 3300);
            };
            if (key.dataset.sound == "sol") {
                setTimeout(() => (key.click()), 3600);
            };
            if (key.dataset.sound == "sol") {
                setTimeout(() => (key.click()), 4200);
            };
            if (key.dataset.sound == "fa") {
                setTimeout(() => (key.click()), 4800);
            };
            if (key.dataset.sound == "la") {
                setTimeout(() => (key.click()), 5100);
            };
            if (key.dataset.sound == "la") {
                setTimeout(() => (key.click()), 5400);
            };
            if (key.dataset.sound == "fa") {
                setTimeout(() => (key.click()), 5700);
            };
            if (key.dataset.sound == "mi") {
                setTimeout(() => (key.click()), 6000);
            };
            if (key.dataset.sound == "sol") {
                setTimeout(() => (key.click()), 6300);
            };
            if (key.dataset.sound == "sol") {
                setTimeout(() => (key.click()), 6600);
            };
            if (key.dataset.sound == "mi") {
                setTimeout(() => (key.click()), 6900);
            };
            if (key.dataset.sound == "re") {
                setTimeout(() => (key.click()), 7200);
            };
            if (key.dataset.sound == "mi") {
                setTimeout(() => (key.click()), 7500);
            };
            if (key.dataset.sound == "fa") {
                setTimeout(() => (key.click()), 7800);
            };
            if (key.dataset.sound == "re") {
                setTimeout(() => (key.click()), 8100);
            };
            if (key.dataset.sound == "do") {
                setTimeout(() => (key.click()), 8400);
            };
            if (key.dataset.sound == "do") {
                setTimeout(() => (key.click()), 9000);
            };
            if (key.dataset.sound == "fa") {
                setTimeout(() => (key.click()), 9600);
            };
            if (key.dataset.sound == "la") {
                setTimeout(() => (key.click()), 9900);
            };
            if (key.dataset.sound == "la") {
                setTimeout(() => (key.click()), 10200);
            };
            if (key.dataset.sound == "fa") {
                setTimeout(() => (key.click()), 10500);
            };
            if (key.dataset.sound == "mi") {
                setTimeout(() => (key.click()), 10800);
            };
            if (key.dataset.sound == "sol") {
                setTimeout(() => (key.click()), 11100);
            };
            if (key.dataset.sound == "sol") {
                setTimeout(() => (key.click()), 11400);
            };
            if (key.dataset.sound == "mi") {
                setTimeout(() => (key.click()), 11700);
            };
            if (key.dataset.sound == "re") {
                setTimeout(() => (key.click()), 12000);
            };
            if (key.dataset.sound == "mi") {
                setTimeout(() => (key.click()), 12300);
            };
            if (key.dataset.sound == "fa") {
                setTimeout(() => (key.click()), 12600);
            };
            if (key.dataset.sound == "re") {
                setTimeout(() => (key.click()), 12900);
            };
            if (key.dataset.sound == "do") {
                setTimeout(() => (key.click()), 13200);
            };
            if (key.dataset.sound == "do") {
                setTimeout(() => (key.click()), 13800);
                setTimeout(() => (playActiv = false), 13900);
            };
        });
    };
});