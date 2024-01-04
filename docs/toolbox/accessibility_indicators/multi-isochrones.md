---
sidebar_position: 1
---

# Multi-Isochrones

TODO: Merge FLow of "SIngle" & "Multi" Isochrones

Multi-Isochrones are **catchment areas starting from multiple points**. This accessibility indicator shows how many people live within the catchment of a certain amenity group. 

## 1. Explanation

**Multi-Isochrones** show the catchment areas of selected [Points-of-Interest (POIs)](../../general/glossary#point-of-interest-poi "What is a Point-of-Interest?"). The user can thereby define which ``routing mode`` (_Walking_, _Bike_, _Pedelec_,  or _Buffer_) is used and which ``POIs`` are considered as starting points.

Multi-Isochrones can be used as an **accessibility indicator** on neighborhood or city level. The multi-isochrones give insights into the POI distribution and network connectivity. Furthermore, the isochrone can be intersected with  spatial data sets, such as population data. Therewith, it can be identified which share of inhabitants has access to important destinations of daily life within a specific travel time. 

![GOAT multi-isochrone](/img/indicators/catchments/multi-isochrone/multi-isochrone.png "GOAT multi-isochrone")

## 2. Which planning questions can be answered? 

Among others, multi-isochrones can be used to answer the following planning questions:
- How many inhabitants have access to a supermarket within 10 minutes walking?
- What proportion of the population has a GP within 500m distance?
- How well are kindergartens currently distributed across the city? In which districts are there accessibility deficits?
- How many inhabitants can reach a public transport stop by bicycle in a given travel time?

## 3. How to use the indicator?

**TODO:**
How to use the indicator? (from tutorials) / Sample calculation(s)
Show as many samples as necessary to explain a feature
--> adjust the step-tp-step guide to match the single-isochrone guide (as soon as swizzle is implemented)

### Video Tutorial

<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754227700" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="700" height="400"></iframe>

### Step-by-step guideline

#### 1 Accessibility to supermarkets

##### 1.1 Planning question

How well are the supermarkets currently distributed over the city? In which districts do you have accessibility deficits?

##### 1.2 Step-by-Step guide

1. Display the supermarkets as thematic data (can be found in the "shop" category).

[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.1_freiburg_eng.webp"  alt="choose isochrone range"/>

2. Set the routing options as desired (e.g. walking, 5km/h, 10 min travel time, 2 isochrones).
   
[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.2_select_option_eng.webp"  alt="choose isochrone range" style="max-height:180px;"/>

3. Switch to the "Multiple" isochrone calculation mode and select the "Study Area" method, which later lists all results differentiated by districts.

[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.3_select_option_eng.webp"  alt="Multi Isochrone" style="max-height:200px;"/>

4. Then select all districts that you want to include in the calculation by clicking on the map.

[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.4_select_studyarea_eng.webp"  alt="Select Districts"/>

5. Click on "Calculate."

[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.5_calculate_eng.webp"  alt="Calculate" style="max-height:220px;"/>

6. The resulting multi-isochrones shows the catchment areas of the supermarkets (here for the mode "pedestrian" with 10 minutes catchment area). The corresponding table shows, sorted by district, how many people out of the total population can reach a supermarket in 10 minutes walking distance. Via the "download" button you can download the results.

[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.6_10minutes_eng.webp"  alt="Result 10 Min" />

7. Similar to the single isochrones, the travel times of the multi-isochrones can be adjusted dyamically via the slider.

[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.6_5minutes_eng.webp"  alt="Result 5 Min" />

#### 2 Accessibility to public transport

##### 1.1 Planning question

How many inhabitants can reach a public transport stop by bicycle in a given travel time?

##### 1.2 Step-by-Step guide

1. Select the desired public transport stops (e.g. bus, tram) in the menu "Filter Thematic Data". 

[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_2.1.2_select_transportation_eng.webp"  alt="Select POIs" />
   
2. Set the routing options as desired (e.g. bike, 15km/h). 
   
3. Switch to the isochrone calculation mode "Multi" and select the method "District" and select the districts on the map or draw a polygon.

[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_2.1.3_select_study_area_eng.webp"  alt="Select study area" />
   
4. Click on "Calculate". 
   
5. The resulting multi-isochrones show you the catchment areas of the public transport stops (here for the mode "bicycle" with 10 minutes catchment area). The corresponding table shows, sorted by district, how many people of the total population can reach a public transport stop in 10 minutes by bike.

[comment]: <img src="/images/tutorials/Multiisochrones/Multi_isochrone_2.1.4_calculation_eng.webp"  alt="Result" />

## 4. Technical details

Technically, multi-isochrones are a **combination of multiple [Single-Isochrones](isochrones/ "Documentation on Single-Isochrones")** to one (or several) larger polygons. 
They are isolines connecting all points that can be reached from specific starting points within a certain time interval or distance. Depending on the chosen travel mode, the according transport networks are used for the [routing > TODO: Insert Link](/../routing).

The multi-isochrone shapes are dynamically created in the front end based on a travel time grid. Therefore, multi-isochrones can be created fast and for different intervals on the fly.

### Scientific background

From the scientific background, multi-isochrones are _contour-based measures_ (also known as _cumulative opportunities_). They are valued for their **easily interpretable results** ([Geurs and van Eck 2001](multi-isochrones#6-resources); [Albacete 2016](multi-isochrones#6-resources)), but have the drawback of not distinguishing between different travel times within the **cut-off range** ([Bertolini, le Clercq, and Kapoen 2005](multi-isochrones#6-resources)), as it is done by [heatmaps > TODO: Insert Link](/category/heatmaps/).

### Visualization 

The multi-isochrone shape is derived from the routing grid using the [Marching square contour line algorithm](https://en.wikipedia.org/wiki/Marching_squares "Wikipedia: Marching Squares"), a computer graphics algorithm that can generate two-dimensional contour lines from a rectangular array of values ([de Queiroz Neto et al. 2016](multi-isochrones#6-resources)). This algorithm transforms the grid from a 2D array to a shape to visualize or analyzed. An illustration of 2D image processing is shown in the figure. 

<img src="https://plan4better.de/images/docs/technical_documentation/isochrone/wiki.webp" width="1000px" alt="marching square" style={{width: "1000px", height: "400px", maxHeight: "400px", maxWidth: "400px", objectFit: "contain"}}/> 

## 5. Further readings

**TODO:**

(Links to tutorials)  
Links to videos  
Related docs  

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

Majk Shkurti, "Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS", Sep 2022. url: https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS **@EPajares & @majkshkurti: I took this reference from the current docs but cannot find the text passage where it is cited. Do you know where this belongs to? **

Matthew Wigginton Conway, Andrew Byrd, Marco Van Der Linden. "Evidence-Based Transit and Land Use Sketch Planning Using Interactive Accessibility Methods on Combined Schedule and Headway-Based Networks", 2017. url: https://journals.sagepub.com/doi/10.3141/2653-06 **@EPajares & @majkshkurti: I took this reference from the current docs but cannot find the text passage where it is cited. Do you know where this belongs to? **

Geurs, Karst T., and Ritsema van Eck. 2001. “Accessibility Measures: Review and Applications.” RIVM Report 408505 006. url: https://rivm.openrepository.com/handle/10029/259808