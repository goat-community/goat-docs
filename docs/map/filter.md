---
sidebar_position: 21
---


# Filter

The **Filter** can be used to limit the data that is visible on the map. You can thereby either filter by **logic expression** (e.g. only vizualizing supermarkets with a certain name) or by **spatial expression** (e.g. only show points within a specific bounding box)

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/filter/filter.gif').default} alt="filter general" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

## 1. Explanation

The **Filter** <img src={require('/img/filter/filter_icon.png').default} alt="filter icon" style={{ maxHeight: "30px", maxWidth: "30px"}}/> allows users to **display only certain elements** from a larger dataset based on specific criteria. This tool helps to visualize selected elements from a large geospatial dataset and therewith allows users to focus on the information that is most relevant to their needs.

Logic and spatial expressions can be added based on the attributes of **point layers** and **polygon layers** with different types of data (`number` and `string`).

:::info

The **filter operation does not alter the original data**. But you can use the filtered data for various tools within GOAT, such as [scenario analysis](../scenarios/buildings) and [heatmap calculations](../toolbox/accessibility_indicators/heatmap_closest_facilities).

:::



## 2. Example use cases
- Show all cities in Germany that have more than 50.000 inhabitants.
- Show all carsharing stations of a certain operator.
- Show the regions that have more than one airport.


## 3. How to use the filter?

### Single Expression Filtering

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Select the layer to which you want to apply the filter. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Click on <code>Filter</code> <img src={require('/img/filter/filter_icon.png').default} alt="filter icon" style={{ maxHeight: "30px", maxWidth: "30px"}}/>. </div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/filter/filter_general.png').default} alt="filter general" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 
<p></p>
<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select the layer, on which you like to apply the filter.</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Click on <code>+ Create Expression</code>.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Select if you like to filter based on a <b>logical expression</b> or a <b>spatial expression</b>. 
  </div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Select the <code>Target Attribute</code>, i.e. the attribute which you like to use for the filtering</div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Select the concrete <code>Expression</code> that you want to apply. <i>Note: the available options vary based on the data type of the attribute selected in Step 6.</i>
  </div>
</div>

The **Filter Expressions** available for `number` (numerical data) and `string` (text data) are given below:

| Expressions for `number` | Expressions for `string` |
| -------|----|
| is  | is |
| is not  | is not |
| includes  | includes  |
| excludes  |  excludes |
| is at least  | starts with |
| is less than | ends with |
| is at most | contains the text |
| is greater than | doesn't contain the text |
| is between | is empty string |
|  | is not empty string |


:::tip Hint
For the expressions **"includes"** and **"excludes"**, multiple values can be selected.
:::

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Define your filter criteria. The map will be automatically updated with your filtered data. </div>
</div>


### Multiple Expressions Filtering

If you like, you can **combine multiple filters** for multi expression filtering. Therefore, simply repeat the Steps 4-8 above for each additional expression. In the field <code>Logic Operator</code>, you can choose between the combination logics **AND** and **OR**. 
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/filter/logic_operators.png').default} alt="filter general" style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "cover"}}/>
</div> 

When choosing **AND**, only those elements will be shown for which all filter expressions are true. When choosing **OR**, elements will be shown as soon as one of the filter expressions is true.


:::tip NOTE
Multi expression filtering should be applied carefully and logically to achieve the best result.
:::

### Delete Expressions and Filters

You can either **remove single expressions** from the filter by clicking on the three dots <img src={require('/img/filter/3dots.png').default} alt="filter icon" style={{ maxHeight: "40px", maxWidth: "40px"}}/> next to the expression and then click on `Delete`.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/filter/delete_expression.png').default} alt="filter general" style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "cover"}}/>
</div> 

Or you can **remove the whole filter** by clicking on `Clear Expression` on the bottom of the Filter menu. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/filter/clear_expression.png').default} alt="filter general" style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "cover"}}/>
</div> 




