# LocaliseJS

This library is aimed towards making translation of JS apps easier.

## Initialisation

Import as:

    import LocaliseJS from 'localisejs'

To supply a custom file, first import it as:

    import * as customStrings from './customStrings.json'

Then, initialise as:

    var lang= new LocaliseJS(customStrings)



### Multiple Custom String Files

You can also supply mutiple arguments.

    import * as customStrings1 from './customStrings1.json'
    import * as customStrings2 from './customStrings2.json'
    import * as customStrings3 from './customStrings3.json'

    var lang= new LocaliseJS(customStrings1, customStrings2, customStrings3)
    
## Custom Strings

The custom string file must be a valid JSON of the format:

    {
        "STRING1":
        {
            "en":"STRING1",
            "hi": "स्ट्रिंग 1"
        },
        "STRING2":
        {
            "en":"STRING2",
            "hi": "स्ट्रिंग 2"
        }
    }

## Functions

### get

Gets the string from a code

    get(code, languagecode)

### getAsync

Gets the string asynchronously.

    getAsync(code, languagecode)

