var recursion = function(name){
    var length = name.length;
    var nName = "";
    if (length > 0){
        var res = name.slice(0, length-1);
        nName = name.substring(length-1);
        console.log(nName);
        return nName + recursion(res);
    }
    else 
        return nName;
    

}

console.log(recursion("sasha"));