---
sidebar_position: 2
---

# Cycling

The routing for walking and cycling is based on a custom implementation of the widely used [Dijkstra algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm "Wikipedia page on the Dijkstra algorithm"). In the implementation, the routing network is dynamically created and therefore allows the computation of scenarios. 

While the routing network is saved in the PostgreSQL/PostGIS database, the routing is done in [Python](https://www.python.org/ "Python") using the just-in-time compiler [Numba](https://numba.pydata.org/ "Numba").

<span style={{color: "#FF0000"}}>TODO: add infos on the impedance factors. </span>   
  

<span style={{color: "#FF0000"}}>@EPajares & @majkshkurti: are there any further information we should add here?</span>   


## Resources

https://www.sciencedirect.com/science/article/pii/S0966692321001332?via%3Dihub#f0045
