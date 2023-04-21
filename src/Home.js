import React, { useState, useEffect } from 'react';
import './App.css';
//import Toggle from './Toggle';    ZZ
import CopyToClipboardButton from './CopyToClipboardButton';
import Footer from './Footer';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  const fetchNewQuote = () => {
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  return (
    <div className="App">
     <div id="heading"style={{ fontFamily: 'Chivo, monospace' }}>
    </div>
    <div class="block">
        <h2>{quote}</h2>
        <small>{author}</small>
      </div>
      <br />
      <div className="button-group">
      <button className="btn" onClick={fetchNewQuote}> Change quote
      </button> 
      <button className="btn" onClick={() => { 
    const speech = new SpeechSynthesisUtterance(quote); 
    window.speechSynthesis.speak(speech); 
}}>
  Read quote aloud
</button>

      <CopyToClipboardButton text={quote} />
      
      <div >
            <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      </div >
    </div>
    <Footer/>
    </div>
  );
}

export default App;
