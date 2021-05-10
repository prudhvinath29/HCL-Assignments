import React from 'react';
import Card from './components/card'
 
function App() {
  return (
    <div className="App">
      <span>
        <Card 
        title="Hulk"
        imageurl="https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png"
        body="Scientist Bruce Banner is exposed to gamma radiation, which has its unique side effect. During his acts of resentments, Bruce transforms into an infuriated green monster.
        "/>
      </span>
      <span>
        <Card 
        title="Black panther"
        imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7agMu5KmOw-G7PpSEEVLOzPr_QZ6BwRaKA&usqp=CAU"
        body="After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.
        "/>
      </span>
      <span>
        <Card 
        title="Captain America"
        imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWo2iHvQK9mnNwrT2E4FcxBUqG0c2p4W8Uw&usqp=CAU"
        body="During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation to defend his nation.
        "/>
      </span>
    </div>
  );
}
export default App;
