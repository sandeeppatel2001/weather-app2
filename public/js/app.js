const submit = document.querySelector("form");
const inpute = document.querySelector("input");
const onep = document.querySelector(".onep");
const twop = document.querySelector(".twop");
submit.addEventListener("chack", (e) => {
  e.preventDefault();
  onep.textContent = "Loading......";
  fetch("/weather?address=" + inpute.value).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        onep.textContent = data.error;
      } else {
        onep.textContent = data.location;
        twop.textContent = data.forecastData[0];
      }
      console.log(data.forecastData[0]);
      console.log(data.location);
    });
  });
});
