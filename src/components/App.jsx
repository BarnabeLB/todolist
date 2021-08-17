import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");                                                       // création d'un array permettant de gérer différent état. la première case est le nom de l'array, la seconde la fonction pour y stocké des valeurs
  const [items, setItems] = useState([]);
  



  function changeHandler(event) {                                                            // (event) pour param afin de récupérer les valeurs saisie
    const newValue = event.target.value;                                                     // on les stock dans une variable
    setItem(newValue);                                                                       // on les envoit dans le l'array item[] grace à la méthode setItem()
  }

  function clickHandler() {
    setItems((prevItems) => { return [...prevItems, item];                                    // on met dans items[], la valeur de item, ainsi que la précédante. 
    });
     setItem("");                                                                             // au click on eff ace le champ de saisie
     
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" value={item} />                           {/* changeHandler() est appelée lorsque le champ de saisie est sollicité. La valeur extraite sera liée à la variable item */}
        <button onClick={clickHandler}>                                                       {/* */}
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((todoItem) => <li key={todoItem.toString()}>{todoItem}</li>)}              {/* Création d'un nouvel array à partir de l'array items, pour chaque élement de cet array nommé ici (todoItem) on invoque
                                                                                               la création d'un <li></li> avec la valeur correspondante à la sa position dans le tableau. Ne pas oublier de préciser une key */}
        </ul>
      </div>
    </div>
 );
 
}

export default App;
