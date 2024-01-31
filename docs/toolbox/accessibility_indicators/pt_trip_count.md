---
sidebar_position: 7
---

# Public Transport Trip Count

This indicator displays the **average number of public transport departures** per hour in pie charts, where the size and color of the pie chart signify the number of departures and the type of service, respectively. 

## 1. Explanation

This indicator shows the **average number of public transport departures per hour for** a selected **time interval** in pie charts. The size of the pie chart represents the number of departures: the larger the pie chart, the more departures. The colours represent the type of service (e.g. bus, metro).

This indicator serves as the foundation for the [ÖV Güteklassen](/docs/toolbox/accessibility_indicators/oev_gueteklassen.md), but can also be utilized on its own as a straightforward measure for public transport offer at a **station level**. It gives a summary of a station’s departures during a specific time window and day, providing a valuable overview of the public transport offer in a city. Thus, the indicator is often used in **weak point analyses of local transport plans** (see, among others, [Guideline for Local Transport Planning in Bavaria](https://www.demografie-leitfaden-bayern.de/index.html)).

<span style={{color: "#FF0000"}}>TODO: add sample image</span>

## 2. Example use cases

- Which stations in the city serve as main hubs?
- Which stations have low service rates in comparison to others?
- How does the public transport quality vary over different times of the week or day?

## 3. How to use the indicator?

How to use the indicator? (from tutorials) / Sample calculation(s)
Show as many samples as necessary to explain a feature

### Video Tutorial

<span style={{color: "#FF0000"}}>TODO: add video</span>

### Step-by-step guideline


## 4. Technical details

### Calculation

Similar to the ÖV Güteklassen (public transport quality classes), this indicator is calculated on the basis of GTFS data. Based on the selected day and time window, the average number of departures per hour (regardless of direction) is calculated.

## 5. Further readings

(Links to tutorials)  
Links to videos  
Related docs  

## 6. Resources

Shkurti, Majk (2022). [Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS](https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS)