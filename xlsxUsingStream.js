const ExcelJS = require("exceljs");

(async () => {
  const workbookReader = new ExcelJS.stream.xlsx.WorkbookReader("./test.xlsx");
  for await (const worksheetReader of workbookReader) {
    for await (const row of worksheetReader) {
      console.log(`==================`);
      console.log("row - data -: - ", row);
      console.log(`==================`);
    }
  }
})();
