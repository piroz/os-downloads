const assert = require("assert");
const fs = require("fs");
const d = require("./");

describe("os-downloads", function () {
    describe("downlaods", function () {
        it("directory exists", () => {
            assert.equal(true, fs.existsSync(d()));
        });
    });
});