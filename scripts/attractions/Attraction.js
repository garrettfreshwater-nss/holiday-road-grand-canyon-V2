const attractionComponent = (attraction) => {
    return `
    <div class="attraction__content">
      <div class="attraction__name">${attraction.name}</div>
      <img class="icon dino_icon" src="/images/dino.svg" alt="">

    <button class="button__details" id="attractionButton__${attraction.id}">Details</button>
  
    <dialog class="dialog__attraction" id="details__${attraction.id}">
      <div class="attraction__name">${attraction.name}</div>
      <div class="attraction__city">${attraction.city}</div>
      <div class="attraction__state">${attraction.state}</div>
      <div class="attraction__description">${attraction.description}</div>
      <div class="attraction__souvenirs">Souvenirs Available: ${attraction.ameneties.souvenirs}</div>
      <div class="attraction__restrooms">Restrooms Available: ${attraction.ameneties.restrooms}</div>
      
      <button class="close__dialog">hide</button>
    </dialog>
    </div>
    `
}



export default attractionComponent