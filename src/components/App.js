import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";


function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(e) {
    setFilters(e.target.value)
  }

  function onFindPetsClick(e) {
    e.preventDefault()
    let petsUrl = "http://localhost:3001/pets"

    if (filters !== "all") {
      petsUrl += `?type=${filters}`
    }
    fetch(petsUrl)
      .then(r => r.json())
      .then(pets => setPets(pets))
  }


  function onAdoptPet(id) {
    const updatedPets = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet
    })
    setPets(updatedPets)
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser
              pets={pets}
              onAdoptPet={onAdoptPet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;