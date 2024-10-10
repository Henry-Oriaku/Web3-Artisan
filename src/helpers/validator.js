function validateForm(callbackElementId, parentElementSelector = '') {
  let errors = {}; // Define the type explicitly
  ["select", "textarea", "input"].forEach((selector) => {
    // Use forEach instead of map for iteration
    document.querySelectorAll(`${parentElementSelector} ${selector}`.trim()).forEach((element) => {
      const error = validateInput(element);
      if (error) {
        errors[(element).name] = error;
      } else {
        delete errors[(element).name];
      }

      handleErrorDisplay(error, element);
    });
  });
  if (callbackElementId) {
    let callbackElement = document.getElementById(callbackElementId);

    if (callbackElement) {
      callbackElement.toggleAttribute("disabled", Object.keys(errors).length > 0);
    }
  }
  return errors;
}

/**
 * Validate the input element.
 * @param {Element} element - The input element to validate.
 * @returns {string | null} - The validation error message or null if valid.
 */
function validateInput(element) {
  if (element.validity && !(element).validity.valid) {
    return (element).validationMessage;
  }
  return null;
}

/**
 * Handle the display of error messages.
 * @param {string | null} error - The error message to display or null if no error.
 * @param {Element} element - The input element related to the error.
 */
function handleErrorDisplay(error, element) {

  let errorElement = element.parentElement?.querySelector(".text-red-700.text-sm.py-2");
  if (error) {
    element.classList.add("border-red-700");

    if (!errorElement) {
      errorElement = document.createElement("div");
      errorElement.classList.add("text-red-700", "text-sm", "py-2");
      element.parentElement?.appendChild(errorElement);
    }
    if (errorElement) errorElement.textContent = error;
  } else {
    element.classList.remove("border-red-700");
    errorElement?.remove();
  }
}


export { validateForm };
