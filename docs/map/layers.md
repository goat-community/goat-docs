---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Layers

## Add Layer

You can add two two kinds of layers to your map: [internal layers](../data/layer_types) or [external layers](../data/layer_types). For adding new internal layers, you can either integrate **datasets from your data explorer** or upload new **datasets from your local device** (GeoPackage, GeoJSON, Shapefile, KML, CSV or XLSX). External layers can be added by inserting the **url of the external source** (WMS, WMTS or MVT). 

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
  <div class="content">Select if you like to <b>upload</b> a new dataset, integrate an dataset from your <b>data explorer</b> or add an <b>external dataset</b>.</div>
</div>

<Tabs>
  <TabItem value="Dataset Upload" label="Dataset Upload" default className="tabItemBox">

### Upload a New Dataset

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the file you want to import.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Define the name and the metadata of your dataset.</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Click on <code>Upload</code>.</div>
</div>

  </TabItem>
  <TabItem value="Dataset Explorer" label="Dataset Explorer" className="tabItemBox">

### Import Data from Dataset Explorer

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the file you want to import.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Click on <code>+ Add Layer</code>.</div>
</div>


  </TabItem>
  <TabItem value="Dataset External" label="Dataset External" className="tabItemBox">

  ### Import an External Dataset

<span style={{color: "#FF0000"}}>TODO : complete this section. </span> 

  </TabItem>
</Tabs>

## Managing Layers

Once you have added your dataset into GOAT, your dataset will be visible on the **Layers** menu. By clicking on **"Options"** <img src={require('/img/filter/3dots.png').default} alt="options_icon" style={{ maxHeight: "25px", maxWidth: "25px", objectFit: "cover"}}/> you can manage your layers.

<img src={require('/img/map-layers/layer_options.png').default} alt="layer_options" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/> 



:::tip tip

You can manage all your datasets in the [Data Explorer](../workspace/data_explorer). 

:::