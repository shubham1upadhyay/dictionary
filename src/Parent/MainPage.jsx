import React, { useEffect, useState } from "react";
import '../Makeup/MainPage.css'
const MainPage = ()=>{

  const [users, setUsers] = useState([])
  const [input, setInput] = useState("");
 
  const endPoint = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

  const fetchData = () => {
    fetch(endPoint)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function showData(i)
  {
    i++;
   fetchData();
   console.log(users[0].meanings)
  }


    return (
        <div className="parent">
            <div className="child">
                <input type="text" value={input} onInput={e => setInput(e.target.value)} />
                <button onClick={showData} type="Search">Search</button>
            </div>

            <div id="result-container">
                {
                    users.map(e => 
                    <div className="result-card">
                        <h1>{e.word}</h1>
                        <p>{e.phonetic}</p>
                        <audio controls>
                            <source src={e.phonetics[0].audio} type="audio/ogg" />
                        </audio>
                        <p>{e.phonetic}</p>
                        <audio controls>
                            <source src={e.phonetics[1].audio} type="audio/ogg" />
                        </audio>
                        <p>{e.phonetics[0].text}</p>
                        <h3>{e.meanings[0].partOfSpeech}</h3>
                         <p>{e.meanings[0].definitions[0].definition}</p>
                         
                         <h3>Verb</h3>
                         {/* <p>{e.meanings[1].definitions[0].definition}</p> */}
                    </div>
                        )
                }
                
            </div>
        </div>
    )
}

export default MainPage;