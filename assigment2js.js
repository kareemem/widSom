var quote =["<q>Be yourself; everyone else is already taken.</q><br> <span>-- Oscar Wilde</span> ",
"<q>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</q><br> <span>-- Albert Einstein</span> ",
"<q>Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.</q><br> <span>-- Bernard M.Baruch</span> ",
"<q>You only live once, but if you do it right, once is enough.</q><br> <span>-- Mae West</span> ",
"<q>Be the change that you wish to see in the world.</q><br> <span>-- Mahatma Gandhi</span> ",
"<q>Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend</q><br> <span>-- Albert Camus</span> ",
"<q>I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.</q><br> <span>-- Maya Angelou</span> ",
"<q>Live as if you were to die tomorrow. Learn as if you were to live forever.</q><br> <span>-- Mahatma Gandhi</span> ",
"<q>The fool doth think he is wise, but the wise man knows himself to be a fool.</q><br> <span>-- William Shakespeare</span> ",
"<q>If you don't stand for something you will fall for anything.</q><br> <span>-- Gordon A.Eadie</span> "
]

var click = document.getElementById("btnClick") ;
click.onclick = function(){
    var ChooseAQuote = Math.floor(Math.random() * 10);
    document.getElementById("quote").innerHTML = quote[ChooseAQuote]
}





