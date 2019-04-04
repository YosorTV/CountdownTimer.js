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
    
//метод класса запускает работу таймера при нажатии на кнопку
    onStart() {
        this.interval = setInterval(this.update, 1000);
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
    currentTime(){
        return this.millieseconds;
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

new Timer(5000);


