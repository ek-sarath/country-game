import {useState} from "react";

function CountryCapital ({data}) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [prevSelectedAnswer, setPrevSelectedAnswer] = useState(null);
    const [buttonList, setButtonList] = useState(shuffle([...Object.keys(data), ...Object.values (data)]));
    const [color, setColor] = useState('');

    function shuffle (countries) {
       for (let i = countries.length-1; i>0; i--) {
           const j = Math.floor(Math.random() * (i+ 1));
           [countries[i], countries[j]] = [countries[j], countries[i]];
    }
    return countries;
}
  
   const handleAnswer = (e) => {
    const answer = e.target.value;
    if (!selectedAnswer){
        setSelectedAnswer(answer);
        setColor ('blue');
    }else{
        if(data[setSelectedAnswer] === answer || data[answer] === selectedAnswer){
            setButtonList(buttonList.filter(b=>b!==answer&&b!== selectedAnswer));
            setSelectedAnswer=(null);
            setPrevSelectedAnswer=(null);
    }else{
        setPrevSelectedAnswer(selectedAnswer);
        setSelectedAnswer(answer);






      }
     }
   };

   if (buttonList.length === 0){
     return <p>Congratulations</p>
   }

    return <>
    {
    buttonList.map((item) => { 
    return <button key = {item} className={`game-btn ${selectedAnswer === item? "selected" : ""}
    ${prevSelectedAnswer && (item === selectedAnswer || item === prevSelectedAnswer) ?"Incorrect" :""}`}
    style={{backgroundColor: `${color}`}}
    onClick={handleAnswer} value={item}>{item}</button>
    })
 }
</>;
}

export default CountryCapital;