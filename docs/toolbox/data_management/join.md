---
sidebar_position: 0
---

import thematicIcon from "/img/indicators/join/toolbox.webp"

# Join

The `Join` tool is used to append attributes from one layer to another using predefined attribute connections. 



## 1. Explanation

This functionality facilitates the combination of two separate datasets. By defining spatial relationships, the tool aligns geographic data from both layers. Similarly, attribute connections enable the merging of related data fields. The resulting output is a new layer that contains attributes from both original layers, allowing for integrated analysis of the combined data.


## 2. How to use the function?

### Video Tutorial
<span style={{color: "#FF0000"}}>TODO: add the video </span>  

### Step-by-step guideline

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/indicators/join/join_general.png').default} alt="target layer" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

<span style={{color: "#FF0000"}}>TODO: update the image </span>  

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/> </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under <code>Summarize data</code> menu, click on <code>Join</code></div>
</div>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">  Select your <a href="#input-features">Target Layer</a> </div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select your <a href="#input-features">Join Layer</a> </div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content"> Now, you should select your fields to match. Pick your  <a href="#input-features">Target Field</a> </div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content"> Select your <a href="#input-features">Join Field</a> </div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content"> As last step, select the method used to join the field under <a href="#statistics">Statistics</a> </div>
</div>


## 3. Technical Details

GOAT uses the **"Inner Join"** <img src= {require('/img/indicators/join/inner_join_icon.png').default}  width="1000px" alt="join" style={{width: "auto", height: "auto", maxHeight: "60px", maxWidth: "60px", objectFit: "cover"}}/>  operations to calculate join which combines rows from two or more tables based on a related column between them. It specifically selects records that have matching values in both tables. This means that for a row in the first table to be included in the result set, it must have a corresponding row in the second table. This type of join is particularly useful when you need to retrieve data that exists across multiple tables and is interrelated, ensuring that only the records with common values in both tables are selected for the final output.

### Input Features
- **Target Layer:** This term refers to the primary table or dataset where you want to integrate additional data. It's the destination layer that will be enriched by incorporating attributes from another layer. The Target Layer serves as the foundation for the join operation, determining the structure and extent of the final dataset. It is the layer that retains its original records, and to which the matching records from the Join Layer will be appended or merged.

- **Join Layer:** This identifies the secondary table or dataset that contains the records and attributes to be inserted into the Target Layer. The Join Layer is essentially the source of the new data that you want to combine with your existing data in the Target Layer. It is queried and matched against the Target Layer based on common fields, and its relevant data is then extracted to enhance or complete the information in the Target Layer.

- **Target Field:**  This refers to the specific column in the Target Layer that is used to match records with the Join Layer. It acts as a reference point for the join operation. In other words, it's the field (or column) in the table where you want to add the new information. This field determines how the records from the two layers are matched and combined.

- **Join Field:** This is used to match each record in the Join Layer to records in the Target Layer. It aligns the two sets of data based on shared values. When the values in the Join Field match those in the Target Field, the records from both layers are combined according to the rules of the join operation.

### Statistics

When running any join operation, you must select method for the selected column. Available methods are listed depend on the data type of the column.

| Method | Description |
| -------|-------------|
| Count  | Counts the number of non-null values in the selected column|
| Sum    | Calculates the sum of all the numbers in the selected column|
| Mean   | Calculates the average (mean) value of all numeric values in the selected column|
| Median | Yields the middle value in the selected column's sorted list of numeric values|
| Min    | Yields the minimum value of the selected column|
| Max    | Yields the maximum value of the selected column|

After all these steps, th result of the Join operation will be added to the `Layers` panel in GOAT.

## 3. Further readings

(Links to tutorials)  
Links to videos  
Related docs  
