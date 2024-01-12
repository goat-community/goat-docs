---
sidebar_position: 0
---

import thematicIcon from "/img/indicators/join/toolbox.webp"

# Join

The **Join** tool is used to append attributes from one layer to another using predefined attribute connections. 

## 1. Explanation

This functionality facilitates the combination of two separate datasets. By defining relationships, the tool aligns data from both layers. The resulting output is a new layer that contains attributes from both layers, allowing for integrated analysis of the combined data.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/indicators/join/join_icon.png').default} alt="join" style={{ maxHeight: "400px", maxWidth: "200px", objectFit: "cover"}}/>
</div> 

GOAT uses the **"Inner Join"** operations to calculate join which combines rows from two tables based on a related column between them. It specifically selects records that have matching values in both tables. This means that for a row in the first table to be included in the result set, it must have a corresponding row in the second table. This type of join is particularly useful when you need to retrieve data that exists across multiple tables and is interrelated, ensuring that only the records with common values in both tables are selected for the final output.

## 2. Which tasks can be fulfilled?

For what can this function be used? Among others, Join feature can be used to accomplish the following tasks:

- Join information from a table without geometry with a [feature layer](docs/data/layer_types.md). 

*For example, if you have the zipcode information of a region without geometry and you have another table containing the geometry of the region, you can merge the geometries and zipcodes using zipcode key.*


### Video Tutorial
<span style={{color: "#FF0000"}}>TODO: add the video </span>  

### Step-by-step guideline

<span style={{color: "#FF0000"}}>TODO: update the image </span>  

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/> </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under <code>Summarize data</code> menu, click on <code>Join</code></div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/indicators/join/join_general.png').default} alt="target layer" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

<p> </p>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">  Select your <b>Target Layer</b> (the primary table or dataset where you want to integrate additional data) </div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select your <b>Join Layer</b> (the secondary table or dataset that contains the records and attributes to be inserted into the Target Layer) </div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content"> Now, you should select your fields to match. Pick your <b>Target Field</b> (the specific column in the Target Layer that is used to match records with the Join Layer) </div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content"> Select your <b>Join Field</b> (to match each record in the Join Layer to records in the Target Layer) </div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content"> Select the method used to join the field under <b>Statistics</b> </div>
</div>

When running **Statistics** in join operation, you must select method for the selected column. Available methods are listed depend on the data type of the column.

| Method | Type | Description |
| -------|------| ------------|
| Count  | `string`,`number`    | Counts the number of non-null values in the selected column|
| Sum    | `number`   | Calculates the sum of all the numbers in the selected column|
| Mean   | `number`   | Calculates the average (mean) value of all numeric values in the selected column|
| Median | `number`   | Yields the middle value in the selected column's sorted list of numeric values|
| Min    | `number`   | Yields the minimum value of the selected column|
| Max    | `number`   | Yields the maximum value of the selected column|


<div class="step">
  <div class="step-number">8</div>
  <div class="content"> As the last step, click on <code>Run</code>, and the result will be both added to the project and to the Data Explorer in your project folder</div>
</div>


## 3. Further readings

<span style={{color: "#FF0000"}}>TODO: edit here </span>  
(Links to tutorials)  
Links to videos  
Related docs  


