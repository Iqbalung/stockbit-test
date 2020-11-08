function findFirstStringInBraket(str){
   if(str.length>0){
      var firstbracket = strstr(str, '(');
      if(firstbracket){
         firstbracket = ltrim(firstbracket,'(')
         return strstr(fristracket,')',true)
      }else{
         return ''
      }
   }else{
      return '';
   }
}

function ltrim(str,args="/^\s+/") {
    return str.replace(args,"");
}

function strstr(haystack, needle, bool) {
    var pos = 0;
    haystack += "";
    pos = haystack.indexOf(needle); if (pos == -1) {
        return false;
    } else {
        if (bool) {
            return haystack.substr(0, pos);
        } else {
            return haystack.slice(pos);
        }
    }
}