

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
    setTimeout(() => {currState = STATE_CORNER}, fadeTime * 1/10);
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
                    callOnce(T_message4);
                });
            });
        });

    // animateTypeWrap(overlayBox, message[0], 60, () => {
    //     animateTypeWrap(overlayBox, message[1], 60, () => {
    //         animateTypeWrap(overlayBox, message[2], 60, () => {
    //             animateTypeWrap(overlayBox, message[3], 60, () => {
    //                 animateTypeWrap(overlayBox, message[4], 80, () => {
    //                     animateTypeWrap(overlayBox, message[5], 100, () => {
    //                         animateTypeWrap(overlayBox, message[6], 80, () => {
    //                             animateTypeWrap(overlayBox, message[7], 80, () => {
    //                                 animateTypeWrap(overlayBox, message[8], 80, () => {
    //                                     animateTypeWrap(overlayBox, message[9], 80, () => {
    //                                         overlayBox.append(cont_button);
    //                                         cont_button.fadeIn("slow");
    //                                     }, 1000, "text-convo du-text")
    //                                 }, 1000, "text-convo du-text")
    //                             }, 1000, "text-convo dar-text")
    //                         }, 1000, "text-convo dar-text")
    //                     }, 1000, "text-convo du-text");
    //                 }, 1000, "text-convo du-text");
    //             }, 1000, "text-convo dar-text");
    //         }, 1000, "text-convo dar-text");
    //     }, 1000, "text-convo dar-text");
    // }, 1000, "text-convo du-text");

    // TODO: for debugging!
    overlayBox.append(cont_button);
    cont_button.fadeIn("slow");

}

function message4() {

    let overlayBox = $("#starting-msg-overlay");

    let message = [
        "the 3+ hour conversation we had that one night",
        "where we talked about",
        "osu",
        "three body",
        "satoshi kon",
        "hanoi architecture",
        "genshin",
        "knockoff viet club penguin",
        "i felt it there",
        "koi no yokan"
    ];

    let cont_button = $("<button></button>")
        .addClass("continue-button")
        .text("continue")
        .click(() => {
            overlayBox.find("*:not(.title-def)").each(function() {
                $(this).fadeOut("slow", function() {
                    $(this).remove();
                    callOnce(T_message5);
                });
            });
        });

    // animateTypeWrap(overlayBox, message[0], 60, () => {
    //     animateTypeWrap(overlayBox, message[1], 60, () => {
    //         animateTypeWrap(overlayBox, message[2], 60, () => {
    //             animateTypeWrap(overlayBox, message[3], 60, () => {
    //                 animateTypeWrap(overlayBox, message[4], 80, () => {
    //                     animateTypeWrap(overlayBox, message[5], 100, () => {
    //                         animateTypeWrap(overlayBox, message[6], 100, () => {
    //                             animateTypeWrap(overlayBox, message[7], 100, () => {
    //                                 animateTypeWrap(overlayBox, message[8], 100, () => {
    //                                     animateTypeWrap(overlayBox, message[9], 100, () => {
    //                                         overlayBox.append(cont_button);
    //                                         cont_button.fadeIn("slow");
    //                                     }, 1000);
    //                                 }, 1000);
    //                             }, 1000);
    //                         }, 1000);
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

function message5() {

    let overlayBox = $("#starting-msg-overlay");

    let message = [
        "i cant believe i have been dating you for one year",
        "youve really changed my life du",
        "by enriching, loving, being, and so much more...",
        "ive had plans on making something like this for a while",
        "i remember during lunch time at rivian",
        "eric, krystal, and some others were like",
        "\"have you thought about what you want to do for your 1st anniversary?\"",
        "and i responded, \"I want to make a website\"",
    ];

    let cont_button = $("<button></button>")
        .addClass("continue-button")
        .text("continue")
        .click(() => {
            overlayBox.find("*:not(.title-def)").each(function() {
                $(this).fadeOut("slow", function() {
                    $(this).remove();
                    callOnce(T_message6);
                });
            });
        });

    // animateTypeWrap(overlayBox, message[0], 60, () => {
    //     animateTypeWrap(overlayBox, message[1], 60, () => {
    //         animateTypeWrap(overlayBox, message[2], 60, () => {
    //             animateTypeWrap(overlayBox, message[3], 60, () => {
    //                 animateTypeWrap(overlayBox, message[4], 80, () => {
    //                     animateTypeWrap(overlayBox, message[5], 100, () => {
    //                         animateTypeWrap(overlayBox, message[6], 100, () => {
    //                             animateTypeWrap(overlayBox, message[7], 100, () => {
    //                                 overlayBox.append(cont_button);
    //                                 cont_button.fadeIn("slow");
    //                             }, 1000);
    //                         }, 1000);
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

function message6() {

    let overlayBox = $("#starting-msg-overlay");

    let message = [
        "this is my love letter",
        "digitized in a way that is public to anyone",
        "but made only for you",
        "i hope you can find in this a place of solace",
        "a digital rest stop in times of stress",
        "i can't wait to keep living life with you",
        "if you're reading this for the first time",
        "happy anniversary du",
        "if you're coming back to this in the future",
        "remember that i love you",
        "i will always try my best",
        "to make sure you know that"
    ];

    let cont_button = $("<button></button>")
        .addClass("continue-button")
        .text("continue")
        .click(() => {
            overlayBox.find("*:not(.title-def)").each(function() {
                $(this).fadeOut("slow", function() {
                    $(this).remove();
                    callOnce(T_message2);
                    overlayBox.fadeOut("slow", () => {
                        overlayBox.remove();
                    });
                });
            });
        });

    // animateTypeWrap(overlayBox, message[0], 60, () => {
    //     animateTypeWrap(overlayBox, message[1], 60, () => {
    //         animateTypeWrap(overlayBox, message[2], 60, () => {
    //             animateTypeWrap(overlayBox, message[3], 60, () => {
    //                 animateTypeWrap(overlayBox, message[4], 80, () => {
    //                     animateTypeWrap(overlayBox, message[5], 100, () => {
    //                         animateTypeWrap(overlayBox, message[6], 100, () => {
    //                             animateTypeWrap(overlayBox, message[7], 100, () => {
    //                                 animateTypeWrap(overlayBox, message[8], 100, () => {
    //                                     animateTypeWrap(overlayBox, message[9], 100, () => {
    //                                         animateTypeWrap(overlayBox, message[10], 100, () => {
    //                                             animateTypeWrap(overlayBox, message[11], 100, () => {
    //                                                 overlayBox.append(cont_button);
    //                                                 cont_button.fadeIn("slow");
    //                                             }, 1000);
    //                                         }, 1000);
    //                                     }, 1000);
    //                                 }, 1000);
    //                             }, 1000);
    //                         }, 1000);
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



