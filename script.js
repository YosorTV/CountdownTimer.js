//    Cделать таймер обратного отсчёта.
// 1. Таймер должен получать время обратного отсчёта в конструкторе.
// 2. Должен иметь кнопки старт(запускает) и стоп(ставит паузу).
// 3. Должен иметь в конструторе параметр для автоматического запуска(true/false).
// 4. Длина полоски уменьшается с движением таймера.

const container = document.querySelector('.container');

class Timer {
    constructor(millieseconds) {
        this.millieseconds = millieseconds;
        this._inProccess = false;
        this.buttonHandler = this.buttonHandler.bind(this);
        this.mount();
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
        this.button.innerHTML = "Start";
        this.button.onclick = this.buttonHandler;
        return this.button;
    }

    //метод класса изменяет StatusBar
    update() {
        this.interval = setInterval(() => {
            const currentWidth = this.line.offsetWidth;
            const percent = (this.width / 50);
            if (currentWidth - percent < 0) {
                return this.pauseTimer();
            }
            this.line.style.width = `${currentWidth - percent}px`;
            this.output.innerText = (currentWidth - percent).toFixed();
        }, 10);
    }

    //метод класса запускает работу таймера при нажатии на кнопку
    startTimer() {
        this._inProccess = true;
        this.update();
    }

    //метод класса завершает работу таймера при нажатии на кнопку
    pauseTimer() {
        this._inProccess = false;
        clearInterval(this.interval);
    }

    //метод класса меняет текст на кнопке и запускает
    buttonHandler() {
        if (this._inProccess) {
            this.button.innerHTML = "Start"
            this.pauseTimer();
        } else {
            this.button.innerHTML = "Stop"
            this.startTimer();
        }
    }

    //метод класса обновляет счётчик таймера 
    tick() {
        this.millieseconds <= 0 ? this.millieseconds -= 1 : this.pauseTimer();
        return this.currentTime();
    }

    //метод класса возвращает новое время
    currentTime() {
        return this.millieseconds;
    }

    outputCounter() {
        return document.querySelector('.output');
    }

    //метод отрисовывает элементы на страницу
    mount() {
        container.append(this.createOutput());
        container.append(this.createButton());
        container.append(this.createLine());
        this.width = this.line.offsetWidth;
        this.outputCounter('.output').innerHTML = this.millieseconds;
    }
}

new Timer(2);