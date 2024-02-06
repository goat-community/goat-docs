---
sidebar_position: 21
---



# Attribute-based Styling

<span style={{color: "#FF0000"}}>TODO: unify wording of docs & v2. In v2: "field" instead of "attribute".</span> 

GOAT allows users to apply **attribute-based styling** techniques to enhance the visual appearance of elements (such as point, lines or polygons) on the map. This approach allows the visual representation to **reflect variations and patterns in the data**, making it easier to recognise and understand complex information spatially.

In the <code>Layer Style</code> menu, you will often come across the **options button** <img src={require('/img/styling/options_icon.png').default} alt="options_icon" style={{ maxHeight: "25px", maxWidth: "25px", objectFit: "cover"}}/>. By enabeling it, the options for styling based on dataset attributes become visible.

:::tip HINT
If you like to save your styling settings and use them in further projects, you can do so by [saving a style as default](../layer_style/styling/#default-settings). 
:::

## Select Attribute 

For the attribute-based styling, first select the attribute which you like to visualize in the field <code>Color based on</code>.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/attribute_selection.gif').default} alt="attribute_selection" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

## Color Palette

After picking an attribute, an advanced **color palette** will appear. A color palette is a collection of colors chosen to represent different values or categories within your dataset. GOAT provides a comprehensive set of predefined palettes, each of which has been designed to provide a **visually impactful representation of spatial data**. These palettes are categorised into four different groups for ease of selection and application.

<p></p>

| Palette Type| Example | Description |
| :-: | --- | ---|
| Diverging | <img src={require('/img/styling/diverging_palette.png').default} alt="diverging" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/> | This type of color palette is ideal for displaying data that is centred around a critical midpoint or has a natural division. It is particularly useful for displaying data characterised by both positive and negative variations from a central value, allowing these variations to be visualised clearly and effectively. |
| Sequential | <img src={require('/img/styling/sequential_palette.png').default} alt="sequential" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/> | This color palette is designed for data that follows a natural progression or ordered sequence. It excels at visualising continuous data, where values either incrementally increase or decrease along a spectrum. This makes it particularly suitable for clearly displaying data that gradually changes from one extreme to the other. |
| Qualitative | <img src={require('/img/styling/qualitative_palette.png').default} alt="qualitative" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/> | This color palette is designed for data that is categorised into specific, distinct groups or classes. Qualitative color palettes are designed to distinguish between discrete categories. Importantly, these palettes do so without suggesting any inherent order or relative importance between the different categories. |
| Singlehue | <img src={require('/img/styling/singlehue_palette.png').default} alt="singlehue" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/> | This color palette is a type of color scheme used in data visualisation that uses different hues, shades and tones of a single color. This approach creates a visually coherent and harmonious aesthetic that can be particularly effective in conveying information without the distraction of multiple colors. |

The color palette provides several customization options. You can define your **number of steps** for a palette, you can **reverse** the colors and you can also define your own **custom palette**.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/color_palettes.gif').default} alt="color_palette" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 


## Color Scale

In addition to the color palette, the **color scale** can be adjusted. The color scale is a **data classification method** that associates data values with a spectrum of colors. It converts a given data value within a given range (domain) into a corresponding color from a given color spectrum (range). GOAT provides six predefined color scale methods: [Quantile](#quantile), [Standard Deviation](#standard-deviation), [Equal Interval](#equal-interval), [Heads and Tails](#heads-and-tails), [Custom Breaks](#custom-breaks-for-number), [Custom Ordinal](#custom-order-for-string).

<span style={{color: "#FF0000"}}>TODO: Update all the images below. Make them same color and use population or grid data. Choose the one better. Use white basemap for all the images here </span> 


### Quantile

The Quantile classification, divides data into **groups with equal number of values in each class** based on their attribute values. This method is useful for analyzing and visualizing patterns in data and can help identify trends and patterns that may not be obvious easily. The fact that the data values are grouped in equal quantities within each class makes this approach **ideal for data that is linearly distributed**. Per default, the data is distributed into 7 classes. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/quantile.png').default} alt="quantile" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div>  


:::tip HINT
Want to deeper understand what quantile classification is? Check our [Glossary](../../further_reading/glossary/#quantile-classification).
:::

### Standard Deviation

The Standard Deviation method is a **statistical approach** used in data visualisation. It uses the concept of standard deviation, a measure of the **amount of variation or dispersion in a set of values**, to determine how data points are assigned to different color categories. This method is valuable for its ability to provide a statistical perspective on the data, allowing users to quickly grasp the **relative dispersion and distribution of values** within the dataset. Per default, the data is distributed into 7 classes. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/standard_deviation.png').default} alt="standard_deviation" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

### Equal Interval

For the Equal Interval classification, the range of the attribute values is divided into **equal interval classes**. Per default, the data is distributed into 7 classes. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/equal_interval.png').default} alt="equal_interval" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

### Heads and Tails

The Heads and Tails method is used to deal with **datasets with a skewed distribution**. It's designed to highlight extremes in the data, focusing on the **'heads' (the very high values)** and the **'tails' (the very low values)**. This method is particularly useful for datasets where the most important information is found in the extremes, and where highlighting these values can lead to greater insight and understanding. Per default, the data is distributed into 7 classes. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/heads_tails.png').default} alt="heads_tails" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 


### Custom Breaks (for <code>numbers</code>)

There are several options you can customize the <code>number</code> data:

The Custom Break method is a data visualisation method used for numerical data, such as quantities or numerical variables. It gives users control over how data is categorised and displayed by allowing them to define **custom breakpoints** or **thresholds**. It provides a tailored approach to data classification, enabling more **accurate** and **context-specific visualisations**. 

<span style={{color: "#FF0000"}}>TODO: add image </span> 

### Custom Ordinal (for <code>strings</code>)

The Custom Ordinal classification is a data sorting and visualisation method applied to **string data**, such as categories, labels or text-based variables. Unlike numerical data, where ordering is typically based on magnitude, string data often lacks a natural order. The Custom Order method therefore allows users to **define their own ordering rules for strings**, creating a customised sequence tailored to their specific needs. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/ordinal.png').default} alt="heads_tails" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div>   


Therefore, additional steps can be added and multiple string values selected per group from a drop-down menu. The drop-down menu thereby lists all attribute values of the dataset. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/custom_ordinal.gif').default} alt="heads_tails" style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "cover"}}/>
</div> 