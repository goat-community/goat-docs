---
sidebar_position: 1
 
---
 
# Walk
 
**Routing** is the process of guiding data packets from origin to destination through various contexts, adapting transmission speeds to changing conditions and priorities.

 
## 1. Objectives

Routing is a critical process in computer networking that serves the general purpose of **directing data packages from their source to their destination**. It plays an important role in a variety of contexts, including **local networks**, and **catchment areas**. By determining the optimal path for data transmission, routing ensures efficient and reliable communication between devices and networks. In addition, routing allows the speed of data transmission to be adjusted, enabling networks to adapt effectively to changing conditions and priorities.

## 2. Data

### Routing Network

Data from **[Overture Maps Foundation](https://overturemaps.org/)** is used for routing network in GOAT. It includes transportation themes with **segments/edges** (for any continuous path not bisected by another) and **connectors/nodes** (for any point where two distinct paths intersect), representing real-world networks.


### Topography and Elevation

Elevation data is sourced from **[Copernicus](https://www.copernicus.eu/en)** as **Digital Elevation Model (DEM)** tiles.


## 3. Technical Details

### Data Pre-processing

The following steps are performed on the data to enable **quick** and **accurate** routing:

 - **Attribute Parsing:** Categorizing attributes of segments and connectors.
 - **Geospatial Indexing:**  Utilizing **[Uber's H3 grid-based](../further_reading/glossary#h3-grid)** indexing for efficient routing.
 - **Surface Impedance Computation:** Calculating impedance considering surface properties.
 - **Slope Impedance Computation:** Overlaying DEM on segments to compute slope profiles.


### Routing Process Steps

#### Sub-network Extraction

- **Buffer Region:** Based on user-origin, travel time, and speed.
- **Segment Filtering:**  Include only relevant segments for walking.

Segments are considered for pedestrian routing:
`secondary` `tertiary` `residential` `livingStreet` `trunk`
`unclassified` `parkingAisle` `driveway` `pedestrian` `footway`
`steps` `track` `bridleway` `unknown`

#### Artificial Segment Creation

User-provided origin points are typically located a short distance away from the street network. In order to account for the additional time (or cost) of walking from the origin to its nearest street, artificial (or simulated) segments are created.

#### Segment Cost Computation

For all segments in the sub-network, a cost value (represented as time) is calculated based on various parameters.

Cost function for walking:
`cost = length / speed`

#### Network Propagation

To compute the shortest path from the origin point to various destinations, a custom implementation is used of the well-known [Dijkstra Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm).


<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/routing/walk/dijkstra.gif').default}  alt="Dijkstra Algorithm" style={{ width: "auto", height: "auto", objectFit: "cover"}}/>
<p style={{ textAlign: 'center' }}>GIF: <a href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm">Dijkstra Algorithm</a></p>
</div>



The implementation has a time complexity of *O(V^2)* (TBC), is written in **Python** and uses the just-in-time compiler **Numba**.


## 4. Further Readings
 - list of papers 
 - list of libraries we are using (R5)
 