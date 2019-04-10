//    Cделать таймер обратного отсчёта.
// 1. Таймер должен получать время обратного отсчёта в конструкторе.
// 2. Должен иметь кнопки старт(запускает) и стоп(ставит паузу).
// 3. Должен иметь в конструторе параметр для автоматического запуска(true/false).
// 4. Длина полоски уменьшается с движением таймера.

const container = document.querySelector('.container');

class Timer {
    constructor(duration, isAuto = false) {
        this.duration = duration * 60;
        this.currentTime = duration * 60;
        this.isAuto = isAuto;
        this._inProccess = false;
        this.buttonHandler = this.buttonHandler.bind(this);
        this.render();
        if (isAuto){
            this.button.innerText = "Stop";
            this.startTimer();
        }
    }
    //метод класса отрисовывает output
    createOutput() {
        this.output = document.createElement("div");
        this.output.classList.add("output");
        return this.output;
    }

    //метод класса отрисовывает progress bar
    createLine() {
        this.line = document.createElement("div");
        this.line.classList.add("line");
        return this.line;
    }

    //метод класса отрисовывает button
    createButton() {
        this.button = document.createElement("button");
        this.button.classList.add("btn");
        this.button.innerText = "Start";
        this.button.onclick = this.buttonHandler;
        return this.button;
    }

    //метод отрисовывает элементы на страницу
    render() {
        container.append(this.createOutput());
        container.append(this.createButton());
        container.append(this.createLine());
    }

    //метод класса запускает таймер
    update() {
        this.timer = setInterval(() => {
            this.currentTime--;
            if (this.status) {
                this.status(this);
            }
            if (this.currentTime <= 0) this.pauseTimer();
        }, 1000);
    }

    //метод класса привязывает progress bar к таймеру
    status = (t) => {
        this.output.innerText = t.currentTime;
        const perc = (1 - (t.duration - t.currentTime) / t.duration) * 100;
        this.line.style.width = perc + '%';
    }

    //метод класса запускает работу таймера при нажатии на кнопку
    startTimer() {
        this._inProccess = true;
        this.update();
    }

    //метод класса завершает работу таймера при нажатии на кнопку
    pauseTimer() {
        this._inProccess = false;
        clearInterval(this.timer);
        this.timer = null;
    }

    //метод класса меняет текст на кнопке и запускает таймер
    buttonHandler() {
        if (this._inProccess) {
            this.button.innerText = "Start";
            this.pauseTimer();
        } else {
            this.button.innerText = "Stop";
            this.startTimer();
        }
    }
}
new Timer(1);
new Timer(3,true);