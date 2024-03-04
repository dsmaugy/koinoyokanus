

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

function introMessage() {
    let overlayBox = $("<div></div>")
        .attr("id", "starting-msg-overlay");

    $("body").append(overlayBox);

    let title = "koinoyokan (us)";
    let def_one = "the feeling upon first meeting someone that you...";
    let def_two = "";

    animateTypeWrap(overlayBox, title, 40, () => {
        animateTypeWrap(overlayBox, def_one, 40);
    }, 1000);
}

function animateTypeWrap(selector, fullText, speed, callback=null, delay=100) {
    let textElem = $("<p></p>");
    selector.append(textElem);
    animateType(textElem, fullText, speed, callback, delay);
}

function animateType(textElem, fullText, speed, callback=null, delay=100) {
    if (textElem.text().length < fullText.length) {
        textElem.append(fullText[textElem.text().length]);
        setTimeout(animateType, speed, textElem, fullText, speed, callback, delay);
    } else if (callback) {
        setTimeout(callback, delay);
    }
}