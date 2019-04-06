//    Cделать таймер обратного отсчёта.
// 1. Таймер должен получать время обратного отсчёта в конструкторе.
// 2. Должен иметь кнопки старт(запускает) и стоп(ставит паузу).
// 3. Должен иметь в конструторе параметр для автоматического запуска(true/false).
// 4. Длина полоски уменьшается с движением таймера.

const container = document.querySelector('.container');

class Timer {
    constructor(millieseconds) {
        this.millieseconds = millieseconds;
        this.render();
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
        return this.button;
    }

    //метод класса изменяет StatusBar
    onStatus() {
        this.interval = setInterval(() => {
            const currentWidth = this.line.offsetWidth;
            const percent = (this.width / 50);
            if (currentWidth - percent < 0) {
                return this.onStop();
            }
            this.line.style.width = `${currentWidth - percent}px`;
        }, 100);
    }

    //метод класса запускает работу таймера при нажатии на кнопку
    onStart() {
        this.onStatus();
    }

    //метод класса завершает работу таймера при нажатии на кнопку
    onStop() {
        clearInterval(this.interval);
    }

    //метод класса обновляет счётчик таймера 
    update() {
        this.millieseconds <= 0 ? this.millieseconds -= 10 : this.onStop();
        return currentTime();
    }

    //метод класса возвращает новое время
    currentTime() {
        return this.millieseconds;
    }

    //метод класса меняет действие при клике на кнопку
    toogleText() {
        this.button.innerHTML == "Start" ? this.button.innerHTML = "Stop" : this.button.innerHTML = "Start";
    }

    outputCounter(){
        return document.querySelector('.output');
    }

    //метод отрисовывает элементы на страницу
    render() {
        container.append(this.createOutput());
        container.append(this.createButton());
        container.append(this.createLine());
        this.button.addEventListener("click", this.onStart.bind(this));
        this.button.addEventListener("click", this.onStatus.bind(this));
        this.button.addEventListener("click", this.onStop.bind(this));
        this.button.addEventListener('click', this.toogleText.bind(this));
        this.width = this.line.offsetWidth;
        this.outputCounter('.output').innerHTML = this.millieseconds;
    }
}
new Timer(500);

