import React, { useState } from 'react';
import './App.css'

function App() {

  //Quotes to use
  const quotes = [ {author: "Marcus Aurelius", quote: "Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?”"},
                   {author: "Seneca", quote: "We are more often frightened than hurt; and we suffer more in imagination than in reality."}, 
                   {author: "Epictetus", quote: "How long are you going to wait before you demand the best for yourself?”"}, 
                   {author: "Cato", quote: "I begin to speak only when I’m certain what I’ll say isn’t better left unsaid."}, 
                   {author: "Viktor Frankl", quote: "When we are no longer able to change a situation, we are challenged to change ourselves."}, 
                   {author: "Marcus Aurelius", quote: "In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.”"},
                   {author: "Seneca", quote: "No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have."},
                   {author: "Epictetus", quote: "Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well."},
                   {author: "Viktor Frankl", quote: "What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him"},
                   {author: "Marcus Aurelius", quote: "Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?"}];

  //Return array with the quote in the first index and the author in the last one
  const getQuote = () => {
    //create a random integer before returning so we get the corresponding author
    let randInt = Math.floor(Math.random() * quotes.length);

    return [quotes[randInt].quote,
            quotes[randInt].author];
  }

  //Declare state
  const [quote, setQuote] = useState(getQuote);

  return (
    <div>
      <header>
        <h1 id="title">RANDOM QUOTE GENERATOR</h1>
      </header>
      <div id="quote-box" className="well clearfix">
        <div class="container">
        <p cite={quote[1]} id="text">{quote[0]}</p>
        </div>
        <div className="container2">
        <button className="orange" id="new-quote" onClick={() => setQuote(getQuote)}>
          Get Random Quote
        </button>
        <button className="blue" onClick={() => window.open('https://twitter.com/intent/tweet?text=' + quote[0] + " " + quote[1])}>
          Tweet
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
