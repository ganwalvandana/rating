const stars = document.querySelectorAll(".star");
const card = document.querySelector(".section1");
const thankyou = document.querySelector(".section2");
const detail = document.getElementById("info");

let rating = 0;
for(let i = 0; i < stars.length; i++){
    stars[i].addEventListener("click", (e) => {
        console.log(e.target.innerText);
        rating = e.target.innerText;
        for(let j = 0; j < stars.length; j++){
            if(j < rating){
                stars[j].style.backgroundColor = "orange";
                // stars[rating].addEventListener("onmouseover", ()=> {
                //     stars[j].style.backgroundColor = "green";

                // })
            } else{
                stars[j].style.backgroundColor = "white";
            }
        }

    })
}

function submit() {
    if(rating > 0) {
        card.style.display = "none";
        info.innerText = `You selected ${rating} out of ${stars.length}`
        thankyou.style.display = "flex";
    }
}




































// function starSelected(rating){
//     console.log("clicked");
//     let button = stars[rating -1];
//     button.style.backgroundColor= "orange";
//     // stars.style.backgroundColor = "blue" ;

// }

// function submit(){
//     console.log("submitted")
//     // one.style.backgroundColor = "white";
//     card.style.display = "none";
//     thankyou.style.display= "flex";
//     let num = one.innerText;
//     info.innerText = `You selected ${num} out of 5`

// }



// stars.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         stars.forEach((button)=> {
//             stars.style.backgroundColor = "blue"
//         } )
//     })
// })



