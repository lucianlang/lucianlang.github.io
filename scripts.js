window.addEventListener('load',() => {
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
         
        document.querySelector(".submit-button").addEventListener("click", () => {
            if (document.querySelector(".selected-rate").value == 'false'){
                alert("Please select a score before clicking the Submit button!.");
            }
            else {
                    document.querySelector(".rating-state").style.visibility = "hidden";
                    document.querySelector(".thank-you-start").style.visibility = "visible";
            }
              
    })
  
            })


