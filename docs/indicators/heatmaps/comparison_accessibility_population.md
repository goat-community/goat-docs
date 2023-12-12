---
sidebar_position: 4
---

import thematicIcon from "/img/general/interface_overview/thematic_icon.webp"

# Accessibility and Population Density

The Accessibility and Population Density Heatmap **juxtaposes the supply (accessibility to locations) and the demand (population)** on a hexagonal grid. 

## 1. Explanation

With the **Accessibility and Population Density Heatmap**, it can be assessed which parts of a city have an **accessibility surplus** (indicating potential of settling further inhabitants) and which parts have a **density surplus** (indicating need for higher supply) in regard to various [Points-of-Interest (POIs)](../../general/glossary#point-of-interest-poi "What is a Point-of-Interest?") is. The ``POIs`` can thereby be chosen by the user.

The Accessibility and Population Density Heatmap can be used as an **supply vs. demand indicator** on the neighborhood, city or regional scale. The heatmap gives insights into the POI distribution and network connectivity on the supply side, and into population density on the demand side. Based on the equilbrium between supply and demand, the hexagons indicate areas with <i>accessibility surplus</i> (<span style={{color: "#4e9ecf"}}>blue</span>), areas with <i>balanced supply and demand</i>  (<span style={{color: "#c9c96f"}}>yellow</span>) and areas with <i>density surplus</i> (<span style={{color: "#e03157"}}>red</span>). It is suitable for directly **comparing different locations** within a chosen geographical scope. 

![Accessibility and Population Density Heatmap in GOAT](/img/indicators/heatmaps/comparison_accessibility_population/original_files/heatmap_en.png "Accessibility and Population Density Heatmap in GOAT")

:::info

By default, only population data is used to represent the demand. However, in reality, **further land use elements** such as employment and leisure sites may **create demand** for certain amenities, such as supermarkets and public transport stops. If locally available, employment and visitor data can be included to enrich these analyses.

:::

## 2. Which planning questions can be answered? 

Among others, the Accessibility and Population Density Heatmap can be used to answer the following planning questions:
- Which areas have an accessibility surplus?
- Which areas have a density surplus?
- Where is potential for redensification?
- Where is an improvement of accessibility to specific amenities or public transport stations needed?

## 3. How to use the indicator?

### Video Tutorial
<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754241640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="700" height="400"></iframe>

### Step-by-step guideline

1. Open the ``Thematic Data Filter`` <img src={thematicIcon} alt="thematic icon" style={{width: "25px"}}/> and select the POIs to analyze. 

![POI Selection in GOAT](/img/indicators/heatmaps/comparison_accessibility_population/original_files/pois_en.png "POI Selection in GOAT")

2. Go into the tab ``INDICATORS`` and activate the ``Accessibility and Population Density`` heatmap. The resulting heatmap shows areas with <i>accessibility surplus</i> in <span style={{color: "#4e9ecf"}}>blue</span>, areas with <i>balanced supply and demand</i> in <span style={{color: "#c9c96f"}}>yellow</span> and areas with <i>density surplus</i> in <span style={{color: "#e03157"}}>red</span>.

![Accessibility and Population Density Heatmap in GOAT](/img/indicators/heatmaps/comparison_accessibility_population/original_files/menu_en.png "Accessibility and Population Density Heatmap in GOAT")

:::tip Tip

Want to adjust the colours of the heatmap? See [Styling & Print](../../styling_and_print/).

:::

3. To further understand, where the values come from, it is helpful to play around with different background maps, such as the ``Aerial Image``. 

![Change Background Map in GOAT](/img/indicators/heatmaps/comparison_accessibility_population/original_files/background_en.png "Change Background Map in GOAT")

4. In this example, we can see an imbalance between supply and demand, as all supermarkets are located in a commercial area on one side of the highway, and one residential area is on the other side of the highway. Thus, supply is actually high, but not accessible for some residents as the highway acts as a huge barrier.

![Example Analysis in GOAT](/img/indicators/heatmaps/comparison_accessibility_population/original_files/example_en.png "Example Analysis in GOAT")

## 4. Technical details

<span style={{color: "#FF0000"}}>TODO</span> 

further technical details that were too complex for the "explanation" section

- "sort of LUPTAI analysis" but not solely for public transport stops

### Calculation

The Accessibility and Population Density Heatmap is the result of the intersection of the two heatmaps [Local Accessibility](local_accessibility/) and [Population Density](population/). 

![Combination](/img/indicators/heatmaps/comparison_accessibility_population/combination.webp)

In order to classify the accessibility levels that were computed for each grid cell, a classification based on percentiles is used. The following table shows how the percentiles of accessibility and population are calculated in each grid.

IMAGE

The "Accessibility and Population Density" heatmap is calculated as following:

<b> Index = Population Level – Accessibility Level </b>

and shows following result:

IMAGE

### Visualization

The population density heatmap is visualized using a **hexagonal grid** with an edge length of approximately 174 m per cell. 

<span style={{color: "#FF0000"}}>TODO:</span>  further things to mention?

## 5. Further readings

<span style={{color: "#FF0000"}}>TODO:</span>  
(Links to tutorials)  
Links to videos  
Related docs  

## 6. Resources

<span style={{color: "#FF0000"}}>TODO:</span>  
bibliography of cited literature