function str2Download(csvContent, filename) {
    let compatible = "\uFEFF"; // bom头
    let blob = new window.Blob([compatible + csvContent], {
        type: "text/csv;charset=utf-8;"
    });
    if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        let link = document.createElement("a");

        if (link.download !== undefined) {
            // feature detection
            // Browsers that support HTML5 download attribute
            let url = window.URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}