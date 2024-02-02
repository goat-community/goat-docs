---
sidebar_position: 21
---



# Attribute-based Styling

GOAT allows users to apply **data-driven styling (attribute-based styling)** techniques to enhance the visual appearance of elements (such as point, lines or polygons) on a map is dynamically changed based on underlying data attributes. This approach allows the visual representation to reflect variations and patterns in the data, making it easier to recognise and understand complex information spatially.

By enabling **"Color based on"** functionality by clicking on options button  <img src={require('/img/styling/options_icon.png').default} alt="options_icon" style={{ maxHeight: "25px", maxWidth: "25px", objectFit: "cover"}}/> (both for fill color and stroke color) you can adjust the styling based on your dataset attributes.

:::tip HINT
When you make styling adjustments to a layer, GOAT ensures that these **changes are saved independently**. This means that even if you remove your dataset from the project, **the styling modifications you've made will still be accessible** and can be applied consistently in the future.
:::

## Color Palette

The color palette used for attribute-based styling will vary. A color palette is a collection of colors chosen to represent different values or categories within your data visualisation.

GOAT provides a comprehensive set of predefined palettes, each of which has been designed to provide a visually impactful representation of spatial data. These palettes are categorised into several different groups for ease of selection and application.

You can define your **number of steps** for a palette, you can **reverse** the colors and you can also define your own **custom palette**.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/color_palette_vertical.gif').default} alt="color_palette" style={{ maxHeight: "400px", maxWidth: "400px", objectFit: "cover"}}/>
</div> 

<span style={{color: "#FF0000"}}> Update the gif. Make it wider to see how map changes. </span> 

<p></p>

| Palette Type| Example | Description |
| :-: | --- | ---|
| Diverging | <img src={require('/img/styling/diverging_palette.png').default} alt="diverging" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/> | This type of color palette is ideal for displaying data that is centred around a critical midpoint or has a natural division. It is particularly useful for displaying data characterised by both positive and negative variations from a central value, allowing these variations to be visualised clearly and effectively. |
| Sequential | <img src={require('/img/styling/sequential_palette.png').default} alt="sequential" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/> | This color palette is designed for data that follows a natural progression or ordered sequence. It excels at visualising continuous data, where values either incrementally increase or decrease along a spectrum. This makes it particularly suitable for clearly displaying data that gradually changes from one extreme to the other. |
| Qualitative | <img src={require('/img/styling/qualitative_palette.png').default} alt="qualitative" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/> | This color palette is designed for data that is categorised into specific, distinct groups or classes. Qualitative color palettes are designed to distinguish between discrete categories. Importantly, these palettes do so without suggesting any inherent order or relative importance between the different categories. |
| Singlehue | <img src={require('/img/styling/singlehue_palette.png').default} alt="singlehue" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/> | This color palette is a type of color scheme used in data visualisation that uses different hues, shades and tones of a single color. This approach creates a visually coherent and harmonious aesthetic that can be particularly effective in conveying information without the distraction of multiple colors. |

## Color Scale

A **color scale** is a method that associates data values with a spectrum of colors. It converts a given data value within a given range (domain) into a corresponding color from a given color spectrum (range). GOAT provides five predefined color scale methods, also known as data classification methods.

<span style={{color: "#FF0000"}}> Update all the images below. Make them same color and use population or grid data. Choose the one better. Use white basemap for all the images here </span> 


### Quantile

By placing the data values in classes with an **equal number of values in each bin**, the quantile scale orders the data values. The fact that the data values are grouped in equal quantities within each class makes this approach ideal for data that is linearly distributed. The default class number is 7. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/quantile.png').default} alt="quantile" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

### Standard Deviation

The standard deviation method is a **statistical approach** used in data visualisation. It uses the concept of standard deviation, a measure of the **amount of variation or dispersion in a set of values**, to determine how data points are assigned to different color categories. This method is valuable for its ability to provide a statistical perspective on the data, allowing users to quickly grasp the relative dispersion and distribution of values within the dataset. The default class number is 7. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/standard_deviation.png').default} alt="standard_deviation" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

### Equal Interval

The range of the **continuous variable is divided into equal interval classes** using the equal interval scale. Users can select multiple colors for these classes containing the data values using color palettes. The default class number is 7. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/equal_interval.png').default} alt="equal_interval" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

### Heads and Tails

The heads and tails method is used to deal with **datasets with a skewed distribution**. It's designed to highlight extremes in the data, focusing on the **'heads' (the very high values)** and the **'tails' (the very low values)**. This method is particularly useful for datasets where the most important information is found in the extremes, and where highlighting these values can lead to greater insight and understanding. The default class number is 7. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/styling/heads_tails.png').default} alt="heads_tails" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 


### Custom Breaks for <code>number</code>

There are several options you can customize the <code>number</code> data:

The Custom Break method is a data visualisation method used for numerical data, such as quantities or numerical variables. It gives users control over how data is categorised and displayed by allowing them to define **custom breakpoints** or **thresholds**. It provides a tailored approach to data classification, enabling more **accurate** and **context-specific visualisations**. 

<span style={{color: "#FF0000"}}> add image </span> 

### Custom Order for <code>string</code>

The Custom Order Method is a data sorting and visualisation method applied to string data, such as categories, labels or text-based variables. Unlike numerical data, where ordering is typically based on magnitude, string data often lacks a natural order. The Custom Order method addresses this challenge by allowing users to **define their own ordering rules for strings**, creating a customised sequence tailored to their specific needs. This level of customisation **enhances the interpretability** and **utility of visualisations**.

<span style={{color: "#FF0000"}}> add image </span> 

