# Simple example of loading a Json file to a PLC array / structure

## Disclaimer
This is a personal guide not a peer reviewed journal or a sponsored publication. We make
no representations as to accuracy, completeness, correctness, suitability, or validity of any
information and will not be liable for any errors, omissions, or delays in this information or any
losses injuries, or damages arising from its display or use. All information is provided on an as
is basis. It is the reader’s responsibility to verify their own facts.

The views and opinions expressed in this guide are those of the authors and do not
necessarily reflect the official policy or position of any other agency, organization, employer or
company. Assumptions made in the analysis are not reflective of the position of any entity
other than the author(s) and, since we are critically thinking human beings, these views are
always subject to change, revision, and rethinking at any time. Please do not hold us to them
in perpetuity.

## Overview 
This is a simple example showing how to load client side json files in to a PLC structure.  

## Video Tutorial
There is a free coding byte video tutorial on this code which can be found [here](https://beckhoff-au.teachable.com/courses/coding-bytes-twincat-hmi/lectures/35610771)

## Getting Started
Activate and run the PLC project.  Open Main.view in liveview, swap live view to a real browser (as normal live view does not support loading) and load the example.json file. 

## Code Snippets
The following section of code is the mechanisim behind the loading and writing. 

```javascript
function LoadJson() {

    if (typeof FileReader === 'undefined') {
        console.log('File loading not supported by your browser');
        return;
    }

    var inputElement = document.createElement('input');

    inputElement.type = 'file';
    inputElement.accept = '.json';
    inputElement.multiple = false;

    inputElement.addEventListener('change', function(data) {

        if (inputElement.files) {

            var file = inputElement.files[0];
            var reader = new FileReader();

            reader.addEventListener('loadend', function(load_data) {

                if (reader.result) {
                    var myJson = JSON.parse(reader.result);

                    TcHmi.Symbol.writeEx('%s%PLC1.GVL.myArray%/s%', myJson, function(data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            console.log('ok');
                        } else {
                            console.log('error');
                        }
                    });

                }

            });
            reader.addEventListener('error', function(load_data) {
                console.log('File load error');
            });

            reader.readAsText(file);

        }
    });

    inputElement.click();
    return;
}
```

## Versions
* TcXaeShell 3.1.4024.20
* TE2000 1.12.750.1

## Need more help?
Please visit http://beckhoff.com/ for further guides
