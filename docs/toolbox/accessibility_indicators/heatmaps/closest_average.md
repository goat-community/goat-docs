---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";

# Heatmap - Closest Average
**Closest-average-based Heatmaps** use a color-coded map to visualize the average travel time to points (such as [POI](../../../further_reading/glossary#point-of-interest-poi "What is a POI?")) from surrounding areas.

## 1. Explanation

Visualized as a color-coded hexagonal grid, heatmaps take into account real-world transport and street networks to compute travel times. After specifying a *routing type* (Walk, Bicycle, etc.), *opportunity layer* and *travel time limit*, the result shall display a color-coded hexagonal grid for all areas accessible under these conditions. The color scale refers to the average travel time.

:::info INFO

An `Opportunity layer` contains [geographic point](../../../data/data_types "What are geographic points?") data. Select one or more such layers containing your destination points (opportunities) as input to the heatmap.

:::

With the configurable *number of destinations* property, you can restrict the calculation to consider only the *n* closest opportunities. This produces an easy-to-understand visualization which can be used to identify variation in average travel times even at a city or regional scale. The computed value for each cell in the heatmap represents the average travel time to the nearest *n* destinations.

:::tip Pro tip

Described succinctly, accessibility heatmaps are a visualization representing *access* from various unspecified origins, to one or more specified destinations. This is in contrast to catchment areas which represent *egress* from one or more specified origins to various unspecified destinations.

:::

🚨🚨 TODO: Add image here
  
:::info 

Heatmaps are available in certain regions. Upon selecting a `Routing type`, a **geofence** will be displayed on the map to highlight supported regions.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/toolbox/accessibility_indicators/heatmaps/closest_average_based/geofence.png').default} alt="Geofence for Closest-average-based Heatmaps in GOAT" style={{ maxHeight: "400px", maxWidth: "400px", alignItems:'center'}}/>
</div> 


If you would like to perform analyses beyond this geofence, feel free to [contact us](https://plan4better.de/en/contact/ "Contact us"). We would be happy to discuss further options.

:::

## 2. Example use cases

 - Do residents in certain areas have longer average travel times to amenities than others?

 - Is there a significant difference in average travel times to amenities across different neighborhoods?

 - How does the average travel time to amenities vary across different modes of transport?

 - How does the average travel time vary across different types of amenities?
 
 - Are there areas with high average travel times to amenities that could benefit from improved transport infrastructure?

 - If standards require that a minimum number of amenities be accessible within a certain travel time, which areas meet these standards?

## 3. How to use the indicator?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Accessibility Indicators</code> menu, click on <code>Heatmap Closest Average</code>.</div>
</div>

### Routing

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Pick the <code>Routing Type</code> you would like to use for the heatmap.</div>
</div>

<Tabs>

<TabItem value="walk" label="Walk" default className="tabItemBox">

#### Walk

Considering all paths accessible by foot.

:::tip Hint

For further insights into the Routing algorithm, visit [Routing/Walk](../../routing/walking).

:::

</TabItem>
  
<TabItem value="cycling" label="Bicycle/Pedelec" className="tabItemBox">

#### Bicycle/Pedelec

Considering all paths accessible by bicycle. Depending on the surface, smoothness and slope of the different street segments, the speed is adjusted accordingly. For Pedelecs, slopes are considered with a lower impedance than for standard bicycles.

:::tip Hint

For further insights into the Routing algorithm, visit [Routing/Bicycle](../../routing/bicycle). In addition, you can check this [Publication](https://doi.org/10.1016/j.jtrangeo.2021.103080).

:::

</TabItem>

<TabItem value="car" label="Car" className="tabItemBox">

#### Car

Considering all paths accessible by car. This routing mode takes into account speed limits and one-way access restrictions for computing car accessibility.

:::tip Hint

For further insights into the Routing algorithm, visit [Routing/Car](../../routing/car).

:::

</TabItem>

</Tabs>

### Opportunities

Opportunities are essentially point-based data (such as [POI](../../further_reading/glossary#point-of-interest-poi "What is a POI?")) for which you would like to compute a heatmap. These are the "destinations" (such as transit stations, schools, other amenities, or your own custom point-based data) while surrounding areas will be "origins" for which an accessibility value will be computed and visualized.

Additionally, you may create more opportunities via the `+ Add Opportunity` button at the bottom of the drawer. All opportunity layers will be combined to produce a unified heatmap.

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select your <code>Opportunity Layer</code> from the drop-down menu. This can be any previously created layer containing point-based data.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Choose a <code>Travel Time Limit</code> for your heatmap. This will be used in the context of your previously selected <i>Routing Type</i>.</div>
</div>

:::tip Hint

For defining which travel time limits are suitable for which amenity, the ["Standort-Werkzeug"](https://www.chemnitz.de/chemnitz/media/unsere-stadt/verkehr/verkehrsplanung/vep2040_standortwerkzeug.pdf) of the City of Chemnitz can provide helpful guidance.

:::

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Specify the <code>Number of destinations</code> which should be considered while computing the average travel time.</div>
</div>

:::tip Hint

As the *Number of destinations* parameter is specified once per opportunity layer, you have the flexibility to supply different values for each opportunity layer. This can be useful if distinct types of amenities have varying standards for accessibility.

:::

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Click <code>Run</code> to start the calculation of the heatmap.</div>
</div>

:::tip Hint

Depending on your configuration, the calculation might take a few minutes. The [status bar](../../workspace/home#status-bar) displays current progress.

:::

### Results

<div class="step">
  <div class="step-number">10</div>
  <div class="content">Once the calculation is complete, a result layer will be added to the map. This <i>Heatmap Closest Average</i> layer will contain your color-coded heatmap.
  <p></p>
  Clicking on any of the heatmap's hexagonal cells will reveal the computed average travel time value for this cell.</div>
</div>


🚨🚨 TODO: Add image/GIF of calculation process and result


:::tip Tip

Want to style your heatmaps and create nice-looking maps? See [Styling](../../map/layer_style/styling).

:::

## 4. Technical details

### Calculation

Once all input opportunity layers are combined, a grid of surrounding hexagonal cells is identified. This is done by considering cells where at least one opportunity is accessible taking into account the specified *routing type* and *travel time limit*. Next, the average travel time for each cell within this grid is computed, considering the nearest *n* opportunities as specified in the opportunity layer.

Average travel time formula:

🚨🚨 TODO: Add formula image

where the average travel time for cell **i** is the sum of upto **n** travel times from cell **i** to opportunity **j** (**tij**) divided by the number of opportunities **n** which must be less than the *Number of destinations* parameter specified.

### Classification
In order to classify the accessibility levels that were computed for each grid cell (for color-coded visualization), a classification based on quantiles is used.

### Example of calculation

🚨🚨 TODO: Add example calculation image with varying number of destinations specified

### Visualization 

Heatmaps in GOAT utilize **[Uber's H3 grid-based](../further_reading/glossary#h3-grid)** solution for efficient computation and easy-to-understand visualization. Behind the scenes, a pre-computed travel time matrix for each *routing type* employs this solution and is queried and further processed in real-time to compute accessibility and produce a final heatmap.

## 5. References

🚨🚨 TODO: Check if any references are available
