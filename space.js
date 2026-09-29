const r = require("raylib");

function updateVelocity(velocity, position, startRange, endRange) {
    return position > endRange || position < startRange ? -velocity : velocity;
}

function detecting_partical(
    quardinate,
    scaner_width,
    partical_quardinate,
    patrical_width,
    color,
) {
    //step 3
    return quardinate + scaner_width >= partical_quardinate &&
        quardinate <= partical_quardinate + patrical_width
        ? r.RED
        : r.WHITE;
}

module.exports = {
    updateVelocity,
    detecting_partical,
};
