import XLSX from 'xlsx'

export function parseExecl(file) {
    return new Promise((resolve, reject) => {
        let reader = new window.FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: "binary"
            });
            let sheetName = workbook.SheetNames[0]
            let xlObj = XLSX.utils.sheet_to_row_object_array(
                workbook.Sheets[sheetName]
            );
            resolve(xlObj)
        };

        reader.readAsBinaryString(file);
    })
}
