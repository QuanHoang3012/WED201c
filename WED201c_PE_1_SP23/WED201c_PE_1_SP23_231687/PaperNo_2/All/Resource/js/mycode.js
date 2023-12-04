function calTotal(params) {
    let total =0,
    menuListItem = document.querySelectorAll(".menu-list")[0],
    menuListCart = document.querySelectorAll(".menu-list")[1],
    totalPrice = document.getElementById("totalPrice"),
    checkedItem = menuListItem.querySelectorAll('input[type= "checkbox"]:checked'),
    menuListfooter = menuListCart.querySelector(".menu-list-footer"),
    menuListCartContent = menuListCart.querySelector(".menu-list-content")

    menuListCartContent.innerHTML=""
    checkedItem.forEach((item) => {
        let itemName = item.parentElement.querySelector("label").innerText
        total+= eval(item.value)
        let div = document.createElement("div")
        div.innerHTML += itemName 
        menuListCartContent.appendChild(div)
    })
    totalPrice.innerText = total+"$"
    if(total>0) {
        menuListfooter.style.display = 'block'
    }else {
        menuListfooter.style.display = 'none';
    }
}