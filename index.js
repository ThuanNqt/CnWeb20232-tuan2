// generate year
let dropdownYear = document.getElementById("year");
const dateNow = new Date();
const yearNow = dateNow.getFullYear();
for (let year = yearNow; year >= 1905; year--) {
  let option = document.createElement("option");
  option.value = year;
  option.text = year;
  if (option.value === yearNow.toString()) option.selected = true;
  dropdownYear.add(option);
}
// end generate year

// check Leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

//validate
function isVietnamesePhoneNumber(number) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
function isEmailAddress(str) {
  return str.match(pattern);
}

function validateText(firstName, surname, mobileOfEmail, password) {
  if (firstName.trim() === "") {
    alert("Please enter a first name!");
    return;
  }
  if (surname.trim() === "") {
    alert("Please enter a Surname");
    return;
  }
  if (!isVietnamesePhoneNumber(mobileOfEmail)) {
    if (!isEmailAddress(mobileOfEmail)) {
      alert(`Mobile or Email invalid!`);
      return;
    }
  }
  if (password.trim().length < 5) {
    alert("Password must be longer than 5 characters");
    return;
  }
  return true;
}

//validate day, month, year
function isDayMonthYear(day, month, year) {
  if (year < 1900 || year > new Date().getFullYear()) {
    return false;
  }

  if (month < 1 || month > 12) {
    return false;
  }

  let daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return false;
  }

  return true;
}
function checkDayMonthYear(day, month, year) {
  if (!isDayMonthYear(day, month, year)) {
    alert("Invalid date!");
    return;
  }
  return true;
}

//event submit
const formSignUp = document.querySelector(".form-sign-up");
const buttonSubmit = formSignUp.querySelector("#submit");
if (formSignUp) {
  const firstName = formSignUp.querySelector("input[name='first-name']");
  const surname = formSignUp.querySelector("input[name='surname']");
  const mobileOfEmail = formSignUp.querySelector(
    "input[name='mobile-of-email']"
  );
  const password = formSignUp.querySelector("input[name='password']");

  const day = formSignUp.querySelector("select[name='day']");
  const month = formSignUp.querySelector("select[name='month']");
  const year = formSignUp.querySelector("select[name='year']");

  const inputFemale = formSignUp.querySelector("input[id='female']");
  const inputMale = formSignUp.querySelector("input[id='male']");
  const inputCustom = formSignUp.querySelector("input[id='bede']");

  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      validateText(
        firstName.value,
        surname.value,
        mobileOfEmail.value,
        password.value
      ) &&
      checkDayMonthYear(day.value, month.value, year.value)
    ) {
      alert("Submit !!!");
      formSignUp.submit();
    }
  });
}
