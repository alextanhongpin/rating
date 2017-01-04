
const mid = (upvotes, downvotes) => {
  const total = upvotes + downvotes
  const up = upvotes / total
  const half = .5
  const a = total / (4 + total)
  const b = 4 / (4 + total)
  return a * up + b * half
}

const average = (upvotes, downvotes) => {
  const total = upvotes + downvotes
  return upvotes / total
}


const wilson = (upvotes, downvotes, z=1.644853) => {
  // Use 1.96 for a confidence level of 0.95.
  const n = upvotes + downvotes
  const phat = upvotes / n
  const lower = (phat + z * z / (2 * n) - z * Math.sqrt((phat * (1 - phat) + z * z / (4 * n)) / n)) / (1 + z * z / n)
  // We only want the lower boundary of Wilson's Confidence Interval
  // const upper = (phat + z * z / (2 * n) + z * Math.sqrt((phat * (1 - phat) + z * z / (4 * n)) / n)) / (1 + z * z / n)
  return lower //{ lower, upper }
}

function stars () {
  const ratings = [...arguments]
  const step = 1 / (ratings.length - 1)
  
  const upvotes = ratings.map((value, index) => {
    return value * (1 - index * step)
  }).reduce((prev, next) => {
    return prev + next
  }, 0)

  const downvotes = ratings.reverse().map((value, index) => {
    return value * (1 - index * step)
  }).reduce((prev, next) => {
    return prev + next
  }, 0)

  return { upvotes, downvotes }
}

module.exports = {
  stars,
  wilson,
  average,
  mid
}

