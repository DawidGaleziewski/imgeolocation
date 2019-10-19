const AlertHandler = (function(){

    function displayError(message, UIoutput, errorDurationTime){
        const errorTemplate = document.createElement('p');
            errorTemplate.classList.add('error-popup');
            errorTemplate.innerText = `Error: ${message}`;

        UIoutput.prepend(errorTemplate);

        setTimeout(function(){
            UIoutput.removeChild(errorTemplate)
        }, errorDurationTime) 
    }

    return{
        displayError: displayError
    }
})();

AlertHandler.displayError('Not enough swagg!', document.querySelector('body'), 3000)

export default AlertHandler