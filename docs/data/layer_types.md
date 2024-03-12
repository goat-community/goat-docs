---
sidebar_position: 3
---

# Layer Types

Data in GOAT is managed in **Layers**. A distinction is made between **internal and external layers**. Internal layers are those that are stored within GOAT, while external layers are those that are sourced from third party services. 

## Internal Layers 

Internal Layers refer to datasets that are **stored and managed directly in GOAT**. These include [Feature Layers](#1-feature-layer), which contain spatially referenced geographic features, and [Table Layers](#2-table-layer), which consist of non-spatial data. These internal layers are essential for performing analysis in GOAT.

:::info INFO
To see the data types supported by GOAT for internal layers, see [**Data Types**](../data/data_types).
:::

### 1. Feature Layer
Feature Layers serve as a dynamic repository of **spatial features**, such as points, lines or polygons. Users can upload and utilise data from **Shapefiles**, **Geopackages**, **GeoJSON** and **KML** files. Feature layers can be visualised on the map, [styled](../category/layer-style) and used for analyses with any tools from the [toolbox](../category/toolbox). Furthermore, feature layer can serve as a data basis for the [scenario creation](../category/scenarios).

Within the GOAT framework, there are three different types of feature layers, to address different aspects of geospatial functionality:

- **Feature Layer Standard:** This is the primary feature layer type that is automatically selected when a user uploads a file. It supports a range of formats including GeoJSON, GPKG, KML and ZIP files. This layer serves as the foundation for basic geospatial operations within GOAT.

- **Feature Layer Tool:** This layer includes all layers that have been processed or calculated using the tools available in GOAT. 

- **Feature Layer Scenario:** Dedicated to scenario-based analysis, this layer contains scenarios created by users.

### 2. Table Layer
Table Layers refer to a **non-spatial dataset**, which differ from the geospatial layers due to its lack of geographic reference points. These datasets can be used for the overall analysis and data management process. Users can import table layers in widely-used formats such as **CSV** (Comma-Separated Values) and **XLSX** (Microsoft Excel Open XML Spreadsheet). 

## External Layers

:::info coming soon

We currently implement this functionality. 🧑🏻‍💻

:::

Unlike internal layers, which are stored and managed directly within GOAT, **External Layers** are sourced from third-party services. These layers primarily include [Imagery Layers](#1-imagery-layer) and [Vector Tile Layers](#2-vector-tile-layer), each serving distinct purposes.

### 1. Imagery Layer
Imagery Layers are layers that are provided by **external sources** as **WMS** (Web Map Service) or **WMTS** (Web Map Tile Service). Therewith, a wide range of georeferenced map images, such as topographic maps, can be obtained from external servers and integrated in GOAT. While these images can be incorporated as static maps, it is important to note that they do not support analytical functions. 

:::tip Note
The styling of these external image layers is dependent on the external service providing the WMS (e.g. service from GeoServer "https://wms.websitehai.com/geoserver/ows?SERVICE=WMS&") or WMTS. 
Consequently, the visual presentation of the map imagery, including elements such as color schemes and representation of geographic features, cannot be changed within the GOAT framework.
:::



### 2. Vector Tile Layer
**Vector Tile Layers** allow the integration of **MVT** (Mapbox Vector Tile) (e.g. mapbox://mapbox.mapbox-terrain-v2) into GOAT, allowing these efficient vector tiles to be used as static maps. 


