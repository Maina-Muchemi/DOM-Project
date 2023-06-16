//variables

let btn = document.querySelector('#New-Quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"Learn the rules like a pro, so you can break them like an artist."',
    
    person:'Pablo Picasso '
} ,{
    
    quote:'"Do one thing every day that scares you."',
    
    person:'Eleanor Roosevelt '
    
     
}, {
    
   quote:'" If you can dream it, you can do it."',
    
   person:'Walt Disney '
    

} , {
   quote:'" Even if you are on the right track, youll get run over if you just sit there."',
    
   person:'Will Rogers'
    
}, {
    quote:'"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    
    person:' Winston Churchill '
    
        

} , ];
    
btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innertext = quotes[random].quote;
    person.innertext = quotes[random].person;
})

     
   
     
    
     

     
    
     
   
     
    
    
    
    
    