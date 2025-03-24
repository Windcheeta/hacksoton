export function disaster(probs) {
    let out = weightedRandom(Object.keys(events),probs)
    return [out,events[out][0],events[out][1]]
}


// name effect, time, 
const events = {
    "Draught": [0.85,1],
    "rainfall": [1.4,0.5],
    "famine": [1.3,0.5],
    "jeremy clarkson": [1.1,0.1],
    "heatwave": [0.7,2],
    "tariff": [0.7,4],
    "inflation": [1.05,1],
    "population increase": [1.2,10],
    "fire": [0.5,12]
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