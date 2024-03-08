
let executedFunctions = new Set();

function callOnce(func, ...args) {
    if (!executedFunctions.has(func)) {
        func(...args);
        executedFunctions.add(func);
    }
}

function animateTypeWrap(selector, fullText, speed, callback=null, delay=100, textClass="animate") {
    let textElem = $("<p></p>").addClass(textClass);
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

function animateJumpingPhoto(name, x, y, size) {
    let img = $("<img>");
    img.attr("src", name);
    img.css({
        'position': 'absolute',
        'top': innerHeight + 'px',  
        'left': x + 'px',   
        'width': size + "%",  
        'height': 'auto',
        'opacity': "80%"
    })

    $("body").append(img);

    img.animate({
        rotate: (random(1) < 0.5 ? "-" : "+") + "=240deg"
    }, {
        duration: 10000,
        queue: false,
        step: function(now, fx) {
            $(this).css("transform", "rotate(" + now + "deg)");
        }
    });

    img.animate({
        top: y + "px"
    }, {
        duration: 5000,
        queue: false,
        complete: function() {
            $(this).animate({
                top: (innerHeight*1.3) + "px"
            }, {
                duration: 5000,
                complete: function() {
                    $(this).remove();
                }
            });
        }
    });
}

function displayYLTLyrics() {
    let yltLyrics = [
        {'line': "", 'offset_s': 0}, // null starter
        {'line': "🎵🎵🎵", 'offset_s': 0.4},
        {'line': "Come along with me", 'offset_s': 13},
        {'line': "to my little corner of the world", 'offset_s': 16},
        {'line': "Dream a little dream", 'offset_s': 20.35},
        {'line': "in my little corner of the world", 'offset_s': 23.6},
        {'line': "You'll soon forget", 'offset_s': 27.3},
        {'line': "that there's any other place", 'offset_s': 30.3},
        {'line': "Tonight, my love,", 'offset_s': 34.6},
        {'line': "we'll share a sweet embrace", 'offset_s': 38},
        {'line': "And if you care to stay", 'offset_s': 43},
        {'line': "in my little corner of the world", 'offset_s': 46.5},
        {'line': "We could hide away", 'offset_s': 50.6},
        {'line': "in my little corner of the world", 'offset_s': 54},
        {'line': "I always knew", 'offset_s': 57.6},
        {'line': "that I'd find someone like (du)!", 'offset_s': 61},
        {'line': "So welcome to", 'offset_s': 65.5},
        {'line': "my little corner of the world", 'offset_s': 69.1},
        {'line': "🎵🎸🎵🎸", 'offset_s': 74.5},
        {'line': "🎵🎸🎵🎸", 'offset_s': 78.4},
        {'line': "🎵🎸🎵🎸", 'offset_s': 82.1},
        {'line': "🎵🎸🎵🎸", 'offset_s': 85.8},
        {'line': "🎵🎸🎵🎸", 'offset_s': 89.4},
        {'line': "🎵🎸🎵🎸", 'offset_s': 93.3},
        {'line': "🎵🎸🎵🎸", 'offset_s': 97.7},
        {'line': "🎵🎸🎵🎸", 'offset_s': 100.6},
        {'line': "And if you care to stay", 'offset_s': 104.4},
        {'line': "in our little corner of the world", 'offset_s': 108},
        {'line': "We could hide away", 'offset_s': 112.4},
        {'line': "in our little corner of the world", 'offset_s': 115.5},
        {'line': "We always knew", 'offset_s': 119.2},
        {'line': "that we'd find someone like you", 'offset_s': 122.5},
        {'line': "So welcome to", 'offset_s': 127.3},
        {'line': "our little corner of the world", 'offset_s': 130.5},
    ]

    let lyricBox = $("<p></p>").attr("id", "lyric-box");
    $("body").append(lyricBox);

    let lyricBoxBoundsPct = 0.2;
    function displayLine(index) {
        if (index < yltLyrics.length) {
            setTimeout(() => {
                lyricBox.text(yltLyrics[index].line);
                lyricBox.css({
                    "left": random(lyricBoxBoundsPct * innerWidth, (1-lyricBoxBoundsPct) * innerWidth) + "px",
                    "top": random(lyricBoxBoundsPct * innerHeight, (1-lyricBoxBoundsPct) * innerHeight) + "px"
                });
                displayLine(index+1);
            }, (yltLyrics[index].offset_s - yltLyrics[index-1].offset_s) * 1000);
        }
    }

    displayLine(1);
}