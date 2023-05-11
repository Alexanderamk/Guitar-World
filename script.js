let guitarAmount;
let userAmount;
let home;
let phoneNo;
 let request = "Please enter the amount you have to pay!";

function start(amount) {
    guitarAmount = amount;
    userAmount = prompt(request);
    while(guitarAmount != userAmount) {
        request = "Wrong amount. You have to pay $" + guitarAmount +". Please enter it again!";
        userAmount = prompt(request);
    }
    home = prompt("Please enter the place where you live! Eg(Taunggyi, Yangon, New York,...)");
    phoneNo = prompt("Please enter your phone number to call you when the guitar arrive to " + home + ".");

    alert("We will send to your home which is in " + home + " in 2 days! Thanks for your buying. Have a nice day.");
}
