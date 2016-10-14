var chess = function (size) {
    var str = " # # # #";
    for (var i = 0; str.length < ((size * size) + size); i += 1) {
        if (i % 2 !== 0) {
            str += "\n" + " # # # #";
        } else {
            str += "\n# # # # ";
        }
    }
    console.log(str);
};
