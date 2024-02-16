

$(document).ready(() => {
    $("#starting-input").on("input", function() {
        let inputStr = $(this).val();
        
        if (inputStr.toLowerCase() == "bingus") {
            $(this).prop('disabled', true);
            setTimeout(() => {start()}, 1000);
        }
    });
});

function start() {
    let fadeTime = 1500;
    $('#start-intro').fadeOut(fadeTime);
    setTimeout(() => {currState = STATE_RAIN}, fadeTime * 1/10);
}