// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.750.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var tchmi_demo;
        (function (tchmi_demo) {
            function SaveJson() {

                //%s%PLC1.GVL.myArray%/s%

                TcHmi.Symbol.readEx2('%s%PLC1.GVL.myArray%/s%', function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        // Handle result value... 
                        var value = data.value;
                        
                        var data = JSON.stringify(value, null, 2);
                        var file = new Blob([data]);
                        var url = URL.createObjectURL(file);
                        var element = document.createElement("a");
                        element.setAttribute('href', url);
                        element.setAttribute('download', "untitled.json");
                        element.style.display = 'none';
                        document.body.appendChild(element);
                        element.click();
                        document.body.removeChild(element);
                        setTimeout(function () { URL.revokeObjectURL(url); }, 1000 * 60);

                    } else {
                        // Handle error... 
                    }
                });



                

            }
            tchmi_demo.SaveJson = SaveJson;
        })(tchmi_demo = Functions.tchmi_demo || (Functions.tchmi_demo = {}));
        Functions.registerFunctionEx('SaveJson', 'TcHmi.Functions.tchmi_demo', tchmi_demo.SaveJson);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);