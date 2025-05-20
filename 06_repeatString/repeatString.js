let repeatString = (word, times) => {
    let repeat = "";
    for (let num = 0; num < times; num++) {
        repeat += word;
    };
    return repeat;
};

module.exports = repeatString;