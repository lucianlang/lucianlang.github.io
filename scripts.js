


window.onload = function() {

    const rateOne = document.getElementById("number1"),
    rateTwo = document.getElementById("number2"),
    rateThree = document.getElementById("number3"),
    rateFour = document.getElementById("number4"),
    rateFive = document.getElementById("number5");

   

    document.querySelector(".selected-rate").value = false;
    const rateNumber = document.getElementsByClassName("rate-number");
for(let i = 0; i < rateNumber.length; i++)
{
    rateNumber[i].addEventListener("click", () => {
      
        document.querySelector(".selected-rate").value = i + 1;
        let selectedRate = document.querySelector(".selected-rate").value;
        document.querySelector(".selected-heading").innerText = `You selected ${selectedRate} out of 5`;

    })
}

function clickedNumber(number) {
    let unclickedNumbers = document.getElementsByClassName("rate-number-clicked");
    for(let i = 0; i < unclickedNumbers.length; i++){
    unclickedNumbers[i].classList.replace("rate-number-clicked","rate-number");
    }
if (number.classList.contains("rate-number")){
    number.classList.replace("rate-number","rate-number-clicked");


}}

rateOne.addEventListener("click", () => {
    clickedNumber(rateOne);
})

rateTwo.addEventListener("click", () => {
    clickedNumber(rateTwo);
})

rateThree.addEventListener("click", () => {
    clickedNumber(rateThree);
})

rateFour.addEventListener("click", () => {
    clickedNumber(rateFour);
})

rateFive.addEventListener("click", () => {
    clickedNumber(rateFive);
})




    document.querySelector(".submit-button").addEventListener("click", () => {
            if (document.querySelector(".selected-rate").value == 'false'){
                alert(`You haven't selected any score yet!`);
            }
            else {
                    document.querySelector(".rating-state").style.display = "none";
                    document.querySelector(".thank-you-start").style.display = "flex";
            }
              
    })

     
            }


