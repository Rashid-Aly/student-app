// const form = document.getElementById("myForm");
// const table = document.querySelector("table tbody");
// document.getElementById("ObtainMarks").value = "";

// let rowNum = 1;

// // document.addEventListener('DOMContentLoaded', loadTableData)

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const name = form.elements.name.value;
//   const fatherName = form.elements.fatherName.value;
//   const classValue = form.elements.class.value;
//   const age = form.elements.age.value;
//   const gender = form.elements.gender.value;
//   const totalMarks = form.elements.totalMarks.value;
//   const obtainMarks = form.elements.ObtainMarks.value;

//   // Check if data already exists in table
//   const rows = table.rows;
//   for (let i = 0; i < rows.length; i++) {
//     const cells = rows[i].cells;
//     if (
//       cells[1].innerHTML === name &&
//       cells[2].innerHTML === fatherName &&
//       cells[3].innerHTML === classValue &&
//       cells[4].innerHTML === age &&
//       cells[5].innerHTML === gender &&
//       cells[6].innerHTML === totalMarks &&
//       cells[7].innerHTML === obtainMarks
//     ) {
//       alert("Data already exists in table!");
//       return;
//     }
//   }


//   const userData = {
//     username: name,
//     FathersName: fatherName,
//     Age: age,
//     Gender: gender,
//     className: name,
//     result: obtainMarks >= 50 ? "Pass" : "Fail",
//   };
//   const result = obtainMarks >= 50 ? "Pass" : "Fail";

//   const row = table.insertRow();
//   const numberCell = row.insertCell(0);
//   const nameCell = row.insertCell(1);
//   const fatherNameCell = row.insertCell(2);
//   const classCell = row.insertCell(3);
//   const ageCell = row.insertCell(4);
//   const genderCell = row.insertCell(5);
//   const totalMarksCell = row.insertCell(6);
//   const obtainMarksCell = row.insertCell(7);
//   const resultCell = row.insertCell(8);
//   const actionsCell = row.insertCell(9);

//   // new cell for edit and delete buttons

//   // Set cell values
//   numberCell.innerHTML = rowNum;
//   nameCell.innerHTML = name;
//   fatherNameCell.innerHTML = fatherName;
//   classCell.innerHTML = classValue;
//   ageCell.innerHTML = age;
//   genderCell.innerHTML = gender;
//   totalMarksCell.innerHTML = totalMarks;
//   obtainMarksCell.innerHTML = obtainMarks;
//   resultCell.innerHTML = result;

//   // // Increment row number for next row
//   rowNum++;

//   // Add edit button to the action cell

//   editButton = document.createElement("button");
//   editButton.innerHTML = "Edit";

//   editButton.classList.add("edit-button");
//   actionsCell.appendChild(editButton);

//   editButton.addEventListener("click", function () {

//     const cells = row.getElementsByTagName("td");
//     const name = cells[1].innerHTML;
//     const fatherName = cells[2].innerHTML;
//     const classValue = cells[3].innerHTML;
//     const age = cells[4].innerHTML;
//     const gender = cells[5].innerHTML;
//     const totalMarks = cells[6].innerHTML;
//     const obtainMarksCell = cells[7].innerHTML;
//     // const resultCell = cells[8].innerHTML;
//     // const actionsCell = cells[9].innerHTML;

//     //   //   // Set form values to row data

//     form.elements.name.value = name;
//     form.elements.fatherName.value = fatherName;
//     form.elements.class.value = classValue;
//     form.elements.age.value = age;
//     form.elements.gender.value = gender;
//     form.elements.totalMarks.value = totalMarks;
//     form.elements.ObtainMarks.value = obtainMarks;

//     // saveTableData();

//   });

//   // delete data start

//   const deleteButton = document.createElement("button");
//   deleteButton.innerHTML = "Delete";
//   deleteButton.classList.add("delete-button");
//   actionsCell.appendChild(deleteButton);

//   deleteButton.addEventListener("click", function () {
//     const confirmDelete = confirm("Are you sure you want to delete this row?");
//     if (confirmDelete === true) {
//       row.remove();
//     }

//     // saveTableData();

//   });


//   // delete data end


//   //  here is start popup form

//   // When the user clicks on div, open the popup

//   //  here is start popup form



//   //   // search filter start

//   const searchInput = document.getElementById("search");
//   searchInput.addEventListener("input", function () {
//     const searchText = this.value.toLowerCase();
//     const rows = table.rows;

//     for (let i = 0; i < rows.length; i++) {
//       const nameCell = rows[i].cells[1];
//       const name = nameCell.innerHTML.toLowerCase();

//       if (name.includes(searchText)) {
//         rows[i].style.display = "";
//       } else {
//         rows[i].style.display = "none";
//       }
//     }
//   });


//   console.log(userData);
//   form.reset();

// });


// function loadTableData() {
//   const userdata = localStorage.getItem('userdata')
//   if (userdata) {
//     table.innerHTML = userdata;
//   }
// }

// function saveTableData() {
//   const data = table.innerHTML;
//   localStorage.setItem('userdata', data)
// }





const form = document.getElementById("myForm");
const table = document.querySelector("table tbody");
document.getElementById("ObtainMarks").value = "";

let rowNum = 1;


form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.elements.name.value;
  const fatherName = form.elements.fatherName.value;
  const classValue = form.elements.class.value;
  const age = form.elements.age.value;
  const gender = form.elements.gender.value;
  const totalMarks = form.elements.totalMarks.value;
  const obtainMarks = form.elements.ObtainMarks.value;

  // Check if data already exists in table
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    if (
      cells[1].innerHTML === name &&
      cells[2].innerHTML === fatherName &&
      cells[3].innerHTML === classValue &&
      cells[4].innerHTML === age &&
      cells[5].innerHTML === gender &&
      cells[6].innerHTML === totalMarks &&
      cells[7].innerHTML === obtainMarks
    ) {
      alert("Data already exists in table!");
      return;
    }
  }

  const userData = {
    username: name,
    FathersName: fatherName,
    Age: age,
    Gender: gender,
    className: name,
    result: obtainMarks >= 50 ? "Pass" : "Fail",
  };
  // })
  const result = obtainMarks >= 50 ? "Pass" : "Fail";

  const row = table.insertRow();
  const numberCell = row.insertCell(0);
  const nameCell = row.insertCell(1);
  const fatherNameCell = row.insertCell(2);
  const classCell = row.insertCell(3);
  const ageCell = row.insertCell(4);
  const genderCell = row.insertCell(5);
  const totalMarksCell = row.insertCell(6);
  const obtainMarksCell = row.insertCell(7);
  const resultCell = row.insertCell(8);
  const actionsCell = row.insertCell(9);

  // new cell for edit and delete buttons

  // Set cell values
  numberCell.innerHTML = rowNum;
  nameCell.innerHTML = name;
  fatherNameCell.innerHTML = fatherName;
  classCell.innerHTML = classValue;
  ageCell.innerHTML = age;
  genderCell.innerHTML = gender;
  totalMarksCell.innerHTML = totalMarks;
  obtainMarksCell.innerHTML = obtainMarks;
  resultCell.innerHTML = result;

  // // Increment row number for next row
  rowNum++;

  // Add edit button to the action cell

  editButton = document.createElement("button");
  editButton.innerHTML = "Edit";

  editButton.classList.add("edit-button");
  actionsCell.appendChild(editButton);

  editButton.addEventListener("click", function () {

    const cells = row.getElementsByTagName("td");
    const name = cells[1].innerHTML;
    const fatherName = cells[2].innerHTML;
    const classValue = cells[3].innerHTML;
    const age = cells[4].innerHTML;
    const gender = cells[5].innerHTML;
    const totalMarks = cells[6].innerHTML;
    const obtainMarksCell = cells[7].innerHTML;
    // const resultCell = cells[8].innerHTML;
    // const actionsCell = cells[9].innerHTML;

    //   //   // Set form values to row data

    form.elements.name.value = name;
    form.elements.fatherName.value = fatherName;
    form.elements.class.value = classValue;
    form.elements.age.value = age;
    form.elements.gender.value = gender;
    form.elements.totalMarks.value = totalMarks;
    form.elements.ObtainMarks.value = obtainMarks;


  });

  // delete data start

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  actionsCell.appendChild(deleteButton);



  deleteButton.addEventListener("click", function () {
    const confirmDelete = confirm("Are you sure you want to delete this row?");
    if (confirmDelete === true) {
      row.remove();
    }
  });





  // delete data end


  //  here is start popup form

  // // Get the edit button element
  // const editButton = document.querySelector('button');
  // // Get the edit button element
  // // const editButton = document.createElement("button");
  // editButton.innerHTML = "Edit";
  // editButton.classList.add("edit-button");
  // actionsCell.appendChild(editButton);

  // // Get the popup container and form elements
  // const popupContainer = document.getElementById('popup-container');
  // const popupForm = document.getElementById('popup-form');

  // // Function to open the popup
  // function openPopup() {
  //   popupContainer.style.display = 'block';
  //   // setTimeout(closePopup, 500); // Automatically close after 0.5 seconds
  // }

  // // Function to close the popup
  // function closePopup() {
  //   popupContainer.style.display = 'none';
  // }

  // // Add click event listener to the edit button
  // editButton.addEventListener('click', openPopup);

  // // Add click event listener to the cancel button
  // document.getElementById('cancel-btn').addEventListener('click', closePopup);

  // // Add submit event listener to the form (you can modify this to handle form submission)
  // popupForm.addEventListener('submit', function (event) {
  //   event.preventDefault(); // Prevent form submission for this example
  //   closePopup();
  // });





  //  here is start popup form



  //   // search filter start

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
      const nameCell = rows[i].cells[1];
      const name = nameCell.innerHTML.toLowerCase();

      if (name.includes(searchText)) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  });


  console.log(userData);
  form.reset();

});


// function loadTableData() {
//   const userdata = localStorage.getItem('userdata')
//   if (userdata) {
//     table.innerHTML = userdata;
//   }
// }

// function saveTableData() {
//   const data = table.innerHTML;
//   localStorage.setItem('userdata', data)
// }


// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(myFunction)
// console.log(newArr, "muzamil")


// function myFunction(num) {
//   return num * 10;
// }


// const persons = [{
//     firstname: "Malcom",
//     lastname: "Reynolds"
//   },
//   {
//     firstname: "Kaylee",
//     lastname: "Frye"
//   },
//   {
//     firstname: "Jayne",
//     lastname: "Cobb"
//   }
// ];

// persons.map(getFullName);
// console.log(persons)

// function getFullName(item) {
//   return [item.firstname, item.lastname];
// }