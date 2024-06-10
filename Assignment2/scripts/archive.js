window.onload = function () {
    let y = JSON.parse(localStorage.getItem("archive")) || [];
    console.log(y);
    DisplayArchive(y);
    let m = document.getElementById("S2");
    m.value = "None";
    let n = document.getElementById("P2");
    m.value = "None";
}

function DisplayArchive(arr) {
    let doc1 = document.getElementById("cellData");
    doc1.innerHTML = "";
    arr.forEach((ele, i) => {
        let trow = document.createElement("tr");
        trow.className = "trow";

        let t1 = document.createElement("td");
        t1.innerText = ele.title;
        console.log(ele.title);
        trow.appendChild(t1);
        
        let p1 = document.createElement("td");
        p1.innerText = ele.priority;
        let px1 = ele.priority;
        if (px1 == "Medium") {
            p1.style.backgroundColor = "Yellow";
        } else if (px1 == "High") {
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

        let rbtn = document.createElement("button");
        rbtn.className = "restore";
        let r1 = document.createElement("td");
        rbtn.innerHTML = "Restore";
        r1.appendChild(rbtn);
        trow.appendChild(r1);
        rbtn.addEventListener("click", () => {
            restoreRow(i);
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

function restoreRow(i) {
    let x = JSON.parse(localStorage.getItem("archive"));
    let y = x.splice(i, 1)[0];
    let z = JSON.parse(localStorage.getItem("todos")) || [];
    z.push(y);
    localStorage.setItem("todos", JSON.stringify(z));
    localStorage.setItem("archive", JSON.stringify(x));
    let m = document.getElementById("S2");
    m.value = "None";
    let n = document.getElementById("P2");
    m.value = "None";
    DisplayArchive(x);
}

function ToggleButton(i) {
    let x = JSON.parse(localStorage.getItem("archive"));
    let stat = x[i].status;
    x[i].status = (stat == "Pending") ? "Completed" : "Pending";
    localStorage.setItem("archive", JSON.stringify(x));
    let m = document.getElementById("S2");
    m.value = "None";
    let n = document.getElementById("P2");
    m.value = "None";
    DisplayArchive(x);
}

function deleteRow(i) {
    let x = JSON.parse(localStorage.getItem("archive"));
    x.splice(i, 1); // Remove the element
    localStorage.setItem("archive", JSON.stringify(x));
    let m = document.getElementById("S2");
    m.value = "None";
    let n = document.getElementById("P2");
    m.value = "None";
    DisplayArchive(x);
}

function PriorityChange(){
    let x = JSON.parse(localStorage.getItem("archive"));
    let z = document.getElementById("P2").value;
    let y = x.filter((ele) => {
        return (ele.priority == z);
    });
    DisplayArchive(y);
    let m = document.getElementById("S2");
    m.value = "None";
}

function StatusChange(){
    let x = JSON.parse(localStorage.getItem("archive"));
    let z = document.getElementById("S2").value;
    let y = x.filter((ele) => {
        return (ele.status == z);
    });
    DisplayArchive(y);
    let m = document.getElementById("P2");
    m.value = "None";
}