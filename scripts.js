


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


document.getElementById("number1").addEventListener("click", () => {
if (rateOne.classList.contains("rate-number")){
    rateOne.classList.replace("rate-number","rate-number-clicked");
    rateTwo.classList.replace("rate-number-clicked","rate-number");
    rateThree.classList.replace("rate-number-clicked","rate-number");
    rateFour.classList.replace("rate-number-clicked","rate-number");
    rateFive.classList.replace("rate-number-clicked","rate-number");

}
})


document.getElementById("number2").addEventListener("click", () => {
    if (rateTwo.classList.contains("rate-number")){
        rateTwo.classList.replace("rate-number","rate-number-clicked");
        rateOne.classList.replace("rate-number-clicked","rate-number");
        rateThree.classList.replace("rate-number-clicked","rate-number");
        rateFour.classList.replace("rate-number-clicked","rate-number");
        rateFive.classList.replace("rate-number-clicked","rate-number");
    }
    })

    document.getElementById("number3").addEventListener("click", () => {
        if (rateThree.classList.contains("rate-number")){
            rateThree.classList.replace("rate-number","rate-number-clicked");
            rateOne.classList.replace("rate-number-clicked","rate-number");
           rateTwo.classList.replace("rate-number-clicked","rate-number");
           rateFour.classList.replace("rate-number-clicked","rate-number");
            rateFive.classList.replace("rate-number-clicked","rate-number");
        }
        })

        document.getElementById("number4").addEventListener("click", () => {
            if (rateFour.classList.contains("rate-number")){
               rateFour.classList.replace("rate-number","rate-number-clicked");
                rateOne.classList.replace("rate-number-clicked","rate-number");
                rateTwo.classList.replace("rate-number-clicked","rate-number");
                rateThree.classList.replace("rate-number-clicked","rate-number");
                rateFive.classList.replace("rate-number-clicked","rate-number");
            }
            })

            document.getElementById("number5").addEventListener("click", () => {
                if (rateFive.classList.contains("rate-number")){
                    rateFive.classList.replace("rate-number","rate-number-clicked");
                    rateOne.classList.replace("rate-number-clicked","rate-number");
                    rateTwo.classList.replace("rate-number-clicked","rate-number");
                    rateThree.classList.replace("rate-number-clicked","rate-number");
                    rateFour.classList.replace("rate-number-clicked","rate-number");
                }
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


