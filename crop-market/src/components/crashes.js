export function disaster(probs) {
    let out = weightedRandom(Object.keys(events),probs)
    return [out,events[out]]
}


// name effect, time, 
const events = {
    "Draught": [-10,1],
    "rainfall": [10,0.5],
    "famine": [5,0.5],
    "jeremy clarkson": [1,0.1],
    "heatwave": [-10,2],
    "tariff": [-3,4],
    "inflation": [-0.5,1],
    "population increase": [2,10]
}

function weightedRandom(elements, weights) {
    // Calculate the cumulative weights
    let cumulativeWeights = [];
    let sum = 0;
    for (let weight of weights) {
      sum += weight;
      cumulativeWeights.push(sum);
    }
  
    // Generate a random number between 0 and the sum of weights
    let random = Math.random() * sum;
  
    // Find the element corresponding to the random number
    for (let i = 0; i < cumulativeWeights.length; i++) {
      if (random < cumulativeWeights[i]) {
        return elements[i];
      }
    }
  }