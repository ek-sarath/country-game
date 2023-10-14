import React, {useState} from "react";
export default CountryCapital;

function CountryCapital ({data}) {
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [prevSelectedAnswer, setPrevSelectedAnswer] = useState();
    const [buttonList, setButtonList] = useState(shuffle([...Object.keys(data), ...Object.values (data)]));


    function shuffle (countries) {
    
    for (let i = countries.length-1; i>0; i--) {
         const j = Math.floor(Math.random() * (i+ 1));
         [countries[i], countries[j]] = [countries[j], countries[i]];
    
    }
    
    return countries;
}
  

   const handleAnswer = (e) => {
    const answer = e.target.value
    if (!selectedAnswer){
        setSelectedAnswer(answer)
    }else{
        if(data[setSelectedAnswer] === answer || data[answer] === selectedAnswer){
            setButtonList(buttonList.filter(b=>b!==answer&&b!== selectedAnswer));
            setSelectedAnswer=(null)
    }
   }


    const buttonList = shuffle([...Object.keys(data), ...Object.values (data)]);

    
    console.log(buttonList);
    
    
    return <>
    {
    buttonList.map((item) => { 
    return <button key = {item} className="game-btn">{item}</button>
    })
 }
</>;
}

export default CountryCapital;