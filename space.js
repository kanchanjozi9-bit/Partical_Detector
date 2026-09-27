const r = require("raylib")
let scannerAtEnd
function move_Detector(quardinate, RangeEnd, scaneWidth, sccanersAtEnd, RangeStart) {

    scannerAtEnd = sccanersAtEnd

    if (!scannerAtEnd) {
        if (quardinate < RangeEnd - scaneWidth) {
            quardinate += 3
        } else scannerAtEnd = true
    }
    if (scannerAtEnd) {
        if (quardinate >= RangeStart) {
            quardinate -= 3
        } else {
            scannerAtEnd = false
        }
    }

    return quardinate

}

function check() {
    return scannerAtEnd
}

function detecting_partical(quardinate, scaner_width, partical_quardinate, patrical_width, color) {
    //step 3
    if (quardinate + scaner_width >= partical_quardinate && quardinate <= partical_quardinate + patrical_width) {
        color = r.SKYBLUE
    } else {
        color = r.WHITE
    }
    return color
}

module.exports = {
    move_Detector, check, detecting_partical,
};