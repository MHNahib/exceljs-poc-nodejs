const fs = require("fs");
const ExcelJS = require("exceljs");
// stream
const stream = fs.createReadStream("./test.xlsx");
const workbook = new ExcelJS.Workbook();

(async () => {
  stream.on("data", async (data) => {
    console.log(`==================`);
    console.log("data", data);
    console.log(`==================`);
    const details = await workbook.xlsx.load(data);

    console.log(`==================`);

    details._worksheets.forEach((item) => {
      console.log("SHEET NAME: ", item.name);
    });
    console.log(`==================`);
  });
  stream.on("error", (err) => console.log("err", err));
})();
