
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
    // TODO: transition to STATE_CORNER here

    let title = $("<p>transitioning to...</p>").attr("id", "outro-title");
    let subtitle = $("<p>a place for just dar and du</p>").attr("id", "outro-subtitle");
    let desc = $("<p>(you can answer \"mr. fresh\" at the beginning to skip to this section)</p>").attr("id", "outro-desc");

    let overlayBox = $("#starting-msg-overlay");
}