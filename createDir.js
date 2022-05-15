const fs = require("fs");
for (let i = 15; i <= 31; i++) {
  fs.mkdir(`2022-5-${i}`, function () {});
}
