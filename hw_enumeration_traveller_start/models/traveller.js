const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });

};

Traveller.prototype.getJourneysByMinDistance = function (distance) {
  return this.journeys.filter((journey) => {
    return journey.distance > distance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // creates empty list
  let unique = [];
  // loops through journeys
  this.journeys.forEach((journey) => {
    // adds each value for transport onto the end of unique []
    unique.push(journey.transport);
  });
  // create a unique list, from the list, 'unique' - 'Set' makes unique lists
  unique = new Set(unique);
  // returns the list, which is now a unique list
  return Array.from(unique);
};


module.exports = Traveller;
