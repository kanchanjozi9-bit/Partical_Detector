const r = require("raylib")
let scanner_at_end
function move_Detector(quardinate, Range_End, scaner_width, sccaners_at_end, Range_start) {

    scanner_at_end = sccaners_at_end

    if (!scanner_at_end) {
        if (quardinate < Range_End - scaner_width) {
            quardinate += 3
        } else scanner_at_end = true
    }
    if (scanner_at_end) {
        if (quardinate >= Range_start) {
            quardinate -= 3
        } else {
            scanner_at_end = false
        }
    }

    return quardinate

}

function check() {
    return scanner_at_end
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