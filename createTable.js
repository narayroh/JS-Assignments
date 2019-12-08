const DEFAULT_INPUT_NUMBER = 10;

const generateTable = (givenNumber) => {
    const body = document.getElementsByTagName("body")[0];
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");

    // creating all cells
    for (let i = 1; i <= givenNumber; i++) {
        // creates a table row
        const row = document.createElement("tr");
        for (let j = 1; j <= givenNumber; j++) {
            //creates a table cell
            const cell = document.createElement("td");
            const cellText = document.createTextNode(i * j);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    table.setAttribute("border", "1");

    //This code replaces existing table if any
    const existingTable = document.getElementsByTagName("table")[0];
    if (existingTable) {
        body.replaceChild(table, existingTable);
    }
    body.appendChild(table);
}

const createTable = () => {
    let inputNumber = document.querySelector("#input_number").value;
    if (!inputNumber) {
        inputNumber = DEFAULT_INPUT_NUMBER;
        generateTable(inputNumber);
    } else generateTable(inputNumber);
}
