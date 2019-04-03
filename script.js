//    Cделать таймер обратного отсчёта.
// 1. Таймер должен получать время обратного отсчёта в конструкторе.
// 2. Должен иметь кнопки старт(запускает) и стоп(ставит паузу).
// 3. Должен иметь в конструторе параметр для автоматического запуска(true/false).
// 4. Длина полоски уменьшается с движением таймера.

const button = document.querySelector('.btn');
let toogleText = () => {
    button.innerHTML == "Start" ? button.innerHTML = "Stop" : button.innerHTML = "Start";
}
button.addEventListener("click", toogleText);  
 
const time = 10;

class Timer {
    constructor(obj) {
        this.time = obj.time;
        this.onStart = obj.onStart || null;
        this.onEnd = obj.onEnd || null;
        this.onTick = obj.onTick || null;
        this.intervalID = null;

        this.start = () => {
            this.interval = setInterval(this.update, 1000);
        };

        this.stop = () =>{
          clearInterval(this.interval);  
        };

        this.update = () => {
            this.time > 0 ? this.time -= 1 : this.stop();
            this.onTick ? this.onTick() : void 0;
            return this.get();
        };

        this.get = () => {
            return this.time;
        };

    }
}

let outputCounter = () => {
    return document.querySelector('.output');
};

let progressBar = () => {
    return document.querySelector('.line');
}

let tickCounter = () => {
    outputCounter('.output').innerHTML = timer1.get();
    progressBar('.line').style.width = timer1.get()/time * 100 + '%';
};

const timer1 = new Timer({
    time: time,
    onTick: tickCounter
});

timer1.start();
requestAnimationFrame(tickCounter);


