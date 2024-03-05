
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