import React from'react';
import Card from'./components/card'
 
function App() {​​​​​​​​
return (
<div className="App">
<span>
<Card
title="Hulk"
imageurl="https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png"
value="50"
/>
</span>
<span>
<Card
title="Black panther"
imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7agMu5KmOw-G7PpSEEVLOzPr_QZ6BwRaKA&usqp=CAU"
value="90"
/>
</span>
<span>
<Card
title="Captain America"
imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWo2iHvQK9mnNwrT2E4FcxBUqG0c2p4W8Uw&usqp=CAU"
value="50"
/>
</span>
</div>
  );
}
export default App;

 
