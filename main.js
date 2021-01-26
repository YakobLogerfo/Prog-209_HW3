 // This function will run on form submit
 function myFunc() {
    // Getting filled-in values from form fields
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value
    let paymentRef = document.getElementById("payref").value;

    // If all of the fields are filled, process the filled in values
    if (name && city && paymentRef) {
      // Getting div element from <body> with id of myDiv
      let div = document.getElementById("myDiv");
      
      // Getting h1 element
      let h2 = document.getElementById("myH2");
      // Creating <ul> element
      let list = document.createElement("ul");  
      div.appendChild(list);                       // Append <ul> to <div>

      // Creating <li>
      let listItem = document.createElement("li");  
      listItem.innerHTML = name + " " + city + " " + " " + paymentRef + "<br>"
      list.appendChild(listItem);                    // Append <li> to <ul>
    } 
    else {
      // if any of the field is not filled, alert user
      alert("Please fill all of the fields before submitting the form");
    }
  }