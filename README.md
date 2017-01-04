
server.js

Problem Statement:
There are different way of rating things
E.g. Upvotes/Downvotes in Reddit's post
E.g. 5-Star rating system in e-commerce products

Goal:
Write a solution to sort items correctly based on ratings

Solution:
Lower bound of Wilson's Confidence Interval

Reference:
http://stackoverflow.com/questions/19613023/wilsons-confidence-interval-for-5-star-rating
http://www.evanmiller.org/how-not-to-sort-by-average-rating.html
http://www.itl.nist.gov/div898/handbook/prc/section2/prc241.html

What if we want to handle 5-stars rating system?

For star rating -- Add

*     - 0.00 to up votes and 1.00 to down votes (i.e. a full down vote)
**    - 0.25 to up votes and 0.75 to down votes
***   - 0.50 to up votes and 0.50 to down votes
****  - 0.75 to up votes and 0.25 to down votes
***** - 1.00 to up votes and 0.00 to down votes (i.e. a full up vote)