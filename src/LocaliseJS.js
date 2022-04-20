import * as common_strings from './common_strings.json' 
import DataLists from './DataLists'

class LocaliseJS {
  constructor(...customStrings)
  {
    this.customStrings= customStrings
    this.dataLists=new DataLists()
  }

  async getAsync(code, lang="en")
  {
    return get(code, lang)
  }
  
  get(code, lang="en")
  {
    return this.gSFC(code, lang)
  }

  cGet(code, variable, lang="en")
  {
    return this.customGSFC(code,lang, variable)
  }

  gSFC(code, lang="en")
  {
    if(!isValidLangCode(lang))
    {
      lang="en"
    }
    // If user has provided a custom file, read it and prefer it over default.
    
    if(this.customStrings!=null&&typeof this.customStrings!="undefined")
    {

      console.clear()
      for(var args in this.customStrings)
      {
        var toReturn=this.getCodeFromJSON(this.customStrings[args],code, lang)
        if(toReturn!=null && typeof(toReturn)!="undefined"&&toReturn!="")
        {
          break;
        }

      }

      if(toReturn!=null&&toReturn!="")
      {
        return toReturn
      }
      else
      {
        return this.getCodeFromJSON(common_strings,code,lang)  
      }
    }
    else
    {
      return this.getCodeFromJSON(common_strings,code,lang)
    }
  }

  customGSFC(code, lang, variable)
  {
    var string= this.gSFC(code, lang)
    string= string.replace("%%VAR%%", variable)
    return string
  }
  
  getCodeFromJSON(jsonArray_input, code, lang="en") {

    
    var jsonArray=jsonArray_input
    var toReturn=""

    if (typeof jsonArray[code]!= "undefined" && typeof jsonArray[code][lang]!= "undefined")
    {
      
      toReturn= jsonArray[code][lang];
    }
    else {
      toReturn= "";
    }
    return toReturn
  }



}

export function isValidLangCode(lang)
{
  
  if(lang==""||lang == null)
  {
    return false
  }

  if(typeof(lang)!="string")
  {
    return false
  }

  return true
}
export default LocaliseJS
