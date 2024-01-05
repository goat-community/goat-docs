---
sidebar_position: 2
---

# Layer Types

## Data types

GOAT supports various geometry types for spatial data. When uploading your data files, you can include the following types of geospatial data:

- **Point:** For datasets consisting mainly of points. Supported geometry types are Point and Multi-Point.
- **Line:** For datasets that represent linear features. Supported geometry types are Line String and Multi-Line String.
- **Polygon:** For datasets that define area-based features. Supported geometry types are Polygon and Multi-Polygon.
- **No geometry:** For uploading non-spatial data.

GOAT categorises and distinguishes between four different and specialised types of data:

### 1. Feature Layer
 Feature layer is a data layer that has the ability to retrieve and display features from a feature service that have a specific geometry type (point, multipoint, polyline or polygon). Features can typically be visualized on a map using a feature layer, with formats such as Shapefile, Geopackage, GeoJSON, and KML allowing for various analyses to be performed, depending on the geometry type. There are 3 different feature layer types within GOAT:

- Feature Layer Standard: Default feature layer type that is chosen when a user uploads a file. GOAT is compatible with a variety of formats including geojson, gpkg, kml, and zip files.
- Feature Layer Tool: All layers that were computed using one of the GOAT tools.
- Feature Layer Scenario: A layer holding a scenario that can be used to computed a scenario analysis.


### 2. Table Layer
A table layer is a non-spatial dataset. Typically, data management tools are used to import non-spatial data in CSV and XLSX file formats can be further processed for certain tools.


### 3. External Imagery Layer
An external imagery layer facilitates the integration of external Web Map Service (WMS) and Web Map Tile Service (WMTS) sources into various projects. This layer provides access to a range of georeferenced map images, such as topographic maps, obtained from external servers. While these images can be incorporated as static maps, it is important to note that they do not support analytical functions. However, they do provide a consistent and detailed perspective for analysis and comparative studies.

:::tip Note
It is important to recognise that the presentation of these external image layers is dependent on the external service providing the WMS  (e.g. service from the Bundesamt für Kartographie und Geodäsie (BKG) "https://sgx.geodatenzentrum.de/wms_dtk500") or WMTS. 
Consequently, the visual presentation of the map imagery, including elements such as colour schemes and representation of geographic features, is not subject to change within the GOAT framework.
:::


### 4. External Vector Tile Layer
External Vector Tile Layer allows the integration of the Mapbox Vector Tile (MVT) (e.g. mapbox://mapbox.mapbox-terrain-v2) format into GOAT, allowing these efficient vector tiles to be used as static maps. This feature enhances GOAT's data presentation and provides a better mapping experience.

