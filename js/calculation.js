
// Triangle 
document.getElementById('btn-triangle').addEventListener('click',function(){
    const triangleB = getInputValue('triangle-b');
    const triangleH = getInputValue('triangle-h');

    const areaTriangle = 0.5*triangleB*triangleH;
    
    displayResultTable('Triangle', areaTriangle);
}

)

// Rectangle
document.getElementById('btn-rectangle').addEventListener('click',function(){
    const rectangleW = getInputValue('rectangle-w');
    const rectangleL = getInputValue('rectangle-l');

    const areaRectangle = rectangleW* rectangleL;

    displayResultTable("Rectangle", areaRectangle);
})
