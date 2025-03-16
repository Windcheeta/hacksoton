export function disaster(probs) {
    let out = weightedRandom(Object.keys(events),probs)
    return [out,events[out][0],events[out][1]]
}


// name effect, time, 
const events = {
    "Draught": [-1000000,1],
    "rainfall": [10000,0.5],
    "famine": [-1000000,0.5],
    "jeremy clarkson": [1000000,0.1],
    "heatwave": [1000000,2],
    "tariff": [-1000000,4],
    "inflation": [1000000,1],
    "population increase": [-1000000,10]
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