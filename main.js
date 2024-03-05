

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
    $('#start-intro').fadeOut(fadeTime, function() {
        $(this).remove();
    });
    setTimeout(() => {currState = STATE_RAIN}, fadeTime * 1/10);
}

function introMessage() {
    let overlayBox = $("<div></div>")
        .attr("id", "starting-msg-overlay");

    $("body").append(overlayBox);

    let title = "koinoyokan (us)";
    let message = [
        "\"Koi No Yokan\", is a Japanese phrase that does not mean love at first sight.",
        "It is closer to love growing eventually.",
        "It is a feeling that begins, when you meet someone whom you are going to fall in love with.",
        "You may not feel the love right away,",
        "but it is inevitable that...",
        "you will."
    ];

    let cont_button = $("<button></button>")
        .addClass("continue-button")
        .text("continue")
        .click(() => {
            overlayBox.find("*:not(.title-def)").each(function() {
                $(this).fadeOut("slow", function() {
                    $(this).remove();
                    callOnce(T_introMessage2);
                });
            });
        });

    animateTypeWrap(overlayBox, title, 230, () => {
        animateTypeWrap(overlayBox, message[0], 60, () => {
            animateTypeWrap(overlayBox, message[1], 60, () => {
                animateTypeWrap(overlayBox, message[2], 60, () => {
                    animateTypeWrap(overlayBox, message[3], 60, () => {
                        animateTypeWrap(overlayBox, message[4], 80, () => {
                            animateTypeWrap(overlayBox, message[5], 100, () => {
                                overlayBox.append(cont_button);
                                cont_button.fadeIn("slow");
                            }, 500, "end-def");
                        }, 3500);
                    }, 3000);
                }, 5000);
            }, 2500);
        }, 2500);
    }, 2500, "title-def");
}

function introMessage2() {

    let message = [
        "I still remember when you shared this phrase with me, Du.",
        "At the time, I thought it , "
    ];
}