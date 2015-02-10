// Count number of words in a Markdown string.
// Removes all formatting for accuracy.
var countWords = function(str){
    // Remove everything but words, letters and spaces.
    var words = str.replace(/[^\w\s]/g, "")
        .replace(/\s{2,}/g, " ")
        .replace(/^\s+/g, "")
        .replace(/\s+$/g, "")
        .replace(/\n/, " ");

    // Split words and get length, or default to 0
    var numWords = str.length ? words.split(" ").length : 0;

    // Make pluralised string
    var msg = numWords + " word";
    if(numWords !== 1) msg += "s";

    return {
        num: numWords,
        msg: msg
    }
}


// Export plugin
module.exports = function(opts, editor){
    // Get new word count, and trigger change:wordcount event
    this.on("ready change", function(){
        var wordCount = countWords(editor.getValue());
        this.signal("wordcount", wordCount.num, wordCount.msg);
    }.bind(this));
}