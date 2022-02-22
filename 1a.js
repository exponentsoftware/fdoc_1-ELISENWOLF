const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
const countWords = (para, wrd) => {
    const pattern = new RegExp(wrd, 'gi');
    const matches = para.match(pattern) || [];
    return matches.length;
}
const love = countWords(paragraph, 'love');
const you = countWords(paragraph, 'you');
console.log(love, you);

if(love > you){
    console.log('The word love more frequently occurred than you.Love occured'+' '+love+' '+'times.');
}
else{
    console.log('The word you more frequently occurred than love.You occured'+' '+you+' '+'times.');
}