const $btnPrint = document.querySelector("#btnPrint");
$btnPrint.addEventListener("click", () => {
  window.print();
});

let allPrice = document.querySelectorAll(".price");
let time = document.querySelector("#time");

var currentdate = new Date();
time.innerHTML =
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear() +
  " " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();

for (let i = 0; i < allPrice.length; i++) {
  allPrice[i].innerHTML = Number(allPrice[i].innerHTML).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
}

$(".quantity").on("keypress", function (event) {
  $(this).val(
    $(this)
      .val()
      .replace(/[^\d].+/, "")
  );

  if (event.which < 48 || event.which > 57) {
    event.preventDefault();
  }

  let num = $(this).text(); // Get the text content of the clicked td
  let numStr = num.toString(); // Convert number to string
  if (numStr == "0") {
    $(this).text(""); // Update the td with the modified number
  }
  
});

$(".quantity").on("keyup blur", function (event) {
    let num = $(this).text(); // Get the text content of the clicked td
    let numStr = num.toString(); // Convert number to string
    if (numStr == "") {
        $(this).text("0"); // Update the td with the modified number
}
  let allQuantity = document.querySelectorAll(".quantity");
  let total = 0;
  for (let i = 0; i < allPrice.length; i++) {
    total +=
      Number(allPrice[i].innerText.split("₫")[0]) *
      Number(allQuantity[i].innerText);
  }

  $("#total").text(
    (total * 1000).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })
  );
});
