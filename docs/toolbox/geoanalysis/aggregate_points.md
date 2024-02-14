---
sidebar_position: 1
---
import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";

# Aggregate Points

The **Aggregate Points** tool performs statistical analysis of points, e.g. **count, sum, min or max**, and aggregates the information on polygons.

## 1. Explanation

The Aggregate Points tool can be used to **analyse the characteristics of points within a given area**. It aggregates the information of the points and therewith allows to calculate the point **count**, the **sum** of point attributes or derive e.g. the **maximum** value of a certain point attribute within a polygon. As polygon layer, either a feature layer (e.g. city districts) or a hexagonal grid can be used. 


<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

  <img src={require('/img/geoanalysis/aggregation/point_aggregation.png').default} alt="Point Aggregation" style={{ maxHeight: "600px", maxWidth: "600px", objectFit: "cover"}}/>

</div> 


## 2. Example use cases

- Aggregating the population numbers on a hexagon grid.
- Deriving the sum of traffic accidents within a city district.
- Visualizing the average number of carsharing vehicles available per station on a district-level. 

## 3. How to use the tool?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Geoanalysis</code> menu, click on <code>Aggregate Points</code>.</div>
</div>


<img src={require('/img/geoanalysis/aggregation/agg_general.png').default} alt="Point Aggregation Tool in GOAT" style={{ maxHeight: "auto", maxWidth: "auto"}}/>


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
