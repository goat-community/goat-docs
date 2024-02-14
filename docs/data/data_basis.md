---
sidebar_position: 1
---

# Data Basis


### Data as an important basis for our analysis

At Plan4Better, we recognize that data is the fuel that powers our analyses, making it our most valuable asset. To deliver accurate insights based on high-quality information at reasonable costs, our [GOAT](/en/goat/ "What is GOAT?") and [Map4Citizens](/en/posts/2022-12-31-map4citizens/ "What is Map4Citzens?") applications integrate diverse spatial and non-spatial datasets from various sources. However, processing inconsistent geospatial data from different sources with varying degrees of accuracy can pose a significant challenge. To address this issue, we leverage a range of techniques, including efficient data integration, disaggregation, and fusion workflows, to ensure seamless data handling.


### Data collection and data preparation

The data collection process involves gathering and evaluating information from different sources to meet the specific requirements. This involves identifying relevant data sources and collecting data, ideally from open data portals or publicly available initiatives. Depending on the data source, different data schemas and formats such as shapefiles and GeoJSON may be used. It is therefore essential to prepare and convert the data into a common schema and format to ensure consistency and comparability.

At GOAT, we ensure that our data is up-to-date by updating it at least once a year. However, more frequent updates are possible when necessary, especially for rapidly changing points of interest (POIs). The figure below illustrates the core datasets used, and each dataset is described in more detail.

![GOAT data basis](/img/data/original_files/data_en_blue.png "GOAT data basis")

- **Points Of Interest:** For POIs a combination of diverse data sources is used. In addition to  OpenStreetMap [OpenStreetMap (OSM)](https://wiki.openstreetmap.org/), we use a wide range of other sources, including data from government departments and agencies, health insurance companies and retailer companies. The different datasets are combined using a combination of automated and manual processes. Meanwhile, the data is checked for completeness and accuracy. If needed, we also carry out our own data collection in the field. 

- **Population and Buildings:** The population is disaggregated to the building level based on census data and district or municipality population counts, as well as various land use data. The processing is supported by 3D city models where available.

- **Public Transport Network:** For the public transport network and schedule, GTFS (General Transit Feed Specification) data is used to provide realistic and temporal dynamic travel times for public transport. 

- **Administrative Boundaries:** The data is used to delimit the boundary of a geographical area under the jurisdiction of some governmental or administrative entities, such as municipalities, districts or counties.

- **Street Network:** For walking and cycling, OSM is mainly used, but the road network data is flexible, so some other datasets are used as well. For cars, calibrated car routing networks from commercial providers are used to calculate travel times including varying network saturation at different times of the day.

- **Additional Data:** There are a number of other datasets that allow users to connect geoportals and enhance the visualisation by choosing from different base maps. In addition, elevation models, street noise and accident point data sets are used to improve and vary the analysis carried out using GOAT. 

Data integration and data fusion steps are applied to combine the different data sets and are adapted to the local context. Moreover, further data processing steps (accuracy, completeness, reliability, relevance, and up-to-dateness) are also implemented to obtain an accurate and reliable data set. Furthermore, we are flexible to include additional datasets and data sources as needed.