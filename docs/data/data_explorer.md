---
sidebar_position: 21
---
<!--This part is necessary for green highligted texts -->
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
); 

# Data Explorer

This page is designated for the upload, management, and distribution of datasets. Within the "Workspace", users are presented with an organized view of their datasets, categorized by personal, team-based, or organizational groupings.


## Add data from Workspace

Utilize the `+ Add Dataset` feature to incorporate datasets from your personal computing device. GOAT supports the importation of GeoPackage, GeoJSON, Shapefile, KML, CSV, and XLSX files.
Follow these steps to add a dataset to Workspace:

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Open the "Datasets" menu from the sidebar</div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Click on <Highlight color="#2bb381">+ Add Dataset</Highlight> </div>
</div>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select your file</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the folder destination where you want your data to reside (personal, team-based or organisational groupings) and edit your file's metadata</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Check the information about your dataset and click on <Highlight color="#2bb381">Upload</Highlight></div>
</div>


---------------------------------------------------------------------------------------------------

## Add data from GOAT
Utilize the `+ Add Dataset`  feature to integrate datasets either from from either your individual computing device or access those previously established within your workspace. Follow these steps to add a dataset to GOAT: 

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <Highlight color="#2bb381">+ Add Layer</Highlight> button under the "Layers" menu </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">The "Dataset Upload" procedure mirrors the instructions described in the "Add data from Workspace"</div>
</div>

<div class="step">
  <div class="step-number">3</div>
  <div class="content"> Within the "Dataset Explorer" interface, you may select and utilize datasets previously imported to the workspace</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the file you want to import</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Click on <Highlight color="#2bb381">Add Layer</Highlight></div>
</div>