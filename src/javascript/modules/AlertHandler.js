/**
 * Handling alert display in case of failed validation
 * @module AlertHandler
 */

const AlertHandler = (() => {
  /**
   * Updates UI with occured errors
   * @param {{hasGPSData: {isCorrect: boolean, description: string}}} errors - Object passed from ValidateHandler module. Contains information on potential errors.
   * @param {Element} UIoutput - Dom element to output the warnings to.
   * @param {Number} errorDurationTime - Error display duration in ms
   * @returns void
   */
  function displayError(errors, UIoutput, errorDurationTime) {
    /**
     * Content of the error messeges
     * @type {Array<string>}
     */
    const errorMessages = Object.keys(errors)
      // Finds keys for errors that did occure
      .filter(key => {
        return errors[key].isCorrect === false;
      })
      // Returns array of descriptions from array of objects
      .map(key => {
        return errors[key].description;
      });

    // Creates a DOM element for each error in array and outputs it to the UI
    errorMessages.forEach(errorMessage => {
      /**
       * DOM element with error message that will be injected to HTML
       * @type {Element}
       */
      const errorTemplate = document.createElement('div');
      errorTemplate.className = 'card alert';
      const errorText = document.createElement('span');
      errorText.className = 'error-text';
      errorText.innerText = `Error: ${errorMessage}`;
      errorTemplate.appendChild(errorText);

      UIoutput.prepend(errorTemplate);
      setTimeout(() => {
        UIoutput.removeChild(errorTemplate);
      }, errorDurationTime);
    });
  }

  return {
    displayError
  };
})();

export default AlertHandler;
