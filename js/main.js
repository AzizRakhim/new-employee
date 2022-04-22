let elModalSubmit = document.querySelector('.modal-submit-btn');
let elNameInput = document.querySelector('.input-name');
let elEmailInput = document.querySelector(".input-email");
let elPhoneInput = document.querySelector(".input-phone");
let elDepartmentInput = document.querySelector(".input-department");
let elTBody = document.querySelector(".hero__tbody");
let elArr = [];

elModalSubmit.addEventListener("click", () => {
  let elName = elNameInput.value;
  let elEmail = elEmailInput.value;
  let elPhone = elPhoneInput.value;
  let elDepartment = elDepartmentInput.value;

  elArr.push({
    id: elArr.length + 1,
    name: elName,
    email: elEmail,
    phone: elPhone,
    department: elDepartment
  });

  displayEveything(elArr);

  elNameInput.value = "";
  elEmailInput.value = "";
  elPhoneInput.value = "";
  elDepartmentInput.value = "";
});

function displayEveything(elArr){
  elTBody.innerHTML = "";
  elArr.forEach((item) => {
    let elTr = document.createElement("tr");
    elTr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
      <td>${item.department}</td>
    `;

    elTBody.appendChild(elTr);
  });
}































// let elHeroBtn = document.querySelector(".hero__btn");
// let elTable = document.querySelector(".table");

// elHeroBtn.addEventListener("click", () => {
//   let elTbody = document.createElement("tbody");
//   elTbody.innerHTML = `
//   <tr>
//     <th scope="row">1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>
//   <tr>
//     <th scope="row">2</th>
//     <td>Jacob</td>
//     <td>Thornton</td>
//     <td>@fat</td>
//   </tr>
//   <tr>
//     <th scope="row">3</th>
//     <td colspan="2">Larry the Bird</td>
//     <td>@twitter</td>
//   </tr>
//   `;

//   elTable.appendChild(elTbody);
// });