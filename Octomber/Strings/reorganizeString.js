
var reorganizeString = function(s) {
    let freq = {};

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let maxFreq = 0;
    let maxChar = "";

    for (let ch in freq) {
        if (freq[ch] > maxFreq) {
            maxFreq = freq[ch];
            maxChar = ch;
        }
    }

    if (maxFreq > Math.ceil(s.length / 2)) {
        return "";
    }

    let result = new Array(s.length);
    let index = 0;

    // Place the most frequent character first
    while (freq[maxChar] > 0) {
        result[index] = maxChar;
        index += 2;
        freq[maxChar]--;
    }

    // Place the remaining characters
    for (let ch in freq) {
        while (freq[ch] > 0) {
            if (index >= s.length) {
                index = 1;
            }

            result[index] = ch;
            index += 2;
            freq[ch]--;
        }
    }

    return result.join("");
};
