---
sidebar_position: 1
---

import thematicIcon from "/img/general/interface_overview/thematic_icon.webp"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Buffer

The buffer creates a **straight line circle** around a given starting **points, lines or polygons** to a specified distance. 


## 1. Explanation

A **buffer** is a tool used to delineate the catchment area around a specific point, line or polygon illustrating the extent of influence or reach from that point. Users can define the ``distance`` of the buffer, thereby customising the radius of the area covered.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/geoprocessing/buffer/buffer_types.png').default} alt="buffer types" style={{ maxHeight: "400px", maxWidth: "400px", objectFit: "cover"}}/>
</div> 

## 2. Example use cases 

- How many people live within a 500m distance from the train station? 
- How many shops are accessible within a 1000m distance from a bus stop?


## 3. How to use the function?

### Video Tutorial

<span style={{color: "#FF0000"}}>TODO: create video tutorial</span>


### Step-by-step guideline

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Geoprocessing</code> menu, click on <code>Buffer</code>.</div>
</div>


<span style={{color: "#FF0000"}}>TODO: add general ss from buffer menu</span> 

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select your Layer.</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Define the <code>maximum distance</code> (how far out from your points, lines, or shapes the buffer should extend) in meters.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Define the <code>distance step</code> (how thick each circle or shape around your point, line, or shape should be) in meters.</div>
</div>

:::tip HINT
If you want to improve your analysis on buffer, you can use **Polygon Union** and **Polygon Difference** tools.
:::

<Tabs>
  <TabItem value="polygonunion" label="Polygon Union" default className="tabItemBox">

#### Polygon Union
The  ``Polygon Union`` tool creates separate buffers around specified start points, lines or polygons. GOAT allows users to create a **geometric union** of the buffers with all the touching buffer polygons. This tool is useful if you want to see the total area covered by all your buffers combined.

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Click on <code>Polygon Union</code>.</div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Click on <code>Run</code>.</div>
</div>


<div style={{ display: 'flex', flexDirection: 'column' }}>
  <img src={require('/img/geoprocessing/buffer/polygon_union.png').default} alt="polygon union" style={{ maxHeight: "400px", maxWidth: "400px", objectFit: "cover"}}/>
</div> 


- The **union** operation combines multiple polygons into a single polygon that encompasses all the areas of the individual polygons. The irregularly shaped outline represents the area covered by the **buffers** when they are merged together.


  </TabItem>
  <TabItem value="polygondifference" label="Polygon Difference" className="tabItemBox">

#### Polygon Difference 
The  ``Polygon Difference`` tool creates separate buffers around specified start points, lines or polygons. GOAT allows users to create a **geometric difference** of the buffers.

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Click on <code>Polygon Difference</code>.</div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Click on <code>Run</code>.</div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/geoprocessing/buffer/polygon_difference.png').default} alt="polygon difference" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 


- The **difference** operation subtracts one polygon from another. In this context, it represents subtracting one buffer zone from another, resulting in the areas where the **buffers do not overlap**.

:::tip NOTE
Note that to use ``Polygon Difference`` feature, you need to have the ``Polygon Union`` feature turned on and it can be used only if the **maximum_distance/step_distance** (you defined while calculating buffer) ratio is lower than 20.
:::

  </TabItem>
</Tabs>




:::tip Tip

Want to style your buffers and print nice looking maps? See [Styling & Print](/docs/map/layer_design/styling.md).

:::



## 4. Technical details

<span style={{color: "#FF0000"}}>TODO: @EPajares & @majkshkurti are there any further technical details that should be mentioned here?</span>

## 5. Further readings


<span style={{color: "#FF0000"}}>TODO:</span> 
(Links to tutorials)  
Links to videos  
Related docs  

## 6. Resources

**TODO:**
bibliography of cited literature