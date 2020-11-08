// Words to match
var words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

// The output object
var anagrams = {};

for (var i in words) {
    var word = words[i];

    // sort the word like you've already described
    var sorted = sortWord(word);

    // If the key already exists, we just push
    // the new word on the the array
    if (anagrams[sorted] != null) {
        anagrams[sorted].push(word);
    } 
    // Otherwise we create an array with the word
    // and insert it into the object
    else {
        anagrams[sorted] = [ word ];
    }
}

// Output result
for (var sorted in anagrams) {
    var words = anagrams[sorted];
    var sep = ",";
    var out = "";
    for (var n in words) {
        out += sep + words[n];
        sep = "";
    }
    console.log(words)
}

function sortWord(word) {
    let strWord = word.split('').sort().join('');
    return strWord;
}
