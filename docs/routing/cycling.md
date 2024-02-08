---
sidebar_position: 2
sidebar_class_name: hidden
---

# Cycling

## Routing Algorithm

The routing for cycling is based on a custom implementation of the widely used **[Dijkstra algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm "Wikipedia page on the Dijkstra algorithm")**. In the implementation, the routing network is dynamically created and therefore allows the computation of [scenarios](../category/scenarios "Scenarios"). While the routing network is saved in the PostgreSQL/PostGIS database, the routing is done in [Python](https://www.python.org/ "Python") using the just-in-time compiler [Numba](https://numba.pydata.org/ "Numba").

## Database

The cycling routing is performed on the **OSM network**. Therefore, only paths that are suitable for cycling are considered. Per default, a cycling speed of 15km/h is used. Depending on the surface, smoothness and slope of the different street segments, the cycling speed is adjusted accordingly (further information: [Pajares et al. 2021](https://www.sciencedirect.com/science/article/pii/S0966692321001332?via%3Dihub#f0045 "View publication")). Furthermore, an average delay at intersections is assumed.

<span style={{color: "#FF0000"}}>@EPajares & @majkshkurti: will there be still the "Pedelec" profile in the new version?</span>  


**Pedelec**


Same as the cycling standard profile, but with an increased cycling speed of 23 km/h. For Pedelecs, slopes are considered with a lower impedance than for standard bicycles.


<span style={{color: "#FF0000"}}>TODO: add infos on the impedance factors. </span>   
  
<span style={{color: "#FF0000"}}>@EPajares & @majkshkurti: are there any further information we should add here? Is it still up-to-date or are we using R5 now for all modes?</span>   


## References

https://www.sciencedirect.com/science/article/pii/S0966692321001332?via%3Dihub#f0045
