const form = document.querySelector('form');
let bmi
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')
    if(height===''|| height < 0 || isNaN(height)){
       result.innerHTML = "give a valid heigth"
    }
    else if(weight===''|| weight < 0 || isNaN(weight)){
       result.innerHTML = "give a valid weight"
    }
    else {
        bmi = (weight /((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
            result.innerHTML +=` <br><br> You are Under Weight</br></br>`;
        }
        else if(bmi > 24.9){
            result.innerHTML +=` <br><br> You are Over Weight</br></br>`;
        }
        else if (bmi>18.6 || bmi < 24.9){
            result.innerHTML += ` <br><br> You Have Normal weight</br></br>`;
        }
    }
    
})
