---
sidebar_position: 2
---

# Layer Types

The data in GOAT is managed in **layers**. It is thereby distinguished between internal and external layers. **Internal Layers** those that are stored within GOAT, while **External Layers** are sourced from third-party services.

## Internal Layers 

Internal Layers refer to datasets that are **stored and managed directly in GOAT**. These include [Feature Layers](#1-feature-layer/), which contain spatially referenced geographic features, and [Table Layers](#2-table-layer), which consist of non-spatial data. These internal layers are essential for performing analysis in GOAT.

<span style={{color: "#FF0000"}}>TODO: Check links. For me, they are not working</span>

### Data Types

<span style={{color: "#FF0000"}}>TODO / NOTE: This section doesn't make sense for me in this location. I would propose to shift it to a separate page.</span>

GOAT handles a wide range of geometry types for spatial data. This capability is achieved by using a [PostgreSQL](https://www.postgresql.org/docs/) database enhanced with the [PostGIS](https://postgis.net/documentation/) extension. GOAT stores all geometries in the PostGIS geometry type within the **EPSG:4326** coordinate reference system. However, for operations involving length or area measurements, the PostGIS geography type is used. This type allows calculations in metres and offers higher accuracy.

<span style={{color: "#FF0000"}}>TODO / NOTE: What is the "PostGIS geometry type"? For me this is a bit unclear.</span>

Furthermore, GOAT adopts a structured approach to data management by categorizing the data types. This categorization is intended to optimize the database schema for enhanced performance and scalability. The current schema includes a limited number of columns per data type:

| Data Type  | Maximum Number of Columns |
|------------|---------------------------|
| integer    | 15                        |
| bigint     | 5                         |
| float      | 10                        |
| text       | 20                        |
| timestamp  | 3                         |
| arrfloat (Array of Floats)   | 3       |
| arrint (Array of Integers)   | 3       |
| arrtext (Array of Text)   | 3          |
| jsonb (Binary JSON)    | 3             |
| boolean    | 3                         |


<span style={{color: "#FF0000"}}>TODO: I think we once discussed to add another column to this table where we explain the data types in easy words. Not sure how we agreed on that but I still think it would be of added value.</span>

### 1. Feature Layer
Feature Layers serve as a dynamic repository of **spatial features**, such as points, lines or polygons. Users can upload and utilise data from **Shapefiles**, **Geopackages**, **GeoJSON** and **KML** files. Feature layers can be visualised on the map, [styled](../map/layer_design/styling) and used for analyses with any tools from the [toolbox](../category/toolbox). Furthermore, feature layer can serve as a data basis for the [scenario creation](../category/scenarios).

Within the GOAT framework, there are three different types of feature layers, to address different aspects of geospatial functionality:

- **Feature Layer Standard:** This is the primary feature layer type that is automatically selected when a user uploads a file. It supports a range of formats including GeoJSON, GPKG, KML and ZIP files. This layer serves as the foundation for basic geospatial operations within GOAT.

- **Feature Layer Tool:** This layer includes all layers that have been processed or calculated using the tools available in GOAT. 

- **Feature Layer Scenario:** Dedicated to scenario-based analysis, this layer contains scenarios created by users.

### 2. Table Layer
Table Layers refer to a **non-spatial dataset**, which differ from the geospatial layers due to its lack of geographic reference points. These datasets can be used for the overall analysis and data management process. Users can import table layers in widely-used formats such as **CSV** (Comma-Separated Values) and **XLSX** (Microsoft Excel Open XML Spreadsheet). 

## External Layers
Unlike internal layers, which are stored and managed directly within GOAT, **External Layers** are sourced from third-party services. These layers primarily include [Imagery Layers](#1-imagery-layer) and [Vector Tile Layers](#2-vectortilelayer), each serving distinct purposes.

### 1. Imagery Layer
Imagery Layers are layers that are provided by **external sources** as **WMS** (Web Map Service) or **WMTS** (Web Map Tile Service). Therewith, a wide range of georeferenced map images, such as topographic maps, can be obtained from external servers and integrated in GOAT. While these images can be incorporated as static maps, it is important to note that they do not support analytical functions. 

:::tip Note
The styling of these external image layers is dependent on the external service providing the WMS (e.g. service from the Bundesamt für Kartographie und Geodäsie (BKG) "https://sgx.geodatenzentrum.de/wms_dtk500") or WMTS. 
Consequently, the visual presentation of the map imagery, including elements such as colour schemes and representation of geographic features, cannot be changed within the GOAT framework.
:::

<span style={{color: "#FF0000"}}>TODO / NOTE: When I click on the sample link, it shows an error that no style is provided with the XML-file. Is it on purpose? Or shall we rather pick an example that provides a style?</span>

### 2. Vector Tile Layer
**Vector Tile Layers** allow the integration of **MVT** (Mapbox Vector Tile) (e.g. mapbox://mapbox.mapbox-terrain-v2) into GOAT, allowing these efficient vector tiles to be used as static maps. 

<span style={{color: "#FF0000"}}>TODO / NOTE: Double-check the mapbox link, for me it's not clickable. Or is this the link that has to be inserted in GOAT for integrating the Vector Tile Layer? This is currently not really clear to me.</span>

