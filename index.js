const path = require('path');
const os = require("os");

function downlaods() {
    return path.join(os.homedir(), "Downloads");
}

module.exports = downlaods;