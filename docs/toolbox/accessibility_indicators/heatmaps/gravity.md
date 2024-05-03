---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";


# Heatmap - Gravity
**Gravity-based Heatmaps** use a color-coded map to visualize the accessibility of a points cluster, eg.: [POIs](../../further_reading/glossary#point-of-interest-poi "What is a POI?"). 

## 1. Explanation

Visualized as a color-coded hexagonal grid, heatmaps take into account real-world transport and street networks, to compute accessibility. Specify a routing mode (`Walk` or `Bicycle`), select `Opportunity Layer`. Set a maximum travel duration. The result shall display the color-coded hexagonal grid for all the areas accessible under those conditions. The color scale refers to the local accessibility.

:::info INFO

The `Opportunity Layer` is a layer with points data type. View more in [**Data Types**](../data/data_types).

:::

Unique to the **Gravity-based Heatmap**, customizable properties such as *sensitivity*, the *impedance function* and *destination potential* give you minute control over the method used and metadata taken into account while computing the accessibility value for an area. Influenced by these properties, the accessibility of a point can model complex real-world human behavior and is a powerful measure for transport and accessibility planning.

:::tip Pro tip

Described succinctly, Accessibility Heatmaps are a visualization representing *access* from various unspecified origins, to one or more specified destinations. This is in contrast to catchment areas which represent *egress* from one or more specified origins to various unspecified destinations.

:::

![Gravity-based Heatmap in GOAT](/img/toolbox/accessibility_indicators/heatmaps/gravity_based/heatmap_gravity_based.webp "Gravity-based Heatmap in GOAT")
  
:::info 

Heatmaps are available for specific regions. 
Upon selecting a `Routing Mode` the **geofence** for heatmap will be displayed on the map, indicating supported regions.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/toolbox/accessibility_indicators/heatmaps/gravity_based/geofence.png').default} alt="Geofence for Gravity-based Heatmaps in GOAT" style={{ maxHeight: "400px", maxWidth: "400px", alignItems:'center'}}/>
</div> 


If you would like to perform analyses beyond this geofence, feel free to [contact us](https://plan4better.de/en/contact/ "Contact us"). We would be happy to discuss further options.

:::

## 2. Example use cases

 - Which neighborhoods or areas have limited access to public amenities, such as parks, recreational facilities, or cultural institutions, and may require targeted interventions to improve accessibility?

 - Are there areas with high potential for transit-oriented development or opportunities for improving non-motorized transportation infrastructure, such as bike lanes or pedestrian-friendly streets?

 - What is the impact of a new amenity on local accessibility?

 - Is there potential to expand the availability of services such as bike sharing or car sharing stations?

 - How does the accessibility in various neighborhoods compare when taking into account the qualitative aspects of amenities (such as frequency of service at bus stops, size of supermarkets, capacity of schools, etc)?

 - What is the real-world accessibility of public transport stations when travel times to these stations impact their accessibility in a non-linear way?



## 3. How to use the indicator?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Accessibility Indicators</code> menu, click on <code>Heatmap Gravity</code>.</div>
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

### Configuration

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Pick the <code>Impedance Function</code> you would like to use for the heatmap.</div>
</div>

<Tabs>

<TabItem value="gaussian" label="Gaussian" default className="tabItemBox">

#### Gaussian

This function computes accessibilities according to a Gaussian curve, influenced by the `sensitivity` and `destination_potential` you define. More details about *sensitivity* and *destination_potential* in the next section.

**Simplified Explanation**

Typically, a bus stop ten minutes away would presumably be twice as accessible as a bus stop twenty minutes away. However, the Gaussian function allows you to model an additional aspect of human behaviour. Leveraging the *sensitivity* you define, a bus stop ten minutes away could actually be 2.5 times as accessible as a bus stop twenty minutes away. This introduces non-linearity in the relationship between travel time and accessibility which often represents real-world behaviour more accurately.

</TabItem>
  
<TabItem value="linear" label="Linear" default className="tabItemBox">

#### Linear

:::info coming soon

Documentation of the functionality will be online soon. 🧑🏻‍💻

:::

</TabItem>

<TabItem value="exponential" label="Exponential" default className="tabItemBox">

#### Exponential

:::info coming soon

Documentation of the functionality will be online soon. 🧑🏻‍💻

:::

</TabItem>

<TabItem value="power" label="Power" default className="tabItemBox">

#### Power

:::info coming soon

Documentation of the functionality will be online soon. 🧑🏻‍💻

:::

</TabItem>

</Tabs>

### Opportunities

Opportunities are essentially [POIs](../../further_reading/glossary#point-of-interest-poi "What is a POI?") or point-based data for which you would like to compute a heatmap. These are the "destinations" (such as transit stations, schools, other amenities, or your own custom point-based data) while surrounding areas will be "origins" for which an accessibility value will be computed and visualized.

Additionally, you may create more opportunities via the `+ Add Opportunity` button at the bottom of the drawer. All opportunity layers will be combined to produce a unified heatmap.

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Select your <code>Opportunity Layer</code> from the drop-down menu. This can be any previously created layer containing point-based data.</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Choose a <code>Travel Time Limit</code> for your heatmap. This will be used in the context of your previously selected <i>Routing Type</i>.</div>
</div>

:::tip Hint

For defining which travel time limits are suitable for which amenity, the ["Standort-Werkzeug"](https://www.chemnitz.de/chemnitz/media/unsere-stadt/verkehr/verkehrsplanung/vep2040_standortwerkzeug.pdf) of the City of Chemnitz can provide helpful guidance.

:::

<div class="step">
  <div class="step-number">7</div>
  <div class="content">If required, choose a <code>Destination Potential Field</code>. This must be a numeric field from your <i>Opportunity Layer</i> which will be used as a coefficient by the accessibility function.</div>
</div>

:::tip Pro-tip

The *destination_potential* is a useful way to prioritize certain opportunities over others. For example, let's suppose a bus stop is nearer than another, therefore receiving a higher accessibility score due to its proximity. However, the bus stop farther away is served by more routes, providing riders with frequent service. The *destination_potential* allows you to use this additional property (such as the number of routes serving a bus stop) to assign opportunities a "potential" and employ qualitative information to compute accessibility.

:::

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Specify a <code>Sensitivity</code> value. This must be numeric and will be used by the heatmap function to determine how accessibility changes with increasing travel time.</div>
</div>


<div class="step">
  <div class="step-number">9</div>
  <div class="content">Click <code>Run</code> to start the calculation of the heatmap.</div>
</div>

:::tip Hint

Depending on your configuration, the calculation might take a few minutes. The [status bar](../../workspace/home#status-bar) displays current progress.

:::

### Results

<div class="step">
  <div class="step-number">10</div>
  <div class="content">Once the calculation is complete, a result layer will be added to the map. This <i>Heatmap Gravity</i> layer will contain your color-coded heatmap.
  <p></p>
  Clicking on any of the heatmap's hexagonal cells will reveal the computed accessibility value for this cell.</div>
</div>


![Heatmap Gravity-Based Calculation Result in GOAT](/img/toolbox/accessibility_indicators/heatmaps/gravity_based/heatmap_gravity_result.png "Heatmap Gravity-Based Calculation Result in GOAT")


:::tip Tip

Want to style your heatmaps and create nice-looking maps? See [Styling](../../map/layer_style/styling).

:::

## 4. Technical details

### Calculation
The calculation of the heatmap is calculated with the help of gravity-based measures and can be operationalized as:

*Accessibility Formula:*

![Accessibility Formula](/img/toolbox/accessibility_indicators/heatmaps/gravity_based/place-based_accessibility_measures.webp "Accessibility Formula")

where the accessibility A of origin i is the sum of all opportunities O available at destinations j weighted by some function of the travel time tij between i and j. GOAT uses the modified Gaussian function as an impedance function for the calculation:

*Modified Gaussian, (Kwan,1998):*

![Modified Gaussian, (Kwan,1998)](/img/toolbox/accessibility_indicators/heatmaps/gravity_based/impedance_formulas/modified_gaussian.png "Modified Gaussian, (Kwan,1998)")

#### GOAT uses the following formulas for its impedance functions:

*Inverse Power, (Kwan,1998):*

![Inverse Power, (Kwan,1998)](/img/toolbox/accessibility_indicators/heatmaps/gravity_based/impedance_formulas/inverse_power.png "Inverse Power, (Kwan,1998)")

*Negative Exponential, (Kwan,1998):*

![Negative Exponential, (Kwan,1998)](/img/toolbox/accessibility_indicators/heatmaps/gravity_based/impedance_formulas/negative_exponetial.png "Negative Exponential, (Kwan,1998)")

*Cumulative Opportunities Linear, (Kwan,1998):*

![Cumulative Opportunities Linear, (Kwan,1998)](/img/toolbox/accessibility_indicators/heatmaps/gravity_based/impedance_formulas/cumulative_opportunities_linear.png "Cumulative Opportunities Linear, (Kwan,1998)")

Travel times are computed in minutes. For a maximum travel time of 30 minutes, destinations that are further than 30 minutes are considered non-accessible and therefore not considered in the calculation of the accessibility.
The *sensitivity* parameter defines how accessibility changes with increasing travel time. As the *sensitivity* parameter is decisive when measuring accessibility, GOAT allows you to adjust them. The following graphs show the influence of the *sensitivity* parameter on accessibility.

🚨🚨 TODO: Add sensitivity index images (currently not implemented in GOAT)

Similarly, the *destination potential* can be changed. Thus, for example, one POI type (e.g. hypermarkets) can be assigned a higher accessibility effect than other POI types (e.g. discount supermarkets).

### Classification
In order to classify the accessibility levels that were computed for each grid cell (for color-coded visualization), a classification based on quantiles is used.

### Example of calculation
#### Calculation travel times
The following example illustrates how the local accessibility heatmap is computed. The travel times are calculated for each grid cell to the concerning destination on the street network.

![Hexagonal Grid on Heatmap](/img/toolbox/accessibility_indicators/heatmaps/gravity_based/Traveltime_grid.webp "Hexagonal Grid on Heatmap")

For the hexagon shown here, the calculation yields the following results, depending on the sensitivity parameter:

##### Uniform sensitivity parameter:
🚨🚨 TODO: Add image for accessibility calculation in new GOAT v2.0

##### Varying sensitivity parameter for Hypermarket:
🚨🚨 TODO: Add image for accessibility calculation in new GOAT v2.0

Applied in GOAT, the following differences arise:

#### Calculation with uniform sensitivity parameter
In the first example, the accessibility for grocery shops in 15 min is calculated using a uniform sensitivity parameter (β=300,000) for all shops. The result looks like this:

![Local Accessibility to grocery shops](/img/toolbox/accessibility_indicators/heatmaps/gravity_based/Local_accessibility_grocery.webp "Local Accessibility to grocery shops")

#### Calculation with different sensitivity parameters
In the second example, the accessibility of grocery shops in 15 min is performed using different sensitivity parameters (β=300,000 and β=400,000). This means that the sensitivity parameter depends on the different grocery shop types. For this example, we used β=400,000 for hypermarkets and β=300,000 for discounters and supermarkets. This gives the following result:

🚨🚨 TODO: Image for result with different sensitivity parameters

By comparing the two results, you can get a sense of the impact *sensitivity* has on accessibility.

### Scientific background

🚨🚨 TODO: Is this available?

### Visualization 

Heatmaps in GOAT utilize **[Uber's H3 grid-based](../further_reading/glossary#h3-grid)** solution for efficient computation and easy-to-understand visualization. Behind the scenes, a pre-computed travel time matrix for each *routing type* employs this solution and is queried and further processed in real time to compute accessibility and produce a final heatmap.

## 5. Further readings

🚨🚨TODO: Not sure if this is available for heatmaps?

## 6. References

Kwan, Mei-Po. 1998. “Space-Time and Integral Measures of Individual Accessibility: A Comparative Analysis Using a Point-Based Framework.” Geographical Analysis 30 (3): 191–216. [https://doi.org/10.1111/j.1538-4632.1998.tb00396.x](https://doi.org/10.1111/j.1538-4632.1998.tb00396.x).

Vale, D.S., and M. Pereira. 2017. “The Influence of the Impedance Function on Gravity-Based Pedestrian Accessibility Measures: A Comparative Analysis.” Environment and Planning B: Urban Analytics and City Science 44 (4): 740–63.  [https://doi.org/10.1177%2F0265813516641685](https://doi.org/10.1177%2F0265813516641685).

Higgins, Christopher D. 2019. “Accessibility Toolbox for R and ArcGIS.” Transport Findings, May.  [https://doi.org/10.32866/8416](https://doi.org/10.32866/8416).