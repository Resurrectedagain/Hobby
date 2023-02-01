var table = document.querySelector("#subs-table");
var subscribe = document.querySelector('#subscribe')
var headerDate = document.querySelector('.header-date');
var today = new Date();
var yr = today.getFullYear();
var month = today.getMonth()+1;
var dt = today.getDate();
var todaysDate = `${dt}/${month}/${yr}`;
headerDate.innerHTML = `You are watching this page on ${todaysDate}`;


subscribe.addEventListener('click', function (event) {
    event.preventDefault();
    var userEmail = document.querySelector("#user-email").value;
    var userMessage = document.createElement('tr');
    //table is table row
    userMessage.innerText = `You have successfully subscribed to my blog through ${userEmail} at ${todaysDate}`
    table.appendChild(userMessage)
    console.log(dt)

})