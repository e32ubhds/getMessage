/*
1.合并字符串(mergeStrings)
2.判断对象是否为空（isEmpty）
3.判断对象是否为json（_isJSON）
4.正则提取（str_regexp）
*/
//合并字符串
function mergeStrings() {
  let strings = "";
  for (let i = 0; i < arguments.length; i++) {
    strings = strings + "\n" + arguments[i];
  }
  return strings
};

//判断字段是否为空
function isEmpty(checkObj) {
  if (!checkObj || !checkObj.length) {
    return true
  }
  else {
    if (_isJSON(checkObj)) {
      let hasKey = ''
      if (typeof (checkObj) === 'string') {
        checkObj = JSON.parse(checkObj)
      }
      for (const key in checkObj) {
        hasKey = key
        break
      }
      if (!hasKey) {
        return true
      }
      else {
        return false
      }
    }
    else {
      if (checkObj === 'undefined' || checkObj === 'null') {
        return true
      }
      return false
    }
  }
};

function _isJSON(tragetObj) {
  if (typeof (tragetObj) === 'string') {
    try {
      var obj = JSON.parse(tragetObj);
      if (typeof (obj) === 'object' && obj) {
        return true
      }
      else {
        return false
      }
    }
    catch (e) {
      return false
    }
  }
  else if (typeof (tragetObj) === 'object' && !Array.isArray(tragetObj)) {
    return true
  }
  else {
    return false
  }
};

function str_regexp(str, pattern) {
  let patt = new RegExp(pattern);
  let ret_match = str.match(patt);
  return ret_match[1].trim();
};
