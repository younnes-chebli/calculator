const main = document.querySelector("main");

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
    key.setAttribute("key", "C");
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
    key.setAttribute("key", "=");
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

const addToHistory = (str) => {
    const historyLi = document.createElement("li");
    historyLi.innerHTML = str;
    historyUl.append(historyLi);
};

const computeResult = (str) => {
    return Function('return ' + str)();
};

const isValidKey = (key) => {
    return;
}

for(const key of keys) {
    key.addEventListener("click", (e) => {
        const pressedKey = e.target.getAttribute("key");

        if(pressedKey) {
            if(pressedKey === "C") {
                display.innerHTML = "";
            } else if(pressedKey === "=" && display.innerHTML != "") {
                let completeOp;
                const operation = display.innerHTML;
                completeOp = operation;
                completeOp += ` = ${computeResult(operation)}`;
                display.innerHTML = "";
                const historyContainer = document.getElementById("history");
                historyContainer.style.visibility = "visible";
                addToHistory(completeOp);
            } else {
                display.innerHTML += pressedKey;
            }
        }
    });
}