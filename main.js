

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
                    callOnce(T_message1);
                });
            });
        });
    
    
    // animateTypeWrap(overlayBox, title, 230, () => {
    //     animateTypeWrap(overlayBox, message[0], 60, () => {
    //         animateTypeWrap(overlayBox, message[1], 60, () => {
    //             animateTypeWrap(overlayBox, message[2], 60, () => {
    //                 animateTypeWrap(overlayBox, message[3], 60, () => {
    //                     animateTypeWrap(overlayBox, message[4], 80, () => {
    //                         animateTypeWrap(overlayBox, message[5], 100, () => {
    //                             overlayBox.append(cont_button);
    //                             cont_button.fadeIn("slow");
    //                         }, 500, "end-def");
    //                     }, 3500);
    //                 }, 3000);
    //             }, 5000);
    //         }, 2500);
    //     }, 2500);
    // }, 2500, "title-def");

    // TODO: for debugging!
    overlayBox.append(cont_button);
    cont_button.fadeIn("slow");
}

function message1() {

    let overlayBox = $("#starting-msg-overlay");

    let message = [
        "I still remember when you first shared this phrase with me.",
        "And I thought it was such a *delightful* way to describe",
        "I could feel something there...",
        "it wasn't quite love yet,",
        "but I was feeling",
        "something I had never felt before"
    ];

    let cont_button = $("<button></button>")
        .addClass("continue-button")
        .text("continue")
        .click(() => {
            overlayBox.find("*:not(.title-def)").each(function() {
                $(this).fadeOut("slow", function() {
                    $(this).remove();
                    callOnce(T_message2);
                });
            });
        });

    // animateTypeWrap(overlayBox, message[0], 60, () => {
    //     animateTypeWrap(overlayBox, message[1], 60, () => {
    //         animateTypeWrap(overlayBox, message[2], 60, () => {
    //             animateTypeWrap(overlayBox, message[3], 60, () => {
    //                 animateTypeWrap(overlayBox, message[4], 80, () => {
    //                     animateTypeWrap(overlayBox, message[5], 100, () => {
    //                         overlayBox.append(cont_button);
    //                         cont_button.fadeIn("slow");
    //                     }, 1000);
    //                 }, 1000);
    //             }, 1000);
    //         }, 1000);
    //     }, 1000);
    // }, 1000);

    // TODO: for debugging!
    overlayBox.append(cont_button);
    cont_button.fadeIn("slow");

}

function message2() {
    let overlayBox = $("#starting-msg-overlay");

    let message = [
        "Even from the first time we chatted",
        "I could see the shared sense of humor",
        "i felt like there was some silliness",
        "and I could be silly back.",
        ".",
        ".",
        "then we traded phone numbers"
    ];

    let cont_button = $("<button></button>")
        .addClass("continue-button")
        .text("continue")
        .click(() => {
            overlayBox.find("*:not(.title-def)").each(function() {
                $(this).fadeOut("slow", function() {
                    $(this).remove();
                    callOnce(T_message3);
                });
            });
        });

    // animateTypeWrap(overlayBox, message[0], 60, () => {
    //     // show the bumble pic
    //     let img = $("<img>");
    //     img.attr("src", "resources/bumble.jpg");
    //     img.css({
    //         'display': 'none',
    //         'position': 'absolute',
    //         'top': '40px',  
    //         'left': '30%',   
    //         'width': '400px',  
    //         'height': 'auto',
    //         'opacity': '35%'   
    //     })
    //     overlayBox.append(img);
    //     img.fadeIn(1000);

    //     animateTypeWrap(overlayBox, message[1], 60, () => {
    //         animateTypeWrap(overlayBox, message[2], 60, () => {
    //             animateTypeWrap(overlayBox, message[3], 60, () => {
    //                 // print the spaces
    //                 animateTypeWrap(overlayBox, message[4], 200);
    //                 animateTypeWrap(overlayBox, message[5], 200);
    //                 animateTypeWrap(overlayBox, message[6], 60, () => {
    //                     overlayBox.append(cont_button);
    //                     cont_button.fadeIn("slow");
    //                 }, 1000)
    //             }, 1000);
    //         }, 1000);
    //     }, 1000);
    // }, 1000);



    // TODO: for debugging!
    overlayBox.append(cont_button);
    cont_button.fadeIn("slow");
}

function message3() {
    let overlayBox = $("#starting-msg-overlay");

    let message = [
        "hi hello is this darwin?",
        "yepp! hey du",
        "and about my fav lorde song... I think hard feelings/loveless",
        "love the \"this is my favorite tape\" transition lol",
        "omg good taste",
        "LMAO i always love doing spotify blend with my friends just to see their favs",
        "yeaah same I have like 10 blends LOL",
        "could make it 11 👀",
        "yeahhhh bet",
        "link please ✋"
    ];

    let cont_button = $("<button></button>")
        .addClass("continue-button")
        .text("continue")
        .click(() => {
            overlayBox.find("*:not(.title-def)").each(function() {
                $(this).fadeOut("slow", function() {
                    $(this).remove();
                    callOnce(T_message3);
                });
            });
        });

    animateTypeWrap(overlayBox, message[0], 60, () => {
        animateTypeWrap(overlayBox, message[1], 60, () => {
            animateTypeWrap(overlayBox, message[2], 60, () => {
                animateTypeWrap(overlayBox, message[3], 60, () => {
                    animateTypeWrap(overlayBox, message[4], 80, () => {
                        animateTypeWrap(overlayBox, message[5], 100, () => {
                            animateTypeWrap(overlayBox, message[6], 80, () => {
                                animateTypeWrap(overlayBox, message[7], 80, () => {
                                    animateTypeWrap(overlayBox, message[8], 80, () => {
                                        animateTypeWrap(overlayBox, message[9], 80, () => {
                                            overlayBox.append(cont_button);
                                            cont_button.fadeIn("slow");
                                        }, 1000, "text-convo du-text")
                                    }, 1000, "text-convo du-text")
                                }, 1000, "text-convo dar-text")
                            }, 1000, "text-convo dar-text")
                        }, 1000, "text-convo du-text");
                    }, 1000, "text-convo du-text");
                }, 1000, "text-convo dar-text");
            }, 1000, "text-convo dar-text");
        }, 1000, "text-convo dar-text");
    }, 1000, "text-convo du-text");


}


// TODO
// beginning of long texting night
// everything we've done
// want to make something permanent, a mark of love
// picture jumping?