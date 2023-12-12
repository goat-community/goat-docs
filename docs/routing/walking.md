---
sidebar_position: 1
---

# Walking

## Routing Algorithm

The routing for walking is based on a custom implementation of the widely used **[Dijkstra algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm "Wikipedia page on the Dijkstra algorithm")**. In the implementation, the routing network is dynamically created and therefore allows the computation of scenarios. While the routing network is saved in the PostgreSQL/PostGIS database, the routing is done in [Python](https://www.python.org/ "Python") using the just-in-time compiler [Numba](https://numba.pydata.org/ "Numba").

## Database

The walking routing is performed on the **OSM network**. Therefore, only paths that are suitable for walking are considered. 



<span style={{color: "#FF0000"}}>@EPajares & @majkshkurti: are there any further information we should add here? Is it still up-to-date or are we using R5 now for all modes?</span> 
