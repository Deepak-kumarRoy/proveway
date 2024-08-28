function expandBox(boxId, radioBoxId, discountBoxId) {
    const allContentBoxes = document.querySelectorAll(".card__details-content-box");
    const allRadioBoxes = document.querySelectorAll(".card__details");
    const allDiscountBoxes = document.querySelectorAll(".card__offer");
  
    // Hide all content boxes and remove highlight from all radio boxes
    allContentBoxes.forEach((box) => {
      box.style.display = "none";
    });
  
    // Remove the active and clicked classes from all radio boxes
    allRadioBoxes.forEach((radioBox) => {
      radioBox.classList.remove("active-card__details");
    });
  
    // Show all discount boxes
    allDiscountBoxes.forEach((discountBox) => {
      discountBox.style.display = "flex";
    });
  
    // Show the selected content box
    const selectedBox = document.getElementById(boxId);
    if (selectedBox) {
      selectedBox.style.display = "block";
    }
  
    // Add the active and clicked class to the clicked radio box
    const clickedRadioBox = document.getElementById(radioBoxId);
    if (clickedRadioBox) {
      clickedRadioBox.classList.add("active-card__details");
    }
  
    // Hide the discount box associated with the clicked radio button
    const selectedDiscountBox = document.getElementById(discountBoxId);
    if (selectedDiscountBox) {
      selectedDiscountBox.style.display = "none";
    }
  }
  