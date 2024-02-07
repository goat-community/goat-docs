---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import thematicIcon from "/img/indicators/join/toolbox.webp";

# Catchments

<span style={{color: "#FF0000"}}> !!!THIS PAGE NEEDS A LOT OF CHECK AND UPDATE!!!! </span> 


**Catchment areas** show how far people can travel within a given **travel time** or **distance**. The catchment areas are calculated on the real transport network and start from one or more selected points. 

## 1. Explanation

**Catchment areas** show how far a person can travel from selected starting point(s) within a given travel time or a given travel distance. In contrary to the 
[buffer](/docs/toolbox/geoprocessing/buffer.md), which creates a straight line circle, the catchment calculation routes on the **real transport network**. Therefore, the user can select the `routing mode` (_Walking_, _Bike_, _Pedelec_, _Transit_ or _Car_). 

Catchment areas can be used as an **accessibility indicator** in a specific location or area. The catchment area gives insights into the network connectivity. Furthermore, the catchment area can be intersected with further spatial datasets, such as population and POI data. Therewith it can be assessed how many people or POIs can be reached from certain starting point(s) and thus e.g. identified which share of inhabitants has access to important destinations of daily life within a specific travel time. 

![GOAT multi-isochrone](/img/indicators/catchments/multi-isochrone/multi-isochrone.png "GOAT multi-isochrone") <span style={{color: "#FF0000"}}>TODO: update image with sample result</span>  
  

:::tip Hint
You might know this feature from our previous software versions under the terms *Single-Isochrone* and *Multi-Isochrone*. With the release of GOAT version 2.0, we combined these two indicators in the same flow and enriched it with further calculation options. 
:::



## 2. Example use cases

- Which amenities can be reached from a certain point in a 15-minute walk?
- How many inhabitants have access to a supermarket within 10 minutes cycling?
- What proportion of the population has a GP within 500m distance?
- How big is the catchment area of a workplace by car vs. by public transport? How many employees live within these catchment areas? 
- How well are kindergartens currently distributed across the city? In which districts are there accessibility deficits?



## 3. How to use the indicator?

### Video Tutorial
<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754209613" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="700" height="400"></iframe>

<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754227700" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="700" height="400"></iframe>

### Step-by-step Guideline

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Accessibility Indicators</code> menu, click on <code>Catchment Area</code>.</div>
</div>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Pick for which <code>routing</code> mode you would like to calculate an isochrone.</div>
</div>

<Tabs>
  <TabItem value="walking" label="Walking" default className="tabItemBox">

#### Walking

Considering all paths accessible by foot.

Default walking speed: **5km/h**

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Set the configurations for <code>time</code> or <code>distance</code>.</div>
</div>

<img src={require('/img/indicators/catchments/walk_config.png').default} alt="walking configurations" style={{ maxHeight: "400px", maxWidth: "400px"}}/>


**Further information:** [Routing/Walking](/docs/routing/walking.md)

  </TabItem>
  <TabItem value="cycling" label="Cycling/Pedelec" className="tabItemBox">

    
#### Cycling Standard

Considering all paths accessible by bicycle.

Default cycling speed: **15km/h**. Depending on the surface, smoothness and slope of the different street segments, the cycling speed is adjusted accordingly. 

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Set the configurations for <code>time</code> or <code>distance</code>.</div>
</div>

<img src={require('/img/indicators/catchments/walk_config.png').default} alt="walking configurations" style={{ maxHeight: "400px", maxWidth: "400px"}}/>


**Further information:** [Publication](https://doi.org/10.1016/j.jtrangeo.2021.103080).


#### Pedelec

Same as the cycling standard profile, but with an increased cycling speed of **23 km/h**.
For Pedelecs, slopes are considered with a lower impedance than for standard bicycles.

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Set the configurations for <code>time</code> or <code>distance</code>.</div>
</div>

<img src={require('/img/indicators/catchments/walk_config.png').default} alt="walking configurations" style={{ maxHeight: "400px", maxWidth: "400px"}}/>

**Further information:** [Routing/Cycling](/docs/routing/cycling.md)


  </TabItem>
  <TabItem value="public transport" label="Public Transport" className="tabItemBox">

#### Public Transport

In this routing mode, users can compute intermodal accessibility centered around public transport. The following settings can be adjusted:

-	The ``weekday`` (Monday to Sunday)
-	Time period (``from time`` and ``to time``) (0h to 24h)
-	``Access Mode`` (How the user accesses the station, e.g., Car, Walk, Bicycle),
-	``Egress Mode`` (How the user exists the station e.g., Walk, Bicycle) 
-	``Pt types`` (Bus, Tram, Metro and/or Rail).

Before setting the configurations, select the ``Pt types`` you want to analyze.
 
<div>
  <img src={require('/img/indicators/catchments/pt_type.png').default} alt="pt type" style={{ maxHeight: "400px", maxWidth: "400px", objectFit: "cover"}}/>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Set the configurations for <code>time</code>.</div>
</div>

<img src={require('/img/indicators/catchments/pt_config.png').default} alt="pt configurations" style={{ maxHeight: "200px", maxWidth: "200px"}}/>


Further information: [Routing/Public Transport](/docs/routing/public_transport.md)


  </TabItem>
  <TabItem value="car" label="Car" className="tabItemBox">

#### Car

Considering all roads accessible by car.

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Set the configurations for <code>time</code>.</div>
</div>

<img src={require('/img/indicators/catchments/pt_config.png').default} alt="pt configurations" style={{ maxHeight: "200px", maxWidth: "200px"}}/>


Further information: [Routing/Car](/docs/routing/car.md)

  </TabItem>
</Tabs>


<div class="step">
  <div class="step-number">5</div>
  <div class="content">Choose a way to select starting point(s) of the isochrone under <code>Starting</code> menu.</div>
</div>

<Tabs>
  <TabItem value="Place on Map" label="Place on Map" default className="tabItemBox">

 #### Place on Map
   Click on location icon <img src={require('/img/indicators/catchments/location_icon.png').default} alt="location icon" style={{ maxHeight: "30px", maxWidth: "30px"}}/>.

   Place one starting point on the map to calculate **single isochrone**, place the starting points on the map to calculate **multi-isochrone**.


  </TabItem>
  <TabItem value="Browse Layers" label="Browse Layers" className="tabItemBox">

 #### Browse Layers
  Select the layer you want to calculate the isochrone.


  </TabItem>
  <TabItem value="Search Address" label="Search Address" className="tabItemBox">

  #### Search Address
  Search for the address you want to calculate the isochrone.

  </TabItem>
</Tabs>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Click on <code>Run</code>.</div>
</div>

:::tip Tip
Want to style your catchment areas and create nice looking maps? See [Styling](/docs/map/layer_design/styling).
:::

## 4. Technical details

Catchment areas are **isolines** connecting all points that can be reached from one or more starting points within a certain time interval (called *isochrones*) or distance (called *isodistance*). Depending on the chosen travel mode, the according transport networks are used for the [routing](/docs/routing/walking.md). 

The catchment areas are dynamically created in the front end based on a travel time/distance grid. Therefore, catchment areas can be created fast and for different intervals on the fly.

### Scientific background

From the scientific background, catchments are _contour-based measures_ (also known as _cumulative opportunities_). They are valued for their **easily interpretable results** ([Geurs and van Eck 2001](isochrones#6-references); [Albacete 2016](isochrones#6-references)), but have the drawback of not distinguishing between different travel times within the **cut-off range** ([Bertolini, le Clercq, and Kapoen 2005](isochrones#6-references)), as it is done by [heatmaps](/docs/toolbox/accessibility_indicators/heatmap_closest_facilities.md).

### Visualization 

The catchment shape is derived from the routing grid using the [Marching square contour line algorithm](https://en.wikipedia.org/wiki/Marching_squares "Wikipedia: Marching Squares"), a computer graphics algorithm that can generate two-dimensional contour lines from a rectangular array of values ([de Queiroz Neto et al. 2016](isochrones#6-references)). This algorithm transforms the grid from a 2D array to a shape to visualize or analyzed. An illustration of 2D image processing is shown in the figure. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src="https://plan4better.de/images/docs/technical_documentation/isochrone/wiki.webp" width="1000px" alt="marching square" style={{ width: "1000px", height: "400px", maxHeight: "400px", maxWidth: "400px", objectFit: "contain"}}/>
</div> 

## 5. Further readings

<span style={{color: "#FF0000"}}>TODO:</span>

- Links to videos / use cases
- Related docs


Further insights into the catchment calculation and its scientific background can be found in this [publication](https://doi.org/10.1016/j.jtrangeo.2021.103080).

## 6. References

Albacete, Xavier. 2016. “Evaluation and Improvements of Contour-Based Accessibility Measures.” url: https://dspace.uef.fi/bitstream/handle/123456789/16857/urn_isbn_978-952-61-2103-1.pdf?sequence=1&isAllowed=y 

Bertolini, Luca, F. le Clercq, and L. Kapoen. 2005. “Sustainable Accessibility: A Conceptual Framework to Integrate Transport and Land Use Plan-Making. Two Test-Applications in the Netherlands and a Reflection on the Way Forward.” Transport Policy 12 (3): 207–20. https://doi.org/10.1016/j.tranpol.2005.01.006.

J. F. de Queiroz Neto, E. M. d. Santos, and C. A. Vidal. “MSKDE - Using
Marching Squares to Quickly Make High Quality Crime Hotspot Maps”. en.
In: 2016 29th SIBGRAPI Conference on Graphics, Patterns and Images (SIBGRAPI).
Sao Paulo, Brazil: IEEE, Oct. 2016, pp. 305–312. isbn: 978-1-5090-3568-7. doi:
10.1109/SIBGRAPI.2016.049. url: https://ieeexplore.ieee.org/document/
7813048/

https://fr.wikipedia.org/wiki/Marching_squares#/media/Fichier:Marching_Squares_Isoline.svg

Majk Shkurti, "Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS", Sep 2022. url: https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS <span style={{color: "#FF0000"}}>TODO: @EPajares & @majkshkurti: I took this reference from the current docs but cannot find the text passage where it is cited. Do you know where this belongs to?</span>

Matthew Wigginton Conway, Andrew Byrd, Marco Van Der Linden. "Evidence-Based Transit and Land Use Sketch Planning Using Interactive Accessibility Methods on Combined Schedule and Headway-Based Networks", 2017. url: https://journals.sagepub.com/doi/10.3141/2653-06 <span style={{color: "#FF0000"}}>TODO: @EPajares & @majkshkurti: I took this reference from the current docs but cannot find the text passage where it is cited. Do you know where this belongs to?</span>

Geurs, Karst T., and Ritsema van Eck. 2001. “Accessibility Measures: Review and Applications.” RIVM Report 408505 006. url: https://rivm.openrepository.com/handle/10029/259808