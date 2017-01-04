
###Problem Statement:

There are different way of rating things
E.g. Upvotes/Downvotes in Reddit's post
E.g. 5-Star rating system in e-commerce products

###Goal:
Write a solution to sort items correctly based on ratings

###Solution:
Lower bound of Wilson's Confidence Interval

```
const wilsonRate = require('wilson-rate')
const upvotes = 100
const downvotes = 50

// Convert 5-star rating system to upvotes and downvotes
const stars = wilsonRate.stars(100, 0, 0, 10, 100)
console.log(wilsonRate.wilson(stars.upvotes, stars.downvotes))

console.log(wilsonRate.average(upvotes, downvotes))
console.log(wilsonRate.wilson(upvotes, downvotes))
console.log(wilsonRate.mid(upvotes, downvotes))
```

###Reference:

1. [http://stackoverflow.com/questions/19613023/wilsons-confidence-interval-for-5-star-rating](StackOverflow - Wilson Confidence Interval for 5 star rating)
2. [http://www.evanmiller.org/how-not-to-sort-by-average-rating.html](How not to sort by average rating)
3. [http://www.itl.nist.gov/div898/handbook/prc/section2/prc241.html](Confidence Interval)


