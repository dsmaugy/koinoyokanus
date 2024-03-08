
function T_introMessage() {
    setTimeout(introMessage, 200);
}

function T_message1() {
    setTimeout(message1, 200);
}

function T_message2() {
    setTimeout(message2, 200);
}

function T_message3() {
    setTimeout(message3, 200);
}

function T_message4() {
    setTimeout(message4, 200);
}

function T_message5() {
    setTimeout(message5, 200);
}

function T_message6() {
    setTimeout(message6, 200);
}

function T_outro() {

    let title = $("<p>transitioning to...</p>").addClass("outro-title outro-text");
    let subtitle = $("<p>a place for just dar and du</p>").addClass("outro-subtitle outro-text");
    let subtitle2 = $("<p>feel free to move and click your mouse</p>").addClass("outro-desc outro-text");
    let desc = $("<p>(you can answer \"mr. fresh\" at the beginning to skip to this section)</p>").addClass("outro-desc outro-text");

    let overlayBox = $("#starting-msg-overlay");
    overlayBox.append(title).append(subtitle).append(subtitle2).append(desc);

    title.fadeIn("slow", () => {
        setTimeout(() => {
            subtitle.fadeIn("slow", () => {
                setTimeout(() => {
                    subtitle2.fadeIn("slow", () => {
                        setTimeout(() => {
                            desc.fadeIn("slow", () => {
                                setTimeout(() => {
                                    let blackBox = $("<div></div>").css({
                                        'position': 'fixed',
                                        'display': 'none',
                                        'top': 0,
                                        'left': 0,
                                        'width': '100%',
                                        'height': '100%',
                                        'background-color': 'rgba(0, 0, 0, 1)',
                                    });

                                    $("body").append(blackBox);
                                    blackBox.fadeIn("slow", () => {
                                        overlayBox.remove();
                                        setTimeout(() => {
                                            transitionState(currState, STATE_CORNER, 0);
                                            blackBox.fadeOut(800, () => {
                                                blackBox.remove();
                                            }) 
                                        }, 1500);
                                    })
                                }, 3500);
                            });
                        }, 2400);
                    });
                }, 1300);
            });
        }, 1000);
    });
}