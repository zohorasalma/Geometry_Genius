function getInputValue(inputId) {
    const inputValue = parseFloat(document.getElementById(inputId).value);
    return inputValue;
}

function setValue(elementId, value) {
    document.getElementById(elementId).innerText = value;
}

function createAreaResult(shape, result) {
    const displayResults = document.getElementById('display-results');
    let number;
    if (displayResults.hasChildNodes()) {

    }
    else {
        number = 1;

    }

    const resultNumber = document.createElement('span');
    resultNumber.innerText = number + '.';


    const shapeName = document.createElement('span');
    shapeName.innerText = shape;


    const shapeResult = document.createElement('span');
    shapeResult.innerText = result;

    const btnConvert = document.createElement('button');
    let superNum = '<sup>2</sup>';
    btnConvert.innerHTML = 'convert to m<sup>2</sup>';
    let btnClassList = btnConvert.classList;
    btnClassList.add('btn', 'btn-primary', 'btn-sm');

    displayResults.appendChild(resultNumber);
    displayResults.appendChild(shapeName);
    displayResults.appendChild(shapeResult);
    displayResults.appendChild(btnConvert);

}
function displayResultTable(shape, result) {
    let table = document.getElementById('result-table');
    var rowCount = table.rows.length;
    let rowNumber;

    if (rowCount == 0) {
        rowNumber = 1;
    }
    else {
        rowNumber = rowCount + 1;
    }

    // Insert a row at the end of the table
    let newRow = table.insertRow(-1);


    let cell1 = newRow.insertCell(0);

    const resultNumber = document.createElement('span');
    resultNumber.innerText = rowNumber + '.';
    cell1.appendChild(resultNumber);

    let cell2 = newRow.insertCell(1);
    const shapeName = document.createElement('span');
    shapeName.innerText = shape;
    shapeName.style.padding = '8px';
    cell2.appendChild(shapeName);


    let cell3 = newRow.insertCell(2);
    const shapeResult = document.createElement('span');
    shapeResult.innerHTML = result+'cm<sup>2</sup>';
    cell3.appendChild(shapeResult);

    let cell4 = newRow.insertCell(3);
    const btnConvert = document.createElement('button');
    btnConvert.innerHTML = 'convert to m<sup>2</sup>';
    btnConvert.style.marginLeft = '8px';
    let btnClassList = btnConvert.classList;
    btnClassList.add('btn', 'btn-primary', 'btn-sm');
    cell4.appendChild(btnConvert);

    // // Append a text node to the cell
    // let newText = document.createTextNode("New bottom row");
    // newCell.appendChild(newText);
}
function generateRandomClr(){
    let maxVal = 0xFFFFFF;
    let random = Math.random()*maxVal;
    let randomVal = Math.floor(random);
    randomVal = randomVal.toString(16);
    let randomClr = randomVal.padStart(6,'0');
    return `#${randomClr.toUpperCase()}`;

}
