
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

//Parallelogram
document.getElementById('btn-parallelogram').addEventListener("click",function(){
    const parallelogramB = parseFloat(document.getElementById('parallelogram-b').innerText);
    const parallelogramH = parseFloat(document.getElementById('parallelogram-h').innerText);

    const areaParallelogram = parallelogramB*parallelogramH;

    displayResultTable("Parallelogram", areaParallelogram);

})

//Rhombus
document.getElementById('btn-rhombus').addEventListener("click",function(){
    const rhombusD1 = parseFloat(document.getElementById('rhombus-d1').innerText);
    const rhombusD2 = parseFloat(document.getElementById('rhombus-d2').innerText);

    const areaRhombus = 0.5*rhombusD1*rhombusD2;

    displayResultTable("Rhombus", areaRhombus);

})

//Pentagon
document.getElementById("btn-pentagon").addEventListener("click",function(){
    const pentagonP = parseFloat(document.getElementById('pentagon-p').innerText);
    const pentagonB = parseFloat(document.getElementById('pentagon-b').innerText);

    const areaPentagon = 0.5*pentagonB*pentagonP;

    displayResultTable("Pentagon", areaPentagon);

})

//ellipse
document.getElementById("btn-ellipse").addEventListener('click',function(){
    const ellipseA = parseFloat(document.getElementById('ellipse-a').innerText);
    const ellipseB = parseFloat(document.getElementById('ellipse-b').innerText);

    const areaEllipse = (3.1416* ellipseA*ellipseB).toFixed(2);

    displayResultTable("Ellipse", areaEllipse);


})
