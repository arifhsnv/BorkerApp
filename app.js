const firstNameInput = document.querySelector(".firstname");
const lastNameInput = document.querySelector(".lastname");
const salaryInput = document.querySelector(".salary");
const addButton = document.querySelector(".add");
const loadButton = document.querySelector(".load");
const bodyOfTable = document.querySelector(".bodyOfTable");
const list = document.querySelector(".list");
const emailInput = document.querySelector(".email-input")
const passwordInput = document.querySelector(".password-input")
const loginButton=document.querySelector(".login-button")
const loginContainer = document.querySelector(".login-password")
const informationContainer=document.querySelector(".container")
const validationMessage=document.querySelector(".validation")

const employeeData = []

const clearInput=function () {
  firstNameInput.value = ""
  lastNameInput.value = ""
  salaryInput.value=""
}







addButton.addEventListener("click",function (e) {
  e.preventDefault()
  const employee = {
    firstname: firstNameInput.value,
    lastname: lastNameInput.value,
    salary:salaryInput.value
  }
  employee.passWord=`arif2000`
  employee.fullName = "Hasanov Arif"
  console.log(employee);
  const checkboxInput = document.createElement("input")
  checkboxInput.type = "checkbox"
  checkboxInput.classList.add("checkbox")
  employee.checkbox = checkboxInput


  employeeData.push(employee)

  const liForEmployee = document.createElement("li")
  list.appendChild(liForEmployee)
  liForEmployee.appendChild(checkboxInput)
  const firstNameSpan = document.createElement("span")
  liForEmployee.appendChild(firstNameSpan)
  const lastNameSpan = document.createElement("span")
  liForEmployee.appendChild(lastNameSpan)
  const salarySpan = document.createElement("span")
  liForEmployee.appendChild(salarySpan)


  
  firstNameSpan.innerHTML += employee.firstname
  lastNameSpan.innerHTML += employee.lastname
  salarySpan.innerHTML += employee.salary

 

  clearInput()
})




loadButton.addEventListener("click", (e) => {
  e.preventDefault()
  bodyOfTable.innerHTML = ""


  for (const employee of employeeData) {
    const checkboxForTable=employee.checkbox
    if (checkboxForTable&&checkboxForTable.checked) {
      const tableInformation=`<tr>  
      <td>${employee.firstname}</td>
      <td>${employee.lastname}</td>
      <td>${employee.salary}</td>
    </tr>`
    bodyOfTable.innerHTML+=tableInformation
    }
  }
})

loginButton.addEventListener("click", (e) => {
  e.preventDefault()
  const enteredLogin = emailInput.value
  const enteredPassword = passwordInput.value
  
  emailInput.style.borderColor = ""
  passwordInput.style.borderColor=""
  validationMessage.innerHTML = ""
  if (enteredLogin === "Hasanov Arif" && enteredPassword === "arif2000") {
    loginContainer.style.opacity = 0
    informationContainer.style.opacity = 1
    loginContainer.style.zIndex = -2
    informationContainer.style.zIndex = 1
  } else if (enteredLogin !== "Hasanov Arif" && enteredPassword == "arif2000") {
    emailInput.style.borderColor = "red"
  
    validationMessage.innerHTML = `<p>Login is incorrect`
  } else if (enteredLogin == "Hasanov Arif" && enteredPassword !== "arif2000") {
    passwordInput.style.borderColor = "red"
    validationMessage.innerHTML = `<p>Password is incorrect</p>`
  }
  else { 
    emailInput.style.borderColor = "red"
    passwordInput.style.borderColor = "red"
    validationMessage.innerHTML=`<p>Login and password are incorrect`
  }
})