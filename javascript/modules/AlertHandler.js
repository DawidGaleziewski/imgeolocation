const AlertHandler = (function(){
    function displayError(errors, UIoutput, errorDurationTime){
        //Convert errors to array of error messages
        const errorMessages= Object.keys(errors).filter(function(key){
            return errors[key].isCorrect === false
        }).map(function(key){
            return errors[key].description
        })

        errorMessages.forEach(function(errorMessage){
            const errorTemplate = document.createElement('div');
            errorTemplate.className = "card alert"
            const errorText = document.createElement('span');
                errorText.className="error-text"
                errorText.innerText = `Error: ${errorMessage}`;
            errorTemplate.appendChild(errorText);

            UIoutput.prepend(errorTemplate);
            setTimeout(function(){
                UIoutput.removeChild(errorTemplate)
            }, errorDurationTime) 
        }) 
    }

    return{
        displayError: displayError
    }
})();

export default AlertHandler