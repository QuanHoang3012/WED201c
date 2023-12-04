
let showTour = document.getElementById("price-tour"),
    formTour = document.getElementById("tour")
    formTour.addEventListener ("change",function() {
    showTour.innerHTML=  formTour.options[formTour.selectedIndex].value +"$/Person"
})

function CalTotal() {  
    let total =0,
    priceTour = formTour.options[formTour.selectedIndex].value,
    numberOfPeople = document.getElementById("people").value,
    totalPrice = document.getElementById("totalPrice")
    total = (numberOfPeople*priceTour) +"$"
    totalPrice.innerHTML = total
}

