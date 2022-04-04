const submit = document.querySelector("form");
const inpute = document.querySelector("input");
const onep = document.querySelector(".onep");
const twop = document.querySelector(".twop");
const threep = document.querySelector(".threep");
const fourp = document.querySelector(".fourp");
const fivep = document.querySelector(".fivep");
submit.addEventListener("chalk", (e) => {
  e.preventDefault();
  onep.textContent = "Loading......";
  fetch("/weather?address=" + inpute.value).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        onep.textContent = data.error;
      } else {
        onep.textContent = data.forecastData[3];
        twop.textContent = data.forecastData[0];
        threep.textContent = data.forecastData[1];
        fourp.textContent = data.forecastData[2];
        fivep.textContent = data.forecastData[3];
      }
      console.log(data.forecastData[0]);
      console.log(data.location);
    });
  });
});
