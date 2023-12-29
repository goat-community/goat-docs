---
sidebar_position: 2
---

# Data Types

GOAT categorises and distinguishes between four different and specialised types of data:

### Feature Layer
 Feature layer is a data layer that has the ability to retrieve and display features from a feature service that have a specific geometry type (point, multipoint, polyline or polygon). Features can typically be visualized on a map using a feature layer, with formats such as Shapefile, Geopackage, GeoJSON, and KML allowing for various analyses to be performed, depending on the geometry type. There are 4 different feature layer types within GOAT:

<span style={{color: "#FF0000"}}>I am not sure if we should add this list. If yes, we need to define each of them. BTW I took them from Notion </span> 

- FeatureLayerStandard
- FeatureLayerAnalysisUnit
- FeatureLayerIndicator
- FeatureLayerScenario

### Table Layer
A table layer is a non-spatial dataset. Typically, data management tools are used to import non-spatial data in CSV, XLSX and JSON file formats can be further processed for certain tools.

### External Imagery Layer
 An external imagery layer allows for the integration of External Web Map Service (WMS) and Web Map Tile Service (WMTS) sources into projects. This layer provides access to a variety of georeferenced map images, such as topographic maps from external servers. These images can be integrated as static maps, providing a consistent and detailed view for analysis and comparison.

### External Vector Tile Layer
External Vector Tile Layer allows the integration of the MultiVector Tile (MVT) format into GOAT, allowing these efficient vector tiles to be used as static maps. This feature enhances GOAT's data presentation and provides a better mapping experience.

