function validateEmail(email) {
  var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (email === undefined) return false;
  if (email.match(mailformat)) {
    return true;
  }
  // alert("You have entered an invalid email address!")
  return false;
}

function validateName(name) {
  // var flag = true;
  if (name === undefined) return false;

  if (name.length > 150) return false;
  for (let i = 0; i < name.length; i++) {
    if (
      !(
        (name[i] >= "a" && name[i] <= "z") ||
        (name[i] >= "A" && name[i] <= "Z") ||
        name[i] === " "
      )
    )
      return false;
  }
  return true;
}

function validatePhone(phone) {
  if (phone === undefined) return false;
  if (phone.length !== 10) return false;
  for (let i = 0; i < phone.length; i++) {
    if (!(phone[i] >= "0" && phone[i] <= "9")) return false;
  }
  return true;
}
function validateAge(age) {
  if (age === undefined) return false;

  if (age.length > 2) return false;
  for (let i = 0; i < age.length; i++) {
    if (!(age[i] >= "0" && age[i] <= "9")) return false;
  }
  var ageInt = parseInt(age);
  return ageInt >= 18 && ageInt <= 65;
}
function validateCardLength(cardNo) {
  // if (cardNo.length == 16) return true;
  return true;
}
function validateCvvLength(cvvCode) {
  if (cvvCode.length != 3) return false;
  return true;
}
function validateUpi(upiId) {
  if (!upiId || upiId == "") {
    return false;
  }
  return true;
}

export {
  validateAge,
  validateEmail,
  validateName,
  validatePhone,
  validateCardLength,
  validateUpi,
  validateCvvLength,
  
};
