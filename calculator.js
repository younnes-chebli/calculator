const main = document.querySelector("main");
const body = document.body;
const validKeys = ["(", ")", "%", "Backspace", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];

const displayCalculator = () => {
    const calculator = document.createElement("div");
    calculator.classList.add("calculator");

    const display = document.createElement("div");
    display.classList.add("display");
    calculator.append(display);

    let row;
    let key;

    row = document.createElement("div");
    row.classList.add("row");
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "(";
    key.setAttribute("key", "(");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = ")";
    key.setAttribute("key", ")");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "%";
    key.setAttribute("key", "%");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "C";
    key.setAttribute("key", "Backspace");
    row.append(key);
    calculator.append(row);

    row = document.createElement("div");
    row.classList.add("row");
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "7";
    key.setAttribute("key", "7");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "8";
    key.setAttribute("key", "8");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "9";
    key.setAttribute("key", "9");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "/";
    key.setAttribute("key", "/");
    row.append(key);
    calculator.append(row);

    row = document.createElement("div");
    row.classList.add("row");
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "4";
    key.setAttribute("key", "4");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "5";
    key.setAttribute("key", "5");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "6";
    key.setAttribute("key", "6");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "X";
    key.setAttribute("key", "*");
    row.append(key);
    calculator.append(row);

    row = document.createElement("div");
    row.classList.add("row");
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "1";
    key.setAttribute("key", "1");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "2";
    key.setAttribute("key", "2");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "3";
    key.setAttribute("key", "3");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "-";
    key.setAttribute("key", "-");
    row.append(key);
    calculator.append(row);

    row = document.createElement("div");
    row.classList.add("row");
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "0";
    key.setAttribute("key", "0");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = ".";
    key.setAttribute("key", ".");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "=";
    key.setAttribute("key", "Enter");
    row.append(key);
    key = document.createElement("div");
    key.classList.add("key");
    key.innerHTML = "+";
    key.setAttribute("key", "+");
    row.append(key);
    calculator.append(row);

    const historyContainer = document.createElement("div");
    historyContainer.id = "history";
    const historyTitle = document.createElement("h3");
    historyTitle.innerHTML = "Historique";
    const historyUl = document.createElement("ul");
    historyContainer.append(historyTitle, historyUl);

    main.append(calculator, historyContainer);
};

displayCalculator();

const keys = document.querySelectorAll(".key");
const display = document.querySelector(".display");
const historyUl = document.querySelector("ul");
const historyContainer = document.getElementById("history");

const addToHistory = (str) => {
    historyContainer.style.visibility = "visible";
    const historyLi = document.createElement("li");
    historyLi.innerHTML = str;
    historyUl.append(historyLi);
};

const computeResult = (str) => {
    return Function('return ' + str)();
};

const calculate = () => {
    const operation = display.innerHTML;
    let completeOp = operation;
    completeOp += ` = ${computeResult(operation)}`;
    display.innerHTML = "";

    return completeOp;
};

const isEmpty = (str) => {
    return str == "";
};

const lightUpArea = (area) => {
    area.style.backgroundColor = "orangered";
    setTimeout(() => {
        area.style.backgroundColor = "#303030";
    }, 200);
};

for(const key of keys) {
    key.addEventListener("click", (e) => {
        const pressedButton = e.target.getAttribute("key");
        const pressedArea = e.target;

        if(pressedButton === "Backspace") {
            display.innerHTML = "";
        } else if(pressedButton === "Enter" && !isEmpty(display.innerHTML)) {
            const calculation = calculate();
            addToHistory(calculation);
            } else {
                if(pressedButton !== "Enter") {
                    lightUpArea(pressedArea);
                    display.innerHTML += pressedButton;    
                }
            }
    });
}

const isValidKey = (key) => {
    return validKeys.includes(key);
};

body.addEventListener("keyup", (e) => {
    const pressedKey = e.key;
    const pressedArea = document.querySelector(`[key="${pressedKey}"]`);

    if(pressedKey === "Backspace") {
        display.innerHTML = "";
    } else if(pressedKey === "Enter" && !isEmpty(display.innerHTML)) {
        const calculation = calculate();
        addToHistory(calculation);
    } else {
        if(isValidKey(pressedKey)) {
            lightUpArea(pressedArea);
            display.innerHTML += pressedKey;
        }
    }
});