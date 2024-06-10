window.onload = function () {
    let todoList = [];
    let y = JSON.parse(localStorage.getItem("todos")) || todoList;

    DisplayToDos(y);

    let btn = document.getElementById("addToDoBtn");
    btn.addEventListener("click", () => {
        y = JSON.parse(localStorage.getItem("todos")) || todoList;
        let m = document.getElementById("toDoName").value;
        let n = document.getElementById("P1").value;

        if (m == null || m == undefined || m == "") {
            alert("ToDo cannot be empty");
        }
        else {
            StoreToDos(y);
        }
    });
}

function DisplayToDos(arr) {
    let doc1 = document.getElementById("cellData");
    doc1.innerHTML = "";
    arr.forEach((ele, i) => {
        let trow = document.createElement("tr");
        trow.className = "trow";

        let t1 = document.createElement("td");
        t1.innerText = ele.title;
        trow.appendChild(t1);
        
        let p1 = document.createElement("td");
        p1.innerText = ele.priority;
        let px1 = ele.priority;
        if (px1 == "Medium") {
            p1.style.backgroundColor = "Yellow";
        }
        else if (px1 == "High") {
            p1.style.backgroundColor = "Red";
        }
        trow.appendChild(p1);  

        let sbtn = document.createElement("button");
        sbtn.className = "status";
        let s1 = document.createElement("td");
        sbtn.innerHTML = ele.status;
        s1.appendChild(sbtn);
        trow.appendChild(s1);
        sbtn.addEventListener("click", () => {
            ToggleButton(i);
        });

        let cbtn = document.createElement("button");
        cbtn.className = "delete";
        let d1 = document.createElement("td");
        cbtn.innerHTML = "Delete";
        d1.appendChild(cbtn);
        trow.appendChild(d1);

        cbtn.addEventListener("click", () => {
            deleteRow(i);
        });
        doc1.appendChild(trow);
    });
}

function StoreToDos(arr) {
    let todoList = [];
    let obj = {};
    let y = [...arr] || todoList;

    let m = document.getElementById("toDoName").value;
    let n = document.getElementById("P1").value;

    obj.title = m;
    obj.priority = n;
    obj.status = "Pending";
    y.push(obj);
    localStorage.setItem("todos", JSON.stringify(y));
    DisplayToDos(y);
    let x = document.getElementById("toDoName");
    x.value = "";
}

function deleteRow(i) {
    let x = JSON.parse(localStorage.getItem("todos"));
    let y = x.splice(i, 1)[0];
    console.log(y);
    let z = JSON.parse(localStorage.getItem("archive")) || [];
    z.push(y);
    localStorage.setItem("archive", JSON.stringify(z));
    localStorage.setItem("todos", JSON.stringify(x));
    DisplayToDos(x);
}

function ToggleButton(i) {
    let x = JSON.parse(localStorage.getItem("todos"));
    let stat = x[i].status;
    if (stat == "Pending") {
        x[i].status = "Completed";
    }
    else {
        x[i].status = "Pending";
    }
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(x));
    DisplayToDos(x);
}
