const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();

  let myCard = document.getElementsByClassName("menColContentContainer");

  let cardItems = myCard.getElementsByClassName("menColContent");

  for (let i = 0; i < menColContent.length; i++) {
    let tr = cardItems[i].getElementsByClassName("tr");

    if (tr) {
      let textValue = tr.textContent || tr.innerHTML;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        cardItems[i].style.display = "";
      } else {
        cardItems[i].style.display = "none";
      }
    }
  }
};
