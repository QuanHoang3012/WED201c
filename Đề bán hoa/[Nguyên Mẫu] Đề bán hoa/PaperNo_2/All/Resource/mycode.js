function CustomerInfor(params) {
    let value =prompt("Enter your phone: ")
    if(value.length==0) {
        alert("Not found")
    }else{
        alert("Floral will contact your phone number: \n"+value)
    }
}