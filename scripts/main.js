document.addEventListener("DOMContentLoaded", () => {
    const menuButtons = document.querySelectorAll("menu > button");
    const table = document.querySelector("table");
    const output = document.getElementById("output");

    addRow(); // первая строка

    menuButtons[0].addEventListener("click", addRow()); // Добавить элемент
    menuButtons[1].addEventListener("click", (event) => { // Сохранить
        const tableArray = table.childNodes[0].childNodes;
        const outputArray = [];
        tableArray.forEach(row => {
            const contents = row.childNodes;
            outputArray.push({name: contents[0].childNodes[0].value, phone: contents[1].childNodes[0].value});
        });
        const data = Object.fromEntries(outputArray.map(p => [p.name, p.phone])); // красивый вывод
        output.innerHTML = JSON.stringify(data, null, 2); // 
    });

    function addRow() { // Добавить строку
        const tbody = table.querySelector("tbody") || table.appendChild(document.createElement("tbody"));
        const newRow = tbody.insertRow();
        let leftInput = newRow.appendChild(document.createElement("td")).appendChild(document.createElement("input"));
        let rightInput = newRow.appendChild(document.createElement("td")).appendChild(document.createElement("input"));
        leftInput.type = "text";
        leftInput.name = "left";
        rightInput.type = "text";
        rightInput.name = "right";
        let arrowUp = newRow.appendChild(document.createElement("td")).appendChild(document.createElement("button"));
        let arrowDown = newRow.appendChild(document.createElement("td")).appendChild(document.createElement("button"));
        let buttonX = newRow.appendChild(document.createElement("td")).appendChild(document.createElement("button"));
        arrowUp.name = "arrowUp";
        arrowUp.textContent = "↑";
        arrowDown.name = "arrowDown";
        arrowDown.textContent = "↓";
        buttonX.name = "buttonX";
        buttonX.textContent = "✖";

        arrowUp.addEventListener("click", (event) => {
            const prevRow = newRow.previousElementSibling;
            if (prevRow) {
                newRow.parentNode.insertBefore(newRow, prevRow);
            }
        });

        arrowDown.addEventListener("click", (event) => {
            const nextRow = newRow.nextElementSibling;
            if (nextRow) {
                newRow.parentNode.insertBefore(nextRow, newRow);
            }
        });

        buttonX.addEventListener("click", (event) => {
            newRow.remove();
        });
    }
});