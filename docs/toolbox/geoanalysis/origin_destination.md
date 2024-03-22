---
sidebar_position: 4
---

import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";

# Origin Destination

The **Origin-Destination** analysis is used in various fields such as transport planning and urban planning to study **movements or flows between different locations**.

## 1. Explanation

The Origin-Destination (OD) tool is suited for studying **movement patterns between locations**, such as commuter flows, providing insights into the spatial interactions. This analytical process thereby visualizes the relationships between **starting points (origins)** and **end points (destinations)** by **connecting them with a straight line**. 

Such analyses are helpful for understanding how and why movement occurs in different contexts, and assists in the assessment and planning of transport networks and urban infrastructure. It supports data-driven decision-making by **highlighting patterns and trends in spatial interactions**, which can help improve the efficiency and sustainability of transport systems and urban layouts.

The example below shows an *Input Table (Matrix Layer)* and the resulting *Origin-Destination Lines* based on the *Zipcode Areas (Geometry Layer)*.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/toolbox/geoanalysis/origin_destination/od_example.png').default} alt="Origin Destination Tool in GOAT" style={{ maxHeight: "700px", maxWidth: "700px", objectFit: "cover"}}/>
</div> 


## 2. Example use cases

- Visualising the commuter flows between residential areas (origins) and workplaces (destinations).
- Assessing the public transport passenger flows between different stations.
- Analysing the flow of people from residential areas (origins)  to shopping locations (destinations).


## 3. How to use the tool?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Geoanalysis</code> menu, click on <code>Origin Destination</code>.</div>
</div>


<img src={require('/img/toolbox/geoanalysis/origin_destination/overview.png').default} alt="Origin Destination Tool Overview" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>


### Layer

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select your <code>Geometries Layer</code> (this should be a feature layer contain the geometries of the origins and destinations and an attribute that can be used as an identifier to match the OD-connections with the geometries) and <code>Unique Id Attribute</code>.</div>
</div>

### Matrix

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the <code>Matrix Table</code> (the table with the origin-destination-matrix) and <code>Origin Attribute</code>.</div>
</div>



<div class="step">
  <div class="step-number">5</div>
  <div class="content">Select your <code>Destination Attribute</code> (the attribute that contains the destinations in the origin destination matrix).</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Select your <code>Weight Attribute</code> (the attribute that contains the weights in the origin destination matrix).</div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Click on <code>Run</code>.</div>
</div>

:::tip Hint

Depending on the complexity of the OD-matrix, the calculation might take some minutes. The [status bar](../../workspace/home#status-bar) shows the current progress.

:::

<div class="step">
  <div class="step-number">8</div>
  <div class="content">As soon as the calculation process is finished, the resulting layers will be added to the map. The results consist of one layer called <b>"Origin Destination Relations"</b>, showing the lines between the origins and destinations, and one layer called <b>"Origin Destination Points"</b> which provides all origins and destination points (for polygon geometries, the centroids are used).</div>
</div>


<img src={require('/img/toolbox/geoanalysis/origin_destination/result.png').default} alt="Origin Destination Result in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>

:::tip Tip
Want to style your result layer and create nice looking maps? See [Styling](../../map/layer_style/styling).
:::