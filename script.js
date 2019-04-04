//    Cделать таймер обратного отсчёта.
// 1. Таймер должен получать время обратного отсчёта в конструкторе.
// 2. Должен иметь кнопки старт(запускает) и стоп(ставит паузу).
// 3. Должен иметь в конструторе параметр для автоматического запуска(true/false).
// 4. Длина полоски уменьшается с движением таймера.

const container = document.querySelector('.container');

class Timer {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.render();
    }
//метод класса запускает работу таймера при нажатии на кнопку
    onStart() {

    }
//метод класса завершает работу таймера при нажатии на кнопку
    onStop() {

    }
//метод класса обновляет счётчик таймера 
    update() {

    }
//метод класса отрисовывает output
    createOutput() {
        this.ouput = document.createElement("div");
        this.ouput.classList.add("ouput");
        return this.ouput;
    }

//метод класса отрисовывает progress bar
    createLine() {
        this.line = document.createElement("div");
        this.line.classList.add("line");
        return this.line;
    }

//метод класса отрисовывает button
    createButton(){
        this.button = document.createElement("button");
        this.button.classList.add("btn");
        this.button.innerHTML = "Start"; 
        return this.button;
    }
//метод отрисовывает элементы на страницу
    render() {
        container.append(this.createOutput());
        container.append(this.createButton());
        container.append(this.createLine());
    }   
}

//функционал кнопки
// const button = document.querySelector('.btn');
//  toogleText = () => {
//     button.innerHTML == "Start" ? button.innerHTML = "Stop" : button.innerHTML = "Start";
// }
// button.addEventListener("click", toogleText);

new Timer();

