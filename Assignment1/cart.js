window.onload = function(){

    let y = JSON.parse(localStorage.getItem("CartData")) || [];

    DisplayCards(y);
}


function DisplayCards(arr){
    // console.log("I am inside DisplayCard function");
    let doc1 = document.getElementById("Container");
    doc1.innerHTML = "";
    arr.forEach((ele,i) => {
        let card = document.createElement("div");
        card.className = "card";
        let  name = document.createElement("p");
        name.innerText = "Name: " + ele.name;
        card.appendChild(name);
        let  uname = document.createElement("p");
        uname.innerText = "Username: " + ele.username;
        card.appendChild(uname);
        let  email1 = document.createElement("p");
        email1.innerText = "Email: " + ele.email;
        card.appendChild(email1);
        let dbtn = document.createElement("button");
    dbtn.innerText = "Delete User";
    card.appendChild(dbtn);

    dbtn.addEventListener("click", () => deleteCard(i));

        doc1.appendChild(card);
    });
}

function StoreCards(arr){
    // console.log("I am inside StoreCard function");
    localStorage.setItem("CartData",JSON.stringify(arr));
}

function deleteCard(i){
    // console.log("I am inside Delete function");
    let x = JSON.parse(localStorage.getItem("CartData"));
    x.splice(i,1);
    DisplayCards(x);
    StoreCards(x);
}

function addToCart(obj){
    // console.log("I am inside addToCart function");
    let m = JSON.parse(localStorage.getItem("CartData")) || [];
    m.push(obj);
    localStorage.setItem("CartData",JSON.stringify(m));
}
