function calculateAge() {
  let birthDate = new Date(document.getElementById("birthDate").value);
  let birthDateDay = birthDate.getDate();
  let birthDateMonth = birthDate.getMonth();
  let birthDateYear = birthDate.getFullYear();

  let todayDate = new Date();
  let todayDay = todayDate.getDate();
  let todayMonth = todayDate.getMonth();
  let todayYear = todayDate.getFullYear();

  let calculatedAge = 0;

  calculatedAge = todayYear - birthDateYear;

  if (todayMonth > birthDateMonth) {
    calculatedAge = todayYear - birthDateYear;
  } else if (todayMonth == birthDateMonth) {
    if (todayDay >= birthDateDay) {
      calculatedAge = todayYear - birthDateYear;
    } else {
      calculatedAge = todayYear - birthDateYear - 1;
    }
  } else {
    calculatedAge = todayYear - birthDateYear - 1;
  }

  let outputValue = calculatedAge;
  document.getElementById("calculatedAge").innerHTML =
    calculatedAge +
    " Years" +
    " " +
    Math.abs(calculatedMonth) +
    " " +
    "Months" +
    " " +
    Math.abs(calculatedDay) +
    " " +
    "Days";
}
