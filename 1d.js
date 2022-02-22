const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

const countWords = (para) => {
    para = para.trim().split(/\s/);
    return para.length
}

console.log(countWords(sentence));