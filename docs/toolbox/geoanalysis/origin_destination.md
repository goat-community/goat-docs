---
sidebar_position: 4
---

import thematicIcon from "/img/general/interface_overview/thematic_icon.webp"

# Origin Destination

**Origin-Destination** analysis is a fundamental tool used in various fields such as transport planning and urban planning to study **movement or flow** between different locations within a **defined area**.

## 1. Explanation

Origin-destination is a tool for studying **movement patterns between locations**, providing insights into the **spatial interactions**. This analytical approach focuses on identifying the **starting points (origins)** and **end points (destinations)** of movements that may involve people, goods or vehicles. Such analysis is essential for understanding how and why movement occurs in different contexts, and assists in the assessment and planning of transport networks and urban infrastructure. It supports more informed decision-making by highlighting patterns and trends in spatial interactions, which can help improve the efficiency and sustainability of transport systems and urban layouts.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/geoanalysis/origin_destination/od_example.png').default} alt="polygon_aggregation" style={{ maxHeight: "600px", maxWidth: "800px", objectFit: "cover"}}/>
</div> 


## 2. Example use cases

- Examine the residential areas (origin) and business districts (destinations) of commuters identifying busy routes and times of day.
- Where do most passengers start and end their public transport journeys?
- Examine the people flow from home areas to shopping locations.


## 3. How to use the function?

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

<span style={{color: "#FF0000"}}>TODO: add the image</span> 


<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select your <code>Geometry Layer</code> (this layer should contain the geometry of origins and destinations).</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select your <code>Origin Column</code> (the column that contains the origins in the origin destination matrix).</div>
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

## 4. Technical details

further technical details that were too complex for the "explanation" section

## 5. Further readings

(Links to tutorials)  
Links to videos  
Related docs  

## 6. Resources

bibliography of cited literature