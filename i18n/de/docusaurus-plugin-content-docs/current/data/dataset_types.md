---
sidebar_position: 3
---

# Dataset Types

The datasets in GOAT are divided into **internal and external datasets**. Internal datasets are those that are stored within GOAT, while external datasets are those that are sourced from third-party services. 

## Internal Datasets

Internal datasets refer to datasets that are **stored and managed directly in GOAT**. These include [Features](#1-features), which contain spatially referenced geographic features, and [Tables](#2-tables), which consist of non-spatial data. These internal datasets are essential for performing analysis in GOAT.

:::info INFO
You can find out which data types are supported by GOAT for internal data sets under [**Data Types**](../data/data_types).
:::

### 1. Features
Feature datasets serve as a dynamic repository of **spatial features**, such as points, lines, or polygons. Users can upload and utilize data from **Shapefiles**, **Geopackages**, **GeoJSON**, and **KML** files. Feature datasets can be visualized on the map, [styled](../category/layer-style), and used for analyses with any tools from the [toolbox](../category/toolbox). Furthermore, feature datasets can serve as a data basis for the [scenario creation](../category/scenarios).

Within the GOAT framework, there are three different types of feature datasets, to address different aspects of geospatial functionality:

- **Feature Dataset Standard:** This is the primary feature type that is automatically selected when a user uploads a file. It supports a range of formats including GeoJSON, GPKG, KML, and ZIP files. This dataset serves as the foundation for basic geospatial operations within GOAT.

- **Feature Dataset Tool:** This dataset includes all datasets that have been processed or calculated using the tools available in GOAT. 

- **Feature Dataset Scenario:** Dedicated to scenario-based analysis, this dataset contains scenarios created by users.

### 2. Tables
Tables are **non-spatial datasets**, which differ from the geospatial datasets due to their lack of geographic reference points. These datasets can be used for the overall analysis and data management process. Users can import table datasets in widely used formats such as **CSV** (Comma-Separated Values) and **XLSX** (Microsoft Excel Open XML Spreadsheet). 

## External Datasets

:::info coming soon

This feature is currently under development. 🧑🏻‍💻

:::

Unlike internal datasets, which are stored and managed directly within GOAT, external datasets are sourced from **third-party services**. These datasets primarily include [Imageries](#1-imageries) and [Vector Tiles](#2-vector-tiles), each serving distinct purposes.

### 1. Imageries
Imagery datasets are datasets that are provided by external sources such as **WMS** (Web Map Service) or **WMTS** (Web Map Tile Service). Therewith, a wide range of georeferenced map images, such as topographic maps, can be obtained from external servers and integrated into GOAT. While these images can be incorporated as static maps, it is important to note that they do not support analytical functions. 


:::tip Note

The styling of these external image datasets is dependent on the external service providing the WMS (e.g. service from GeoServer "https://wms.websitehai.com/geoserver/ows?SERVICE=WMS&") or WMTS. 
Consequently, the visual presentation of the map imagery, including elements such as color schemes and representation of geographic features, cannot be changed within the GOAT framework.

:::



### 2. Vector Tiles
**Vector Tile Datasets** allow the integration of **MVT** (Mapbox Vector Tile) (e.g. mapbox://mapbox.mapbox-terrain-v2) into GOAT, allowing these efficient vector tiles to be used as static maps. 
