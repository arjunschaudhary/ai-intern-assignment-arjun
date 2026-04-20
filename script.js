const form = document.getElementById("studentForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const country = document.getElementById("country");
const university = document.getElementById("university");
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");
const successMessage = document.getElementById("successMessage");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const courseError = document.getElementById("courseError");
const universityError = document.getElementById("universityError");
const messageError = document.getElementById("messageError");

message.addEventListener("input", function () {
  charCount.textContent = message.value.length;
});

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  courseError.textContent = "";
  universityError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  if (fullName.value.trim() === "") {
    nameError.textContent = "Full Name is required";
    isValid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      emailError.textContent = "Enter a valid email";
      isValid = false;
    }
  }

  const selectedCourse = document.querySelector('input[name="courseLevel"]:checked');
  if (!selectedCourse) {
    courseError.textContent = "Please select a course level";
    isValid = false;
  }

  if (university.value.trim() === "") {
    universityError.textContent = "Preferred University is required";
    isValid = false;
  }

  if (message.value.length > 300) {
    messageError.textContent = "Message must be under 300 characters";
    isValid = false;
  }

  if (isValid) {
    const formData = {
      fullName: fullName.value.trim(),
      email: email.value.trim(),
      country: country.value,
      courseLevel: selectedCourse.value,
      preferredUniversity: university.value.trim(),
      message: message.value.trim()
    };

    console.log(JSON.stringify(formData, null, 2));

    try {
      const response = await fetch("https://arjunschaudhary.app.n8n.cloud/webhook-test/student-lead" , {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      successMessage.textContent = "Thank you! Your form has been submitted successfully.";
      form.reset();
      charCount.textContent = "0";
    } catch (error) {
      console.error("Webhook error:", error);
      successMessage.textContent = "Form is valid, but webhook submission failed.";
    }
  }
});