import React from "react";

function Pet({ id, age, gender, isAdopted, name, type, weight, onAdoptPet }) {

  function handleAdoptClick() {
    onAdoptPet(id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "female" ? '♀ ' : '♂ '}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age} years old</p>
          <p>Weight: {weight} lbs</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted
          ? <button className="ui disabled button">Already adopted</button>
          : <button className="ui primary button" onClick={handleAdoptClick}>Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;