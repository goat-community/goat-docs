---
sidebar_position: 3
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Layers

In the **Layers** section, layers can be **added and organized**. Among others, the layer order can be adjusted, layers can be enabled/disabled, duplicated, renamed, downloaded, and removed.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/map/layers/overview.png').default} alt="Layer View in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

## Add Layers

You can add two kinds of layers to your map: [internal layers](../data/dataset_types) or [external layers](../data/dataset_types). For adding new internal layers, you can either integrate **datasets from your data explorer** or upload new **datasets from your local device** (GeoPackage, GeoJSON, Shapefile, KML, CSV, or XLSX). External layers can be added by inserting the **url of the external source** (WMS, WMTS, or MVT). 

Follow these steps to add a layer to the map: 

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Navigate to the <b>"Layers"</b> menu via the left sidebar.</div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Click on <code>+ Add Layer</code>. </div>
</div>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select if you like to integrate an dataset from your <b>data explorer</b>, <b>upload</b> a new dataset or add an <b>external dataset</b>.</div>
</div>

<Tabs>
  <TabItem value="Dataset Explorer" label="Dataset Explorer" default className="tabItemBox">


<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the file you want to import.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Click on <code>+ Add Layer</code>.</div>
</div>


</TabItem>
<TabItem value="Dataset Upload" label="Dataset Upload" className="tabItemBox">


<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the file you want to import.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Define the name of the dataset and add a description, if you like.</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Check the information and click on <code>Upload</code>.</div>
</div>

  </TabItem>
  <TabItem value="Dataset External" label="Dataset External" className="tabItemBox">

:::info coming soon

We currently implement this functionality. 🧑🏻‍💻

:::


  </TabItem>
</Tabs>

:::tip tip

You can manage all your datasets on the [Datasets page](../workspace/datasets). 

:::

## Organize Layers

Once you have added a dataset to the map, it will be visible in the **Layer List**. From there you can organize the different layers.

### Layer Order

When visualizing several data sets at once, the layer order is crucial for creating nice maps. Therefore, the **layer order** can be changed interactively.
When hovering over the left border of the layer in the layer list, an arrow symbol appears. By drag and drop, the layer can be moved. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/map/layers/layer_order.gif').default} alt="Layer Order" style={{ maxHeight: "600px", maxWidth: "600px", objectFit: "cover"}}/>
</div> 

### Show / Hide Layers

To temporarily **hide** a layer from the map view, click the eye icon for that layer in the layer list. Clicking the eye again will make the layer **visible** again.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/map/layers/hide_layers.gif').default} alt="Hide Layer" style={{ maxHeight: "600px", maxWidth: "600px", objectFit: "cover"}}/>
</div> 

### Options


By clicking on three dots <img src={require('/img/map/filter/3dots.png').default} alt="Options" style={{ maxHeight: "25px", maxWidth: "25px", objectFit: "cover"}}/> you have further options to manage and organize the selected layer.


<img src={require('/img/map/layers/layer_options.png').default} alt="Layer Options" style={{ maxHeight: "250px", maxWidth: "250px", objectFit: "cover"}}/> 


:::tip tip

Want to change the design of your layers? See [Layer Style](../category/layer-style).  
Only want to visualize parts of your dataset? See [Filter](../map/filter). 

:::