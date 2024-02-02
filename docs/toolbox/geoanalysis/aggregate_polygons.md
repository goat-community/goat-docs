---
sidebar_position: 3
---

import thematicIcon from "/img/general/interface_overview/thematic_icon.webp"

# Aggregate Polygons

The **Aggregate Polygon** tool simplifies spatial data, improving the efficiency of datasets and providing clearer insights into **spatial patterns** and **relationships**.

## 1. Explanation

Aggregate Polygons, is the tool for combining or aggregating data from different spatial layers based on their **spatial relationships**. These spatial relationships are calculated using different **statistical approaches**. This technique is useful for analysing and visualising how different geographical entities **interact**, making them easier to analyse and interpret.

The example below shows the geometry of the source layer remains the same, while its attribute table is merged with that of the aggregated layer.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/geoanalysis/aggregation/polygon_aggregation.png').default} alt="polygon_aggregation" style={{ maxHeight: "600px", maxWidth: "800px", objectFit: "cover"}}/>
</div> 


## 2. Example use cases

- How many buildings are there in Augsburg?
- How many parks are there in a defined zipcode area?
- What is the population density around Munich?

## 3. How to use the function?

### Video Tutorial


<span style={{color: "#FF0000"}}>TODO: create video tutorial </span>

### Step-by-step guideline

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Geoanalysis</code> menu, click on <code>Aggregate Polygons</code>.</div>
</div>

<span style={{color: "#FF0000"}}>TODO: add the image</span> 


<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select your <code>Source Layer</code> (primary layer of interest).</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select your <code>area of aggregation</code> (this layer contains additional data that you want to analyze in relation to the source layer).</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Select your <b>Area Type</b> (the areas used to aggregate the source layer. This can be a feature layer or an H3 grid. The area calculates dynamic fields by looking at the intersection of polygons (touching geometries) based on their geometrical size).</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Select your <b>Field</b>, <b>Method</b> and <b>Field Group</b> (the field in the source layer that is used to group the aggregated points.) for Statistics.</div>
</div>

To aggregate in the **Statistics** section, you have to select the method. Available methods are listed in the following. The available methods depend on the data type of the chosen attribute:

| Method | Type | Description |
| -------|------| ------------|
| Count  | `string`,`number`    | Counts the number of non-null values in the selected column|
| Sum    | `number`   | Calculates the sum of all the numbers in the selected column|
| Mean   | `number`   | Calculates the average (mean) value of all numeric values in the selected column|
| Median | `number`   | Yields the middle value in the selected column's sorted list of numeric values|
| Min    | `number`   | Yields the minimum value of the selected column|
| Max    | `number`   | Yields the maximum value of the selected column|


<div class="step">
  <div class="step-number">7</div>
  <div class="content">Select the <b>Weighted by Intersection Area</b> (the aggregated values are weighted by the share of the intersection area between the source layer and the aggregation layer.).</div>
</div>

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Click on <code>Run</code>.</div>
</div>


:::tip NOTE
If you select H3 grid as the <code>Area Type</code>, you must define the **resolution** of the H3 grid.
:::

## 4. Technical details

further technical details that were too complex for the "explanation" section

## 5. Further readings

(Links to tutorials)  
Links to videos  
Related docs  

## 6. Resources

bibliography of cited literature



add general image for aggregations