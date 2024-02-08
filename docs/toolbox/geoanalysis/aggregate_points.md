---
sidebar_position: 1
---
import thematicIcon from "/img/general/interface_overview/thematic_icon.webp"

# Aggregate Points

The **Aggregate Points** tool compiles and summarizes the characteristics and **total count of points** within each specified boundary area, along with any provided statistical data.

## 1. Explanation

The Aggregate Points tool is used to compile data within specified locations. It aggregates the characteristics of each point and uses **statistics** to calculate the total number of points within each **specified boundary** polygon. This tool is useful for analysing and understanding the distribution of points in a given spatial context.


<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/geoanalysis/aggregation/point_aggregation.png').default} alt="point aggregation" style={{ maxHeight: "600px", maxWidth: "600px", objectFit: "cover"}}/>
</div> 


## 2. Example use cases

- Identify areas with a high concentration of public facilities such as parks, hospitals or schools.
- Highlight areas with high traffic incidents or high public transport usage.
- Compilation of point data on natural resources such as water bodies or mineral deposits to produce resource distribution maps.

## 3. How to use the tool?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Geoanalysis</code> menu, click on <code>Aggregate Points</code>.</div>
</div>

<span style={{color: "#FF0000"}}>TODO: update the image</span> 

<img src={require('/img/geoanalysis/aggregation/agg_general.png').default} alt="aggregtion " style={{ maxHeight: "auto", maxWidth: "auto"}}/>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select your Layer.</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select your area of aggregation.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Select your <b>Area Type</b> (the areas that are used to aggregate the source layer. It can be a feature layer or a H3 grid.).</div>
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
  <div class="content">Click on <code>Run</code>.</div>
</div>

<span style={{color: "#FF0000"}}>TODO: Add a result image.</span>