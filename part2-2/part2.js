var arr = [];
var stopp = true;

do {
    var input = prompt(" Enter the operation \n ( add , search , exit )");

    if (input == "add") {

        addContact();
    }
    if (input == "search") {
        searchContact();
    }
    if (input == "exit") {
        stopp = false;
    }

} while (stopp)

function addContact() {
    var contacts = {
        name: prompt("enter contact"),
        phone: prompt(" enter phone ")
    }
    arr.push(contacts);
}
function searchContact() {
    var search = prompt("Search for name or phone number ? ");
    if (search == "name") {
        var name = prompt("enter name");

        arr.filter(function (item) {
            item.name == name;
        
                alert("name is " + item.name + " phone is " + item.phone);
            
        }
        )
    }
    if (search == "number") {
        var number = prompt("enter number?");

        arr.filter(function (item) {
            item.phone == number;
        
                alert("name is  " + item.name + " and phone is " + item.phone);
            
        }
        )
    }
}