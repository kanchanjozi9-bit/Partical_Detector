const r = require("raylib")
let check_fun
function move_Detector(quardinate, Range_End, scaner_width, check, Range_start) {

    check_fun = check
    if (check_fun === true) {
        if (quardinate < Range_End - scaner_width) {
            quardinate += 3
        } else check_fun = false
    }
    if (check_fun === false) {
        if (quardinate >= Range_start) {
            quardinate -= 3
        } else {
            check_fun = true
        }
    }

    return quardinate

}
function check() {
    return check_fun
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