---
sidebar_position: 21
---


# Filter

The **Filter** tool is used to limit the data that is visible on the map.

## 1. Explanation

The **Filter**  <img src={require('/img/filter/filter_icon.png').default} alt="filter icon" style={{ maxHeight: "30px", maxWidth: "30px"}}/> tool allows users to specify criteria to display only certain elements from a larger dataset. This tool helps to manage large amounts of geospatial data and allows users to focus on the information that is most relevant to their needs.

The tool can be used for the attributes of both **point layers** and **polygon layers** with different types of data (`number` and `string`).

Please note that the **filter operation does not alter the original data**. This feature facilitates efficient handling of large datasets by preserving the applied filters. As a result, you can **use the filtered data for various tools within GOAT**, such as [scenario analysis](/docs/scenarios/buildings.md) and [heatmap calculations](/docs/toolbox/accessibility_indicators/heatmap_closest_facilities.md).


## 2. Example use cases
- Show the most populated regions around Munich.
- Show only the nurseries in Germany.
- Show the regions that have more than one airport.


## 3. How to use the filter?

### Video Tutorial

<span style={{color: "#FF0000"}}>TODO: add the video </span>  

### Step-by-step Guideline

#### Single Expression Filtering

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Select the layer which you want to apply filter. </div>
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
  <div class="content">The active layer will be automatically selected. Select the attribute you want to apply filter. </div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select an expression. 
  <p></p>
  <b>Note:</b> The expression will be change according to the data type of the attribute you selected on <b>Step 3</b>.</div>
</div>

The **filter expressions** available for `number` (numerical data) and `string` (text data) are given below:

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
You can select more than one entities for **"includes"** and **"excludes"** expressions.
:::

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Define your filter criteria. The map will be automatically updated with your filtered data. </div>
</div>

-------------------------------------------------------------------------------------------------

#### Multiple Expressions Filtering

:::tip NOTE
Mutli-filter operation should be applied carefully and logically to achieve the best result.
:::

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Select the layer which you want to apply filter.  </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Click on <code>Filter</code><img src={require('/img/filter/filter_icon.png').default} alt="filter icon" style={{ maxHeight: "30px", maxWidth: "30px"}}/>.</div>
</div>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">The active layer will be automatically selected. Select the attribute you want to apply filter. </div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select an expression. </div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Define your filter criteria. The map will be automatically updated with your filtered data. </div>
</div>

<span style={{color: "#FF0000"}}>TODO: add here a general ss when one filter selected. </span>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Click on <code>Create Expression</code> to save your current filter. When you create the expression a new seciton will be appear to create a new filter. </div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Define your new filter criteria by following the steps above. </div>
</div>

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Select your intersecting criteria <b>"AND"</b> <b>"OR"</b>. </div>
</div>

<div class="step">
  <div class="step-number">9</div>
  <div class="content">The map will be automatically updated with your filtered results.</div>
</div>


:::tip NOTE
You can delete your filters any time by clicking on three dots <img src={require('/img/filter/3dots.png').default} alt="filter icon" style={{ maxHeight: "40px", maxWidth: "40px"}}/> next to the expression and then click on `Delete`.
:::


## 4. Further readings

<span style={{color: "#FF0000"}}>TODO: edit here </span>  
(Links to tutorials)  
Links to videos  
Related docs  


