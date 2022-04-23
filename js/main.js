let elModalSubmit = document.querySelector('.inner-modal-form');
let elNameInput = document.querySelector('.input-name');
let elEmailInput = document.querySelector(".input-email");
let elPhoneInput = document.querySelector(".input-phone");
let elDepartmentInput = document.querySelector(".input-department");
let elCityInput = document.querySelector(".city-input");
let elTBody = document.querySelector(".hero__tbody");
let elArr = [];

elModalSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  let elName = elNameInput.value;
  let elEmail = elEmailInput.value;
  let elPhone = elPhoneInput.value;
  let elDepartment = elDepartmentInput.value;

  elArr.push({
    id: elArr.length,
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
  elCityInput.value = "";
});

function displayEveything(elArr){
  elTBody.innerHTML = "";
  elArr.forEach((item) => {
    let elTr = document.createElement("tr");
    elTr.innerHTML = `
      <td class="td-name">${item.name}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
      <td>${item.department}</td>
      <td>
        <div class="d-flex align-items-center">
          <button class="hero__pen" onclick="editIt(${item.id})" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit">
            <i class='bx bx-pencil'></i>
          </button>
          <button class="hero__close" onclick="deleteIt(${item.id})">
            <i class='bx bx-x'></i>
          </button>
        </div>
      </td>
    `;

    elTBody.appendChild(elTr);
  });
}

let elEditSubmit = document.querySelector('.inner-edit-form');
let elEditName = document.querySelector('.edit-name');
let elEditEmail = document.querySelector(".edit-email");
let elEditPhone = document.querySelector(".edit-phone");
let elEditDepartment = document.querySelector(".edit-department");

function editIt(elId) {
  elArr.forEach((item, index) => {
    if(index == elId){
      elEditName.value = item.name;
      elEditEmail.value = item.email;
      elEditPhone.value = item.phone;
      elEditDepartment.value = item.department;

      changeIt(index);
    }
  });
}

function changeIt(elId){
  let elCount = 1;

  elEditSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    if(elCount == 1){
      elArr[elId].name = elEditName.value;
      elArr[elId].email = elEditEmail.value;
      elArr[elId].phone = elEditPhone.value;
      elArr[elId].department = elEditDepartment.value;
  
      displayEveything(elArr);

      elCount++;
    }
  });
}

function deleteIt(elId){
  if(confirm ("Are you sure?")){
    elArr = elArr.filter((item) => {
      if(elId != item.id){
        return item;
      }
    })
  
    displayEveything(elArr);
  }
}

let elHeroInput = document.querySelector(".hero__searh-input-real");

elHeroInput.addEventListener("keyup", () => {
  let elText = elHeroInput.value.toLowerCase();
  
  let elTDNames = document.querySelectorAll(".td-name");

  elTDNames.forEach((item) => {
    let elCompare = item.firstChild.textContent;
    if(!elCompare.toLowerCase().includes(elText)){
      item.parentNode.style.display = "none";
    } else{
      item.parentNode.style.display = "";
    }
  })
});





























