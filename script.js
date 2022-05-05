// LÄSA IN KURSERNA FRÅN JSON FIL
// när detta körs vill jag lägga till från localsorage till den nya sidan spara från localstorage ovh läsa in
// lägga hela listan i localstorage

const request = new Request("/kurslista.json");
let kurslista = [];
fetch(request)
    .then((response) => response.json())
    .then((data) => {
        kurslista = data
        load();
    })

let cart = [];

function load() {
    for (let index = 0; index < kurslista.length; index++) {
        let element = kurslista[index];

        let div1 = document.getElementById("div1")
        let div = document.createElement("div")
        div =
            ` <div class="container mt-3" id="kursitems"> 
                <p class="kursnummer">${element.Kursnummer}</p>
                <h3 class="namn">${element.Kursensnamn}</h3>
                <p class="long">${element.Kursenslängd}</p>
                <p class="beskrivning">${element.Kursensbeskrivning}</p>
                <p class="utbildare">${element.Utbildare}</p>
             <input id="b1" onclick="addtocart('` + element.Kursnummer + `')"  type="button" class="btn btn-primary buyitems" data-bs-toggle="modal" data-bs-target="#myModal" value=" Lägg till i min varukorg 50 :-"></input>
    </div>`
        div1.innerHTML += div
    
    }
};

load();

function addtocart(index) {

    console.log(index);

    cart.push(index);


    localStorage.setItem("cart", JSON.stringify(cart));


    //alert("item" + index + " was added to the cart");
 
    loadCart();

}

// LÄGGA TILL KURSER I VARUKORGEN

function loadCart() { 

    console.log(cart);

    for (var i = 0; i < cart.length; i++) { 

 let div1 = document.getElementById("myCart")
        let div = document.createElement("div")
        div =
            ` <div class="container mt-3" id="kursitems"> 
                <p class="kursnummer">${kurslista[i].Kursnummer}</p>
                <p class="kursnummer">${kurslista[i].Kursensnamn}</p>
   
             <input id="b1" onclick="removeFromCart('` + cart[i] + `')"  type="button" class="btn btn-primary buyitems" value="Ta bort!"></input>
    </div>`
        div1.innerHTML += div
        
        console.log("Item in cart: " + cart[i]);

    }

}
 
    // ------------------------------------------------------------------------------------------------------------------------------>>>>>
    //     LÄGGA TILL KURSER I KURSLISTAN
function saveCourse() {
    var titel = document.getElementById("input1").value;
    var nummer = document.getElementById("input2").value;
    var lngd = document.getElementById("input3").value;
    var bes = document.getElementById("input4").value;
    var utb = document.getElementById("input5").value;
    
    alert("Ny kurs tillagd!" + titel + nummer + lngd + bes + utb);
}

        // document.getElementById("exampleModal").innerHTML += `
        //    <form id="form1">
        //     <input type="text" id="input1" class="form-control">
        //      <input type="text" id="input2" class="form-control" >
        //     <input type="text" id="input3" class="form-control" >
        //      <textarea id="input4" class="form-control" ></textarea>
        //      <textarea id="input5" class="form-control" ></textarea>
        // <input id="till" onclick="addCourses('` + kurslista2[i] + `')"  type="button" class="btn btn-primary buyitems" value="Lägg till"></input>
        // </form>  ` ;
    
    //  form1.innerHTML += div
    
    // console.log("Item in courslist: " + kurslista[i]);
    
    // SaveCourse();




    



   
        
    
   
     
    