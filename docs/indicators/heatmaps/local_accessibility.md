---
sidebar_position: 2
---

# Local Accessibility


The Local Accessibility Heatmap shows how good **walking accessibility to selected amenities** is on a hexagonal grid. It helps to understand how accessibility varies across the city. 

## 1. Explanation

[Local Accessibility](../../general/glossary#local-accessibility "What is Local Accessibility?") refers to the accessibility on neighborhood-level. With the **Local Accessibility Heatmap**, it can be assessed how good local accessibility to various [Points-of-Interest (POIs)](../../general/glossary#point-of-interest-poi "What is a Point-of-Interest?") is. The ``POIs`` can thereby be chosen by the user.

The Local Accessibility Heatmap can be used as an **accessibility indicator** on the neighborhood, city or regional scale. The heatmap gives insights into the POI distribution and network connectivity. It is suitable for directly **comparing different locations** within a chosen geographical scope. 

![Local Accessibility Heatmap in GOAT](/img/docs/indicators/heatmaps/local_accessibility/lokale-erreichbarkeit-1-englisch.webp "Local Accessibility Heatmap in GOAT")

## 2. Which planning questions can be answered? 

Among others, the Local Accessibility Heatmap can be used to answer the following planning questions:
- How well are the kindergartens distributed throughout the city? Where would be a suitable location for a new kindergarten?
- Where can accessibility deficits be found? 

:::tip Tip

If accessibility deficits are identified, a [POI scenario > TODO: fix link](/scenarios/pois  "How to make a POI scenario?") can help assess potential locations for new amenities.

:::

## 3. How to use the indicator?

### Video Tutorial
<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/753850371" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="700" height="400"></iframe>

### Step-by-step guideline
**TODO: **
How to use the indicator? (from tutorials) / Sample calculation(s)
Show as many samples as necessary to explain a feature

- adjusting sensitivity parameter β
- adjusting weights when considering more than 1 POI category

## 4. Technical details

**TODO:** adjust texts (currently mainly copy & pasted from old docs)


gravity-based accessibility > the more the better approach

GOAT allows you to calculate and visualize gravity-based accessibility measures, which are visualized as heatmaps. Based on pre-calculated travel times the heatmap is computed dynamically based on the selection of the Points-of-Interest (POIs). A hexagonal grid is used for visualization.

**@EPajares one information that is missing here is the routing profile and speed that is used for the calculation. I assume it's "walking" and "5km/h" - is this correct?** (TODO)

### Scientific background

From the scientific background, the Local Accessibility Heatmap is a  _gravity-based measures_ (also known as _potential measures_, _Hansen-type measures_, etc.). 
They are **advanced to contour-based measures**, such as [isochrones > TODO: check link](isochrones "Docs on isochrones"), as they take further into account that **people are more likely to visit closer destinations** than those that are more distant ([Geurs and van Eck 2001](isochrones#6-resources)). 


### Calculation

The heatmap is calculated through the following formula:

![Accessibility formula](/img/docs/indicators/heatmaps/local_accessibility/place-based_accessibility_measures.webp "Accessibility formula")

where the <b>accessibility A</b> of <b>origin i</b> is the sum of all <b>opportunities O</b> available at <b>destinations j</b> weighted by an <b>impedance function f()</b> of the <b>travel time t<sub>ij</sub></b> between <b>i</b> and <b>j</b>. 

To determine the impedance, the modified gaussian function is used:

![Impedance function](/img/docs/indicators/heatmaps/local_accessibility/Gaussian_function.webp "Impedance function")

Travel times t<sub>ij</sub> are computed in seconds. 1200 seconds (= 20 minutes) are used as **cut-off value**, meaning that destinations further than 20 minutes walking are considered inaccessible and will not be included in further calculations. 

The travel times are **computed for each grid cell** to the corresponding destination on the walking network. The following figure shows this process exemplarily for one grid cell for accessibility to different kind of supermarkets. 

![Simplified example](/img/docs/indicators/heatmaps/local_accessibility/grid_groceries.webp "Simplified example")

**TODO: adjust graphic to use 20 mins as cut-off value**

The ``sensitivity index β`` defines how accessibility changes with increasing travel time. As the sensitivity parameter is decisive when measuring accessibility, it can be adjusted by the user. The following graphs show the influence of the sensitivity parameter on the **willingness to walk** to a certain destination.

![Sensitivity index](/img/docs/indicators/heatmaps/local_accessibility/sensitivitätsindex_en.webp "Sensitivity index")

Similarly, the ``weighting`` of the opportunities can be changed. Thus, for example, one POI type (e.g. hypermarkets) can be assigned a higher accessibility effect than other POI types (e.g. discount supermarkets). 


For the hexagon highlighted above, the **calculation** yields the following result:

![Accessibility calculation](/img/docs/indicators/heatmaps/local_accessibility/accessiblity_different_sensitivity-indices.webp "Accessibility calculation")

In this example, the accessibility of grocery shops in 20 min is performed using different sensitivity parameters (β=300,000 for supermarkets and discounters ; and β=400,000 for hypermarkets). Meaning hypermarkets are assumed to bring a higher value to the customer than supermarkets or discounters, thus customers are willing to travel further to reach those. 

### Visualization 
**TODO:** to be written

In order to visualize the resulting accessibility levels that were computed for each grid cell, a **classification** based on [**quintiles**](../../general/glossary#quintile-classification "Quintile Classification") is used.

## 5. Further readings

**TODO:**  
(Links to tutorials)  
Links to videos  
Related docs  

## 6. Resources

Kwan, Mei-Po. 1998. “Space-Time and Integral Measures of Individual Accessibility: A Comparative Analysis Using a Point-Based Framework.” Geographical Analysis 30 (3): 191–216. [https://doi.org/10.1111/j.1538-4632.1998.tb00396.x](https://doi.org/10.1111/j.1538-4632.1998.tb00396.x).

Vale, D.S., and M. Pereira. 2017. “The Influence of the Impedance Function on Gravity-Based Pedestrian Accessibility Measures: A Comparative Analysis.” Environment and Planning B: Urban Analytics and City Science 44 (4): 740–63. [https://doi.org/10.1177%2F0265813516641685](https://doi.org/10.1177%2F0265813516641685).

Higgins, Christopher D. 2019. “Accessibility Toolbox for R and ArcGIS.” Transport Findings, May. [https://doi.org/10.32866/8416](https://doi.org/10.32866/8416).