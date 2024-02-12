---
sidebar_position: 1
---

import thematicIcon from "/img/indicators/join/toolbox.webp"

# Join

The **Join** tool is used to append attributes from one layer to another using a matching attribute on both layers. 

## 1. Explanation

This tool facilitates the combination of two datasets. By defining relationships, the tool aligns data from both layers. The resulting output is a new layer that contains the attributes from the *Target Layer* and a new column that summarizes a chosen attribute from the *Join Layer*. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/indicators/join/join.png').default} alt="Join Schema" style={{ maxHeight: "400px", maxWidth: "200px", objectFit: "cover"}}/>
</div> 

GOAT uses the **"Inner Join"** operation to calculate a join which combines rows from a target and a join layer based on a related column between them. It only selects records that have matching values in both tables. This means that for every row in the target layer, there must be at least one row in the source layer to realise a successful match. Any rows that do not match will not be returned as a result.

## 2. Example use cases

- Summarizing population numbers from a table to a feature layer of zip-code areas (related column: zip-codes).
- Merge and aggregate the data from a household survey with the geometries of the census tract (related column: census tract).
- Joining the number of commuters from a table to a feature layer with the city boundaries (related column: city name). 


## 3. How to use the tool?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Data Management</code> menu, click on <code>Join</code>.</div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/indicators/join/overview.png').default} alt="Join Tool in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

<p> </p>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">  Select your <b>Target Layer</b> (the primary table or layer to which you want to add additional data). </div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select your <b>Join Layer</b> (the secondary table or dataset that contains the records and attributes to be inserted into the Target Layer). </div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Define the attribute which you like to use for matching the records of both layers. Therefore, pick your <b>Target Attribute</b>. </div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content"> Select the same attribute of the Join Layer as the <b>Join Attribute</b>. </div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content"> Select the statistical method to be used to join the attribute under <b>Statistics</b>. </div>
</div>

In the **Statistics** section, the user can choose between several statistical operations. Some methods are only available for specific data types. The following list provides an overview of the available methods:

| Method | Data Types | Description |
| -------|------| ------------|
| Count  | `string`,`number`    | Counts the number of non-null values in the selected column|
| Sum    | `number`   | Calculates the sum of all the numbers in the selected column|
| Mean   | `number`   | Calculates the average (mean) value of all numeric values in the selected column|
| Median | `number`   | Yields the middle value in the selected column's sorted list of numeric values|
| Min    | `number`   | Yields the minimum value of the selected column|
| Max    | `number`   | Yields the maximum value of the selected column|

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Select the <b>Join attribute</b> for which you like to apply the statistical operation.</div>
</div>

<div class="step">
  <div class="step-number">9</div>
  <div class="content"> As the last step, click on <code>Run</code>, and the result layer "Join" will be both added to the project and to the Datasets in your project folder.</div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/indicators/join/result.png').default} alt="Join Result in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 


:::tip Tip

Want to adjust the appearance of the result layer? Check out the [attribute-based styling](../../map/layer_style/smart_styling).

:::
