---
sidebar_position: 2
sidebar_class_name: hidden
---

import connectivityFormula from "/img/indicators/connectivity/formula_en.webp"

# Connectivity

<span style={{color: "#FF0000"}}> TODO.</span> 

The Connectivity Heatmap shows **how well the walking network is connected** on a hexagonal grid. It helps to detect network gaps across the city. 

## 1. Explanation

The **Connectivity Heatmap** serves as **benchmark** for the [connectivity](../../general/glossary#connectivity "What is Connectivity?") of the transport infrastructure, i.e. the path network. It can currently be calculated for the walking mode and visualizes the **connectivity of footpaths** on a hexagonal grid. This allows users to identify areas of high and low connectivity in the study area. This is particularly important for the promotion of active modes (walking and cycling), as these modes are sensitive to detours.

The connectivity heatmap is based on the [isochrone](/en/docs/isochrone/ "What is an isochrone?") calculation. From the centroid of each hexagon, the walking catchment area is computed. Based on the size of the catchment area, the hexagons are categorized in <i>very low</i> (<span style={{color: "#FF0000"}}>red</span>) to <i>very high connectivity</i> (<span style={{color: "#268c35"}}>green</span>). The heatmap is thus suitable for directly **comparing different locations** within a chosen geographical scope. 

![Connectivity Heatmap in GOAT](/img/indicators/connectivity/first_impression_connectivity_en.webp "Connectivity Heatmap in GOAT")

Typical areas with low connectivity are along railway lines and large main roads. High connectivity values are often found in residential areas with dense path networks.

:::tip Tip

To get further insights into the network connectivity starting form a specific point, [Isochrones > TODO: fix link](/indicators/catchments/isochrones/) can be helpful.

:::

## 2. Which planning questions can be answered? 

Among others, the connectivity heatmap can be used to answer the following planning questions:
  - How well is the footpath network connected? 
  - Where are connectivity issues? 
  - Where are barriers for pedestrians in the context of street network connectivity? 


## 3. How to use the indicator?
### Video Tutorial
<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/753850371" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="700" height="400"></iframe>
  
<span style={{color: "#FF0000"}}>TODO: insert new video or move this version to "further readings" as use case (version 1.5)</span>  

### Step-by-step guideline

1. Go into the tab ``INDICATORS`` and activate the ``Connectivity`` heatmap. The resulting heatmap shows areas with <i>low connectivity</i> in <span style={{color: "#FF0000"}}>red</span> and areas with <i>high connectivity</i> in <span style={{color: "#268c35"}}>green</span>.

![GOAT Connectivity Heatmap](/img/indicators/connectivity/connectivity_en.webp "Connectivity Heatmap in GOAT")

2. To further understand, where the connectivity values come from, it is helpful to activate the ``Aerial Image`` background map. 

![GOAT Connectivity Heatmap](/img/indicators/connectivity/background_en.webp "Connectivity Heatmap in GOAT")

3. In this example, we can see that one of the <span style={{color: "#FF0000"}}>red areas</span> has low connectivity due to a large freight depot, while the large <span style={{color: "#268c35"}}>green areas</span> are due to the historic city centre with its small-grained block structure.

![GOAT Connectivity Heatmap](/img/indicators/connectivity/explanation_en.webp "Connectivity Heatmap in GOAT")

## 4. Technical details

### Calculation

The connectivity heatmap is calculated using the [H3 hexagonal grid](../../general/glossary#h3-grid "Glossary entry on H3 grid") with an edge length of approximately 66 m per cell. For each hexagon centroid, the reached area is computed using an **isochrone** with the maximum walking time of 20 minutes (with 5km/h). This calculation returns the travel time from the centroid to each pixel of the isochrone.

![Isochrone travel times](/img/indicators/connectivity/isochrone_en.webp "Travel time from the centroid to each pixel grid of the isochrone")


The **connectivity value** is computed by summing up the reached area for each time interval (1 to 20 min) and dividing the sum by the total number of intervals (20):

<img src={connectivityFormula} alt="connectivityFormula" width="1000px" style={{width: "400px", height: "130px", maxHeight: "500px", maxWidth: "500px", objectFit: "contain"}}/> 

The resulting connectivity values are classified into six levels, from highest to lowest as [**quintile classification**](../../general/glossary#quintile-classification "Quintile Classification"). This classification helps to identify areas with relatively small or large catchments, allowing to locate gaps in the network and potential areas for improvement. 


### Visualization 

The connectivity heatmap is visualized using a **hexagonal grid** with an edge length of approximately 174 m per cell. Accordingly the resolution for the visualization is lower than the resolution used for the calculation. The higher resolution for the calculation is necessary to ensure a precise calculation of the connectivity. While the lower resolution for the visualization is chosen to ensure a **smooth rendering** of the connectivity heatmap. The data on the higher resolution is aggregated to the lower resolution by computing the average connectivity.

<span style={{color: "#FF0000"}}>Hint Philipp: calculation on resolution 10, so we have a edge length of approx. 75m and visualize on resolution 8 (edge length: approx. 530m)?</span>

## 5. Further readings

<span style={{color: "#FF0000"}}>TODO:</span>   

(Links to tutorials)   
Links to videos  
Related docs  

## 6. References

bibliography of cited literature

<span style={{color: "#FF0000"}}>TODO: @EPajares & @majkshkurti is there any literature that was used as theoretical basis for the calculation?</span>  
