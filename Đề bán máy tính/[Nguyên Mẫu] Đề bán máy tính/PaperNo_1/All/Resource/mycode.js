function CustomerInfor() {
    let value = window.prompt("Enter your Phone:");
    if (value.length ==0) {
        alert("Not found")
    }
    else {
         alert("Minh Phuong will contact you via phone number:\n"+value)
    }
}