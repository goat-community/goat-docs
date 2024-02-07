---
sidebar_position: 4
---

import thematicIcon from "/img/indicators/join/toolbox.webp"

# Origin Destination

The **Origin-Destination** analysis is a fundamental tool used in various fields such as transport planning and urban planning to study **movements or flows between different locations** within a defined area.

## 1. Explanation

The Origin-Destination (OD) tool is suited for studying **movement patterns between locations**, such as commuter flows, providing insights into the spatial interactions. This analytical process thereby visualizes the relationships between **starting points (origins)** and **end points (destinations)** by **connecting them with a straight line**. 

Such analyses are helpful for understanding how and why movement occurs in different contexts, and assists in the assessment and planning of transport networks and urban infrastructure. It supports data-driven decision-making by **highlighting patterns and trends in spatial interactions**, which can help improve the efficiency and sustainability of transport systems and urban layouts.

The example below shows an *Input Table (Matrix Layer)* and the resulting *Origin-Destination Lines* based on the *Zipcode Areas (Geometry Layer)*.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/geoanalysis/origin_destination/od_example.png').default} alt="polygon_aggregation" style={{ maxHeight: "600px", maxWidth: "800px", objectFit: "cover"}}/>
</div> 

<span style={{color: "#FF0000"}}>TODO: Adjust colors (use grey instead of black texts), currently it's hard to read in the dark mode. Heading "Origin Destination" can be removed. Can't find original file.</span>

## 2. Example use cases

- Visualising the commuter flows between residential areas (origins) and workplaces (destinations).
- Assessing the public transport passenger flows between different stations.
- Analysing the flow of people from residential areas (origins)  to shopping locations (destinations).


## 3. How to use the tool?

### Step-by-step guideline

<span style={{color: "#FF0000"}}>TODO: check the steps </span> 

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Geoanalysis</code> menu, click on <code>Origin Destination</code>.</div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/geoanalysis/origin_destination/overview.png').default} alt="polygon_aggregation" style={{ maxHeight: "600px", maxWidth: "800px", objectFit: "cover"}}/>
</div> 

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select your <code>Geometry Layer</code> (this should be a feature layer contain the geometries of the origins and destinations and a column that can be used as an identifier to match the OD-connections with the geometries).</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the <code>Matrix Layer</code> (the table with the origin destination matrix).</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Select your <code>Destination Column</code> (the column that contains the destinations in the origin destination matrix).</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Select your <code>Weight Column</code> (the column that contains the weights in the origin destination matrix).</div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Click on <code>Run</code>.</div>
</div>

