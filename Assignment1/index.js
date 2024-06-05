let user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];

window.onload = function(){

    let y = JSON.parse(localStorage.getItem("UserData")) || user;

    DisplayCards(y);
    StoreCards(y);
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

        let cbtn = document.createElement("button");
        cbtn.innerHTML = "Add to Cart";
        card.appendChild(cbtn);
        cbtn.addEventListener("click",() => {
            addToCart(ele)}
        );
        doc1.appendChild(card);
    });
}

function StoreCards(arr){
    // console.log("I am inside StoreCard function");
    localStorage.setItem("UserData",JSON.stringify(arr));
}

function deleteCard(i){
    // console.log("I am inside Delete function");
    let x = JSON.parse(localStorage.getItem("UserData"));
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
