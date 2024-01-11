---
sidebar_position: 2
---

# Layer Types

## Internal Layers 

In the spatial data architecture of the GOAT system, **Internal Layers** refer to datasets that are stored and managed internally. These include the [Feature Layer](#1-feature-layer/), which contains spatially referenced geographic features. Alongside this is the [Table Layer](#2-table-layer), which consists of non-spatial data. This data is essential for carrying out attribute analysis and maintains a link to the spatial features.

### Data Types

The GOAT handles a wide range of geometry types for spatial data. This capability is achieved by using a [PostgreSQL](https://www.postgresql.org/docs/) database enhanced with the [PostGIS](https://postgis.net/documentation/) extension. GOAT stores all geometry in the PostGIS geometry type within the **EPSG:4326** coordinate reference system. However, for operations involving length or area measurements, the PostGIS geography type is used. This type allows calculations in metres and offers higher accuracy.

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

### 1. Feature Layer
 **Feature Layer** serves as a dynamic repository of spatial features. It enables the retrieval and display of elements based on their specific geometry type - be it point, multipoint, polyline or polygon. Using a feature layer, features can be visualised on a map, providing an understanding of their spatial distribution and characteristics.
 
 Users can upload and utilise data from **Shapefiles**, **Geopackages**, **GeoJSON** and **KML** files.
 
 Within the GOAT framework, there are three different types of feature layers, to address different aspects of geospatial functionality:

- **Feature Layer Standard:** This is the primary feature layer type that is automatically selected when a user uploads a file. It supports a range of formats including GeoJSON, GPKG, KML and ZIP files. This layer serves as the foundation for basic geospatial operations within GOAT.

- **Feature Layer Tool:** This layer includes all layers that have been processed or calculated using the tools available in GOAT. 

- **Feature Layer Scenario:** Dedicated to scenario-based analysis, this layer contains scenarios created by users.

### 2. Table Layer
**Table Layer** in the GOAT system refers to a non-spatial dataset, which differs from the geospatial layers due to its lack of geographic reference points. These datasets can be used for the overall analysis and data management process. Within GOAT framework, Table Layers supports the importation of non-spatial data in widely-used formats such as **CSV (Comma-Separated Values)** and **XLSX (Microsoft Excel Open XML Spreadsheet)**. 

## External Layers
Unlike internal layers, which are stored and managed directly within the GOAT system, **External Layers** are sourced from third-party services. These layers primarily include [Imagery Layer](#1-imagery-layer) and [Vector Tile Layer](#2-vectortilelayer), each serving distinct purposes.

### 1. Imagery Layer
**Imagery Layer** facilitates the integration of external **Web Map Service (WMS)** and **Web Map Tile Service (WMTS)** sources into various projects. This layer provides access to a range of georeferenced map images, such as topographic maps, obtained from external servers. While these images can be incorporated as static maps, it is important to note that they do not support analytical functions. 

:::tip Note
It is important to recognise that the presentation of these external image layers is dependent on the external service providing the WMS  (e.g. service from the Bundesamt für Kartographie und Geodäsie (BKG) "https://sgx.geodatenzentrum.de/wms_dtk500") or WMTS. 
Consequently, the visual presentation of the map imagery, including elements such as colour schemes and representation of geographic features, is not subject to change within the GOAT framework.
:::

### 2. Vector Tile Layer
**Vector Tile Layer** allows the integration of the **Mapbox Vector Tile (MVT)** (e.g. mapbox://mapbox.mapbox-terrain-v2) format into GOAT, allowing these efficient vector tiles to be used as static maps. This feature enhances GOAT's data presentation and provides a better mapping experience.

