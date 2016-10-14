var pyramid = function (height) {
    var hash = "#";
    for (var i = 0; i < height; i += 1) {
        console.log(hash);
        hash += "#";
    }
};
