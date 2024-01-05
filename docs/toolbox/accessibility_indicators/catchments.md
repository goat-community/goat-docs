---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Catchments

**Catchment areas** show how far people can travel within a given **travel time** or **distance**. The catchment areas are calculated on the real transport network and start from one or more selected points. 

## 1. Explanation

**Catchment areas** show how far a person can travel from selected starting point(s) within a given travel time or a given travel distance. In contrary to the [buffer](buffer/), which creates a straight line circle, the catchment calculation routes on the **real transport network**. Therefor, the user can select the ``routing mode`` (_Walking_, _Bike_, _Pedelec_, _Transit_ or _Car_). 

Catchment areas can be used as an **accessibility indicator** in a specific location or area. The catchment area gives insights into the network connectivity. Furthermore, the catchment area can be intersected with further spatial data sets, such as population and POI data. Therewith it can be assessed how many people or POIs can be reached from certain starting point(s) and thus e.g. identified which share of inhabitants has access to important destinations of daily life within a specific travel time. 

![GOAT multi-isochrone](/img/indicators/catchments/multi-isochrone/multi-isochrone.png "GOAT multi-isochrone") <span style={{color: "#FF0000"}}>TODO: update image with sample result</span>  
  

:::tip Hint
You might know this feature from our previous software versions under the terms *Single-Isochrone* and *Multi-Isochrone*. With the release of GOAT version 2.0, we combined these two indicators in the same flow and enriched it with further calculation options. 
:::



## 2. Which planning questions can be answered? 

Among others, catchments can be used to answer the following planning questions:

- Which amenities can be reached from a certain point in a 15-minute walk?
- How many inhabitants have access to a supermarket within 10 minutes cycling?
- What proportion of the population has a GP within 500m distance?
- How big is the catchment area of a workplace by car vs. by public transport? How many employees live within these catchment areas? 
- How well are kindergartens currently distributed across the city? In which districts are there accessibility deficits?



## 3. How to use the indicator?

### Video Tutorial
<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754209613" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="700" height="400"></iframe>

<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754227700" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="700" height="400"></iframe>

### Step-by-step guideline

<span style={{color: "#FF0000"}}>TODO</span> 

1. Go into menu ... 

1. Pick for which ``routing`` mode you would like to calculate an isochrone. 

<Tabs>
  <TabItem value="walking" label="Walking" default className="tabItemBox">

#### Walking

Considering all paths accessible by foot.

Default walking speed: 5km/h

<img src="https://plan4better.de/images/docs/technical_documentation/isochrone/walking_en.webp" width="1000px" alt="isochrone walking settings" style={{width: "1000px", height: "150px", maxHeight: "100px", maxWidth: "300px", objectFit: "contain"}}/> 

Further information: **TODO: add link to routing/walking**

  </TabItem>
  <TabItem value="cycling" label="Cycling/Pedelec" className="tabItemBox">

    
#### Cycling Standard

Considering all paths accessible by bicycle.

Default cycling speed: 15km/h Depending on the surface, smoothness and slope of the different street segments, the cycling speed is adjusted accordingly (further information: [Publication](/general/publications#accessibility-by-proximity-addressing-the-lack-of-interactive-accessibility-instruments-for-active-mobility) > TODO: check link).

<img src="https://plan4better.de/images/docs/technical_documentation/isochrone/standard_en.webp" width="1000px" alt="isochrone cycling settings" style={{width: "300px", height: "150px", maxHeight: "100px", maxWidth: "300px", objectFit: "contain"}}/> 

#### Pedelec

Same as the cycling standard profile, but with an increased cycling speed of 23 km/h.
For Pedelecs, slopes are considered with a lower impedance than for standard bicycles.

<img src="https://plan4better.de/images/docs/technical_documentation/isochrone/pedelec_en.webp" width="1000px" alt="isochrone pedelec settings" style={{width: "1000px", height: "150px", maxHeight: "100px", maxWidth: "300px", objectFit: "contain"}}/> 

Further information: **TODO: add link to routing/cycling**


  </TabItem>
  <TabItem value="public transport" label="Public Transport" className="tabItemBox">

#### Transit

In this routing mode, users can compute intermodal accessibility centered around public transport. The following settings can be adjusted:

-	The ``weekday`` (Monday to Sunday)
-	Time period (``from time`` and ``to time``) (0h to 24h)
-	``Access Mode`` (How the user accesses the station, e.g., Walk, Bicycle),
-	``Egress Mode`` (How the user exists the station e.g., Walk, Bicycle) 
-	``Transit Modes`` (Bus, Tram, Metro and/or Rail).

<img src="https://plan4better.de/images/docs/technical_documentation/isochrone/transit_en.webp" width="1000px" alt="isochrone transit settings" style={{width: "1000px", height: "350px", maxHeight: "350px", maxWidth: "300px", objectFit: "contain"}}/> 

Further information: **TODO: add link to routing/transit**


  </TabItem>
  <TabItem value="car" label="Car" className="tabItemBox">

#### Car

<span style={{color: "#FF0000"}}>TODO</span> 

Further information: **TODO: add link to routing/car**

  </TabItem>
</Tabs>



2. Place the ``starting point`` on the map. 

<span style={{color: "#FF0000"}}>... to be continued & updated... </span> 

  

:::tip Tip

Want to style your catchment areas and create nice looking maps? See [Styling (TODO: insert new section name & link)](../../styling_and_print/).

:::

## 4. Technical details

Catchment areas are **isolines** connecting all points that can be reached from one or more starting points within a certain time interval (called *isochrones*) or distance (called *isodistance*). Depending on the chosen travel mode, the according transport networks are used for the [routing > TODO: Insert Link](/../routing). 

The catchment areas are dynamically created in the front end based on a travel time / distance grid. Therefore, catchment areas can be created fast and for different intervals on the fly.

### Scientific background

From the scientific background, catchments are _contour-based measures_ (also known as _cumulative opportunities_). They are valued for their **easily interpretable results** ([Geurs and van Eck 2001](isochrones#6-resources); [Albacete 2016](isochrones#6-resources)), but have the drawback of not distinguishing between different travel times within the **cut-off range** ([Bertolini, le Clercq, and Kapoen 2005](isochrones#6-resources)), as it is done by [heatmaps > TODO: Insert Link](/category/heatmaps/).

### Visualization 

The catchment shape is derived from the routing grid using the [Marching square contour line algorithm](https://en.wikipedia.org/wiki/Marching_squares "Wikipedia: Marching Squares"), a computer graphics algorithm that can generate two-dimensional contour lines from a rectangular array of values ([de Queiroz Neto et al. 2016](isochrones#6-resources)). This algorithm transforms the grid from a 2D array to a shape to visualize or analyzed. An illustration of 2D image processing is shown in the figure. 

<img src="https://plan4better.de/images/docs/technical_documentation/isochrone/wiki.webp" width="1000px" alt="marching square" style={{width: "1000px", height: "400px", maxHeight: "400px", maxWidth: "400px", objectFit: "contain"}}/> 

## 5. Further readings

<span style={{color: "#FF0000"}}>TODO:</span>

- Links to videos / use cases
- Related docs


Further insights into the catchment calculation and its scientific background can be found in this [publication](https://doi.org/10.1016/j.jtrangeo.2021.103080).

## 6. Resources

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

