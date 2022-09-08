// (function () {
//   const form = document.getElementById("contact-form");
//   const status = document.getElementById("form-status");

//   async function handleSubmit(event) {
//     event.preventDefault();
//     fetch(event.target.action, {
//       method: form.method,
//       body: JSON.stringify({
//         name: document.getElementById("input-name").value,
//         tel: document.querySelector("#input-number").value,
//         email: document.querySelector("#input-email").value,
//         tour: document.querySelector("#input-tour").value,
//         language: document.querySelector("#input-language").value,
//         date: document.querySelector("#input-date").value,
//       }),
//       headers: {
//         "Content-type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log("Thanks for your submission!");
//           status.innerText = "Thanks for your submission!";
//           form.reset();
//         } else {
//           response.json().then((data) => {
//             if (Object.hasOwn(data, "errors")) {
//               status.innerText = data["errors"]
//                 .map((error) => error["message"])
//                 .join(", ");
//             } else {
//               console.log("Oops! There was a problem submitting your form");
//               status.innerText =
//                 "Oops! There was a problem submitting your form";
//             }
//           });
//         }
//       })
//       .catch((error) => {
//         console.log("Oops! There was a problem submitting your form");
//         status.innerText = "Oops! There was a problem submitting your form";
//       });
//   }
//   form.addEventListener("submit", handleSubmit);
// })();
