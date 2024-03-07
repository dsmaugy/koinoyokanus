
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
        {'line': "Come along with me to my little corner of the world", 'offset_s': 13},
        {'line': "Dream a little dream in my little corner of the world", 'offset_s': 13},
        {'line': "You'll soon forget that there's any other place", 'offset_s': 13},
        {'line': "Tonight, my love, we'll share a sweet embrace", 'offset_s': 13},
        {'line': "And if you care to stay in my little corner of the world", 'offset_s': 13},
        {'line': "We could hide away in my little corner of the world", 'offset_s': 13},
        {'line': "I always knew that I'd find someone like you", 'offset_s': 13},
        {'line': "So welcome to my little corner of the world", 'offset_s': 13},
        {'line': "Come along with me to my little corner of the world", 'offset_s': 13},
        {'line': "Come along with me to my little corner of the world", 'offset_s': 13},
        {'line': "Come along with me to my little corner of the world", 'offset_s': 13},
        {'line': "Come along with me to my little corner of the world", 'offset_s': 13}
    ]
}