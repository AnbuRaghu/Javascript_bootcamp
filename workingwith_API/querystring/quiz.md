Quer String
-----------------
a way to filter results

everything that comes after ? is query string

/bikes?types=mountain
it means select all bikes whos type is mountain.. the browser will turn our query string into an object always like this

{type:'mountain'}

we can have amultiple qury string by just adding '&' like below

/bikes?types=mountain&brand=trek&color=gray


At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

1. Get a list of all bike racks sold on the site?
/bikeracks

2. Get a list of all bike racks available in the physical store right now?
   (Assume a query called "available" that is a boolean true/false)
/bikeracks?available=true  ==> {available: "true"} (Will be parsed as a string)

3. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
   (Assume there are "brand" and "numBikes" queries)
/bikeracks?brand=thule&numBikes=4


