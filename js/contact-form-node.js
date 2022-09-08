(function () {
  const form = document.getElementById("contact-form-nodejs");

  async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("contact-form-status");
    fetch(event.target.action, {
      method: form.method,
      body: JSON.stringify({
        name: document.querySelector("#input-name").value,
        tel: document.querySelector("#input-number").value,
        email: document.querySelector("#input-email").value,
        tour: document.querySelector("#input-tour").value,
        language: document.querySelector("#input-language").value,
        date: document.querySelector("#input-date").value,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML =
                "Oops! There was a problem submitting your form";
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
  }
  form.addEventListener("submit", handleSubmit);
})();
