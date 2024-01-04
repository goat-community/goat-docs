---
sidebar_position: 2
---

import thematicIcon from "/img/general/interface_overview/thematic_icon.webp"
import bufferSettings from "/img/indicators/catchments/buffer/tutorial_2.png"
import bufferResult from "/img/indicators/catchments/buffer/tutorial_6.png"

# Buffer

TODO: ADJUST TEXT & STRUCTURE. BUFFER NOW IN DATA OPPERATIONS. will be available for points, lines, polygons, ... 

The buffer creates a **straight line circle** around a given starting point. Therewith, **catchment areas** can be calculated, e.g. around public transport stops.  


## 1. Explanation

A **buffer** is an simple accessibility indicator that shows the catchment area of a specific point. The buffer ``distance`` can be selected by the user. In contrary to the [isochrones](isochrones/), which are calculated based on the real transport network, the buffer calculates the catchment areas **as the crow flies**. The resulting catchment areas can be intersected with further spatial data sets, such as population and POI data. Therewith it can be assessed how many people or POIs are located within the buffer area.  

![GOAT buffer](/img/indicators/catchments/buffer/buffer.png "GOAT buffer")

## 2. Which tasks can be fulfilled? 

For what can this function be used? 
Among others, xxx can be used to accomplish the following tasks:
- How many people live within a 500m distance from the train station? 
- How many shops are accessible within a 1000m distance from a bus stop?
- .... TODO .... 

## 3. How to use the function?

### Video Tutorial

<span style={{color: "#FF0000"}}>TODO: create video tutorial (@iremkapucuoglu) --> very short sequence showing the described steps below (when v2 is ready to be used)</span>


### Step-by-step guideline

1. Go into the tab ``CATCHMENTS`` and pick _buffer_ as ``routing`` mode. 

![Buffer Calculation in GOAT](/img/indicators/catchments/buffer/tutorial_1.png "Buffer Calculation in GOAT")
   
2. Select the ``Catchment Calculation`` type _single_. 
   
3. Zoom in into the area where you want to calculate the buffer. Place the ``Starting point`` on the map. 

<img src={bufferSettings} alt="bufferSettings" width="1000px" style={{width: "300px", height: "180px", maxHeight: "300px", maxWidth: "500px", objectFit: "contain"}}/> 

:::tip Tip

Want to calculate buffers from multiple starting points? See [Multi-Isochrones](multi-isochrones/).

:::

4. As a result, the buffer catchment area is shown in the map. The result table shows the number of population that lives within the buffer area. 

![Buffer Catchment Area in GOAT](/img/indicators/catchments/buffer/tutorial_3.png "Buffer Catchment Area in GOAT")

5. If you want to intersect the buffer area with POI data, you can go into the ``Thematic Data Filter`` <img src={thematicIcon} alt="thematic icon" style={{width: "25px"}}/> and enable the desired POI categories. The result table dynamically reacts on the selection.

![Buffer intersection with POI data in GOAT](/img/indicators/catchments/buffer/tutorial_4.png "Buffer intersection with POI data in GOAT")

6. The buffer ``distance`` can be adjusted via the distance slider. The result table dynamically reacts on the changes.

![Adjust buffer distance in GOAT](/img/indicators/catchments/buffer/tutorial_5.png "Adjust buffer distance in GOAT")

7. The results can be visualized in different forms (table, graph, pie chart) and can be downloaded as GeoJSON, CSV, Geobuf, Shapefile, GeoPackage, KML and XLSX. 

<img src={bufferResult} alt="bufferResult" width="1000px" style={{width: "300px", height: "280px", maxHeight: "500px", maxWidth: "500px", objectFit: "contain"}}/> 

:::tip Tip

Want to style your buffers and print nice looking maps? See [Styling & Print](../../styling_and_print/).

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