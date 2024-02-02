---
sidebar_position: 20
---




# Core Styling Elements


By using **smart mapping** options, GOAT allows you experiment with many styling options. The style suggestions you get when using the <code>Layer Design</code> option depend on the **type of data** you have. You can change the look of your layer and see the changes instantly on the map once you've decided how you want to present it - for example, using circles or colors to indicate POIs. GOAT allows you to adjust visual aspects such as **strokes**, **opacity** and **color ramps**.


:::tip HINT
When you make styling adjustments to a layer, GOAT ensures that these **changes are saved independently**. This means that even if you remove your dataset from the project, **the styling modifications you've made will still be accessible** and can be applied consistently in the future.
:::


:::tip HINT
For **smart styling** options, please visit [Attribute-based Styling](../layer_design/smart_styling)
:::

## Color Styles

### Fill Color

Fill color is used to represent the **interior** of point or polygon features on a map. Fill color is an aspect of cartography and GIS visualisation because it helps to improve the overall readability of the map. For color types, you can check [Color Picker](#color-picker).

#### Opacity

To adjust the opacity of your layer styles for Fill Color, simply change the value **between 0 and 1**. This numerical scale allows you to define the exact level of opacity you want, where **0 is full transparency** and **1 is full opacity**. Adjust the opacity to your preference, either by using the slider or by typing the exact level directly into the text box provided.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right'}}>
  <img src={require('/img/styling/opacity.png').default} alt="opacity" style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "cover"}}/>
</div> 


### Stroke Color

Stroke color refers to the color applied to the **outlines or edges** of map features such as polygons, lines and points. It is used to delineate the edges of spatial entities, distinguishing them from one another and enhancing their visibility on the map. For color types, you can check [Color Picker](#color-picker).

### Stroke Width

This feature gives you the flexibility to change **line thickness**. Adjust the line width to your preference, either by using the width slider or by typing the exact size directly into the text box provided.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right'}}>
  <img src={require('/img/styling/stroke_width.png').default} alt="stroke width" style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "cover"}}/>
</div> 

### Color Picker

The <code>Layer Design</code> section in GOAT allows you to change the **Fill Color** and **Stroke Color** of your data. You can either set the colors from the **"Color Picker"** by defining **hex code** or **RGB values**, or you can select the color you want from the **"Preset Colors"**.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/fill_stroke.gif').default} alt="fill-stroke-color" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

<span style={{color: "#FF0000"}}> Update the gif </span> 

### Radius

This option allows you to change the **radius of point datasets**. To adjust the predefined radius, you can either use the Radius slider to make incremental changes, or enter the desired radius size directly in the text box for precise control.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right'}}>
  <img src={require('/img/styling/radius.png').default} alt="radius" style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "cover"}}/>
</div> 


### Default Settings 

<span style={{color: "#FF0000"}}> add text and image here </span> 


:::tip NOTE
By clicking on <code>Reset</code> you can return to the default styling.
:::
