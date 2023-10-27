const triangleButton = document.getElementById('triangle-btn');
const rectangleButton = document.getElementById('rectangle-btn');
const parallelogramButton = document.getElementById('parallelogram-btn');
const rhombusButton = document.getElementById('rhombus-btn');
const pentagonButton = document.getElementById('pentagon-btn');
const ellipseButton = document.getElementById('ellipse-btn');



const inputField = (inputId)=>{
    const preInputField = document.getElementById(inputId);
    const inputFieldString = preInputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    if(!isNaN(inputFieldNumber)){
        preInputField.value = ''
        return inputFieldNumber;
    }else{
        preInputField.value = '';
        return 0
    }
}

const areaName = (areaId)=>{
    const preAreaName = document.getElementById(areaId);
    const areaNameInnerText = preAreaName.innerText;
    return areaNameInnerText;
}


const getCreateLi =(areaName,areaCalcuation)=>{
    const ol = document.getElementById('calculation-ol');
    const li =document.createElement("LI");
    li.innerHTML = `
    <div class="flex justify-between items-center py-2">
      <span>${areaName}</span>
      <p><span>${areaCalcuation}</span>cm</p>
      <button
        class="bg-sky-600 px-4 py-1 rounded text-white text-sm"
      >
      Covert to m <sup>2</sup>
      </button>
    </div>
    `;
    ol.appendChild(li);
    return [areaName, areaCalcuation];
}


// triangle 
triangleButton.addEventListener('click', ()=>{
    const  widthField = inputField('triangle-b-field');
    const  heighField = inputField('triangle-h-field');
    const areaNameText = areaName("triangle-name");

    const areaCalculation = 0.5 * widthField *heighField;
    
    getCreateLi(areaNameText,areaCalculation);
  
});

// rectangle 
rectangleButton.addEventListener('click', ()=>{
    const  widthField = inputField('rectangle-w-field');
    const  heighField = inputField('rectangle-i-field');
    const areaNameText = areaName("rectangle-name");

    const areaCalculation =  widthField * heighField;
    
    getCreateLi(areaNameText,areaCalculation);
  
});

// parallelogram 
parallelogramButton.addEventListener('click', ()=>{
    const  widthField = inputField('parallelogram-b-field');
    const  heighField = inputField('parallelogram-h-field');
    const areaNameText = areaName("parallelogram-name");

    const areaCalculation =  widthField * heighField;
    
    getCreateLi(areaNameText,areaCalculation);
  
});


//rhombus
rhombusButton.addEventListener('click', ()=>{
    const  widthField = inputField('rhombus-d-field');
    const  heighField = inputField('rhombus-d2-field');
    const areaNameText = areaName("rhombus-name");

    const areaCalculation = 0.5 *  widthField * heighField;
    
    getCreateLi(areaNameText,areaCalculation);
  
});
//pentagon
pentagonButton.addEventListener('click', ()=>{
    const  a = inputField('pentagon-p-field');
    const areaNameText = areaName("pentagon-p-field");

    const areaCalculation =(Math.sqrt(5 * (5 + 2 * (Math.sqrt(5)))) * a * a) / 4;
    
    getCreateLi(areaNameText,areaCalculation);
  
});
//ellipse
ellipseButton.addEventListener('click', ()=>{
    const  widthField = inputField('ellipse-a-field');
    const  heighField = inputField('ellipse-b-field');
    const areaNameText = areaName("ellipse-name");

    const areaCalculation = (3.142 *  widthField * heighField).toFixed(2);
    getCreateLi(areaNameText,areaCalculation);
  
});
