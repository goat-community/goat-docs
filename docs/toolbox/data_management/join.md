---
sidebar_position: 0
---

import thematicIcon from "/img/indicators/join/toolbox.webp"

# Join

The **Join** tool is used to append attributes from one layer to another using a matching attribute on both layers. 

## 1. Explanation

This tool facilitates the combination of two datasets. By defining relationships, the tool aligns data from both layers. The resulting output is a new layer that contains the attributes from the target layer and new column that summarizes a chosen attribute from the source layer. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/indicators/join/join_icon.png').default} alt="join" style={{ maxHeight: "400px", maxWidth: "200px", objectFit: "cover"}}/>
</div> 

GOAT uses the **"Inner Join"** operation to calculate a join which combines rows from a target and a source layer based on a related column between them. It only selects records that have matching values in both tables. This means that for a row in the target layer there need to be at least one row in the source layer to realize a successful match. All rows with no match will not be returned as result.

## 2. Example use cases

- Summarize the count of population collected in a spreadsheet on a layer containing the zipcode geometries.
- Merge and aggregate the data from a household survey with the geomtries of the census tract.

TODO: Find some more examples

## 3. How to use the tool?

<span style={{color: "#FF0000"}}>TODO: add the video </span>  

<span style={{color: "#FF0000"}}>TODO: update the image </span>  

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/> </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Summarize data</code> menu, click on <code>Join</code></div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/indicators/join/join_general.png').default} alt="target layer" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

<p> </p>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">  Select your <b>Target Layer</b> (the primary table or layer to which you you want to add additional data) </div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select your <b>Join Layer</b> (the secondary table or dataset that contains the records and attributes to be inserted into the Target Layer) </div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content"> Now, you should select your fields to match. Pick your <b>Target Field</b> (the column in the Target Layer that is used to match records with the Join Layer) </div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content"> Select your <b>Join Field</b> the column in the Join Layer to match the records in the Target Layer) </div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content"> Select the statistical method to be used to join the field under <b>Statistics</b> </div>
</div>

To aggregate the in the **Statistics** section, you have to select the method and attribute to be used. Available methods are listed in the following. The available methods depend on the data type of the chosen attribute:

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


