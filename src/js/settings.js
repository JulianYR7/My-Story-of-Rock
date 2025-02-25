document.addEventListener("DOMContentLoaded", function() {
    let boolBtn1 = true;
    let boolBtn2 = false;

    const button1 = document.getElementById('btnDescriptionInit1')
    const button2 = document.getElementById('btnDescriptionInit2')
    const textOfDescription = document.getElementById("pOfDescription");

    function updateButtonsAndText(){

        if (boolBtn1 === true) {
            button1.classList.add('btnDescriptionInitActive')
            button2.classList.remove('btnDescriptionInitActive')
        }
        else if (boolBtn2 === true){
            button2.classList.add('btnDescriptionInitActive');
            button1.classList.remove('btnDescriptionInitActive');
        }

    }

    button1.addEventListener('click', () => {
        boolBtn1 = true;
        boolBtn2 = false;
        updateButtonsAndText();
    });
    button2.addEventListener('click', () => {
        boolBtn2 = true;
        boolBtn1 = false;
        updateButtonsAndText();
    });

    updateButtonsAndText();

});