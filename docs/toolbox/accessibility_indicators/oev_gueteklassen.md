---
sidebar_position: 1
---

# Public Transport Quality Classes (ÖV Güteklassen)


The Public Transport Quality Classes <i>(German: ÖV Güteklassen)</i> show the **attractiveness of public transport services**. This indicator helps to understand how public transport supply varies across a city or region. 

<span style={{color: "#FF0000"}}>TODO: unify use of "ÖV Güteklassen" & "Public Transport Quality Classes"</span> 

## 1. Explanation

<span style={{color: "#FF0000"}}>TODO: General explanation of the indicator (in easy words, reuse texts from tutorials)</span> 

## 2. Which planning questions can be answered? 

Among others, the Public Transport Quality Classes (ÖV Güteklassen) can be used to answer the following planning questions:
- How good is public transport supply in different parts of the city?
- How many people are underserved by public transport? Where is the need for further supply?
- How does the quality of public transport services differ at different times of the week and day?

## 3. How to use the indicator?

### Video Tutorial

<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/766394906" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="700" height="400"></iframe>


<span style={{color: "#FF0000"}}>TODO: insert new video or move this version to "further readings" as use case (version 1.5)</span>  

### Step-by-step guideline

<span style={{color: "#FF0000"}}>TODO</span> 

## 4. Technical details

### Scientific Background

The quality of accessibility is a **decisive indicator in public transport and spatial planning**. It can be used to highlight deficits in accessibility and to identify well-serviced locations as attractive areas for development. The approach of public transport quality classes <i>(German: ÖV Güteklassen)</i> is **methodologically superior** compared to common catchment areas. In 2011, the Swiss Federal Office for Spatial Development (ARE) used the indicator of <i>ÖV Güteklassen</i> in order to include the **attractiveness of public transport services** in the assessment of development quality; since then, these have been considered an important instrument in formal planning processes in Switzerland. In addition, the Swiss model served as an inspiration for application in Austria (e.g. Voralberg).  

The institutionalization of the indicator in German-speaking countries, as well as the comprehensible and at the same time differentiated calculation methodology, are important advantages of the <i>ÖV Güteklassen</i>. 

### Calculation

In the Swiss version of the indicator, the calculation of the quality classes is usually carried out for departures on weekdays between 6 AM and 8 PM. For the use in GOAT, the **calculation period** was made more **flexible** so that the indicator can be calculated for any day of the week and time of day. Furthermore, the indicator was adapted to the conditions in Germany. 

The calculations are carried out on the basis of **GTFS data**. First, the number of departures per public transport mode (metro, tram, bus and train) is dynamically calculated for each station. The sum of the departures is divided by two to calculate the frequency, in order to eliminate the outward and return directions. In the next step, the **average frequency** for the selected time interval is calculated. The higher-value service is selected as the **station type** in the case of service by several means of transport. For example, in the case of bus and train, this is the train. With the help of the table below, as well as the station type and the frequency, the station category can now be determined. 

![Classification of transport stops](/img/indicators/public_transport/gueteklassen/classification_stations_en.webp "Classification of transport stops")

Subsequently, **buffers** of the size shown are calculated for the corresponding station categories. This creates several buffers that are merged. For overlapping buffers, the higher quality class is used. 

![Determination of the "ÖV Güteklassen"](/img/indicators/public_transport/gueteklassen/determination_oev_gueteklasse_en.webp "Determination of public transport quality classes")

### Visualization

The created buffers are visualized around the stations in the corresponding colours to highlight the **quality class** (<span style={{color: "#199741"}}>A</span>-<span style={{color: "#E4696A"}}>F</span>).




![Visualization of the ÖV-Güteklassen](/img/indicators/public_transport/gueteklassen/visualization.png "Visualization of the ÖV-Güteklassen")

## 5. Further readings

<span style={{color: "#FF0000"}}>TODO</span> 

(Links to tutorials)  
Links to videos  
Related docs  

## 6. Resources

Bundesamt für Raumentwicklung ARE, 2022. [ÖV-Güteklassen Berechnungsmethodik ARE (Grundlagenbericht)](https://www.are.admin.ch/are/de/home/medien-und-publikationen/publikationen/verkehr/ov-guteklassen-berechnungsmethodik-are.html "Open Reference").

Hiess, H., 2017. [Entwicklung eines Umsetzungskonzeptes für österreichweite ÖV-Güteklassen](https://www.oerok.gv.at/fileadmin/user_upload/Bilder/2.Reiter-Raum_u._Region/1.OEREK/OEREK_2011/PS_RO_Verkehr/OeV-G%C3%BCteklassen_Bericht_Final_2017-04-12.pdf "Open Reference").

metron, 2017. [Bedienungsqualität und Erschließungsgüte im Öffentlichen Verkehr](https://vorarlberg.at/documents/302033/472144/1-+Schlussbericht.pdf/81c5f0d7-a0f0-54c7-e951-462cd5cf2831?t=1616147848364 "Open Reference").

Shkurti, Majk, 2022. "Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS". url: https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS 