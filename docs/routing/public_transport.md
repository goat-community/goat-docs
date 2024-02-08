---
sidebar_position: 3
sidebar_class_name: hidden
---

# Public Transport

The public transport routing is always an **intermodal analysis**, as also access and egress modes are included (i.e. the walk / bike ride to and from the station). It thus has more complexity than the other routing modes and requires a combination of different data sets (sidewalks, bikeways, public transport schedules, etc.) and calculation approaches.

<span style={{color: "#FF0000"}}>@EPajares & @majkshkurti: is R5 also used for the walking/cycling parts of the intermodal trip? Or are we combining the R5-public-transport-analysis with the active-mobility-dijkstra?</span> 

## Routing Algorithm

The public transport routing is performed through the **[R5 engine](https://github.com/conveyal/r5 "R5 on GitHub")** (*Rapid Realistic Routing on Real-world and Reimagined networks*). R5 is the routing engine from [Conveyal](https://conveyal.com/ "Conveyal"), a web-based system that allows users to create transportation scenarios and evaluate them in terms of cumulative opportunities and accessibility indicators. The figure below represents the grid interpolation with travel time cost from the R5 engine:

![r5 isochrone](/img/routing/public_transport/r5_en.webp)

As a result, the grid includes accessibility information for all the amenities for each minute of the travel-time window.

![r5 result](/img/routing/public_transport/grid_en.webp)

The resolution of the grid cells depends on the Web Mercator zoom levels. Meanwhile, the resolution is a trade-off between performance and accuracy. Different zoom levels are implemented for walking/cycling and public transport. To consider the fact that walking and cycling is requiring analyses focusing on the local level. Generally speaking, higher resolutions are producing high-resolution results but are paired with longer computation times.

<span style={{color: "#FF0000"}}>TODO: make text less technical. Currently a bit hard to understand.</span> 

## Database

The data used is a combination of **GTFS** and **OSM** data. 

<span style={{color: "#FF0000"}}>@EPajares & @majkshkurti: is the info still up to date? Anything missing here??</span> 