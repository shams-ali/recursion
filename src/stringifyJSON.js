// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
/*
Properties of non-array objects are not guaranteed to be stringified in any particular order. Do not rely on ordering of properties within the same object within the stringification.

Boolean, Number, and String objects are converted to the corresponding primitive values during stringification, in accord with the traditional conversion semantics.

If undefined, a function, or a symbol is encountered during conversion it is either omitted (when it is found in an object) or censored to null (when it is found in an array).

All symbol-keyed properties will be completely ignored, even when using the replacer function.

Non-enumerable properties will be ignored
 */

var stringifyJSON = function(obj) {
    if(obj === null){
        return 'null';
    }
    if( obj === undefined || typeof obj === "function"){
        return undefined;
    }
    if(typeof obj === 'string'){
        return '"' + obj + '"';
    }
    if(Array.isArray(obj)){
        var arrayRes = [];
        if(obj.length){
            for(var i = 0; i < obj.length; i++){
                arrayRes.push(stringifyJSON(obj[i]));
            }
            return "[" + arrayRes.join(',') + "]";
        }else{
            return '[]';
        }
    }
    if(obj.constructor === Object){
        var keys = Object.keys(obj);
        if(keys.length){
            var objRes = [];
            for( var j = 0; j < keys.length; j++){
                var key = keys[j];
                if (!key || obj[key] === undefined || typeof key === 'function' || typeof obj[key] === 'function'){

                }else{
                    objRes.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
                }
            }
            return '{' + objRes.join() + '}';
        }else{
            return '{}';
        }
    }

    return obj.toString();

};

console.log(stringifyJSON({"functions":undefined,"undefined":undefined}));

