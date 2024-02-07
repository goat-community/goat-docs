---
sidebar_position: 7
---
import thematicIcon from "/img/indicators/join/toolbox.webp";

# Public Transport Trip Count

This indicator displays the **average number of public transport departures** per hour in pie charts, where the size and color of the pie chart signify the number of departures and the type of service, respectively. 

## 1. Explanation

This indicator shows the **average number of public transport departures per hour for** a selected **time interval** in pie charts. The size of the pie chart represents the number of departures: the larger the pie chart, the more departures. The colours represent the type of service (e.g. bus, metro).

<span style={{color: "#FF0000"}}>TODO: @EPajares will the style be still the same as in v1.5?</span>  

This indicator serves as the foundation for the [ÖV Güteklassen](/docs/toolbox/accessibility_indicators/oev_gueteklassen.md), but can also be utilized on its own as a straightforward measure for public transport offer at a **station level**. It gives a summary of a station’s departures during a specific time window and day, providing a valuable overview of the public transport offer in a city. Thus, the indicator is often used in **weak point analyses of local transport plans** (see, among others, [Guideline for Local Transport Planning in Bavaria](https://www.demografie-leitfaden-bayern.de/index.html)).

<span style={{color: "#FF0000"}}>TODO: add sample image</span>

## 2. Example use cases

- Which stations in the city serve as main hubs?
- Which stations have low service rates in comparison to others?
- How does the public transport quality vary over different times of the week or day?

## 3. How to use the indicator?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Accessibility Indicators</code> menu, click on <code>Trip Count</code>. This opens the setting menu.</div>
</div>


![Menu Overview for Public Transport Trip Count](/img/indicators/public_transport/trip_count/overview.png "[Menu Overview for Public Transport Trip Count")

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Define the <code>Calculation Time</code> (the day and the time).</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the <code>Reference Area Layer</code> for which you like to calculate the indicator. This can be any polygon feature layer.</div>
</div>


<div class="step">
  <div class="step-number">5</div>
  <div class="content">Click on <code>Run</code>. This starts the calculation of the Public Transport Trip Count for the selected area and time interval.</div>
</div>

:::tip Hint

Depending on the size of the selected area, the calculation might take some minutes. The [status bar](../../workspace/home#status-bar) shows the current progress.

:::

<div class="step">
  <div class="step-number">6</div>
  <div class="content">As soon as the calculation process is finished, the resulting layer will be added to the map.</div>
</div>

<span style={{color: "#FF0000"}}>TODO: add result screenshot</span>

## 4. Technical details

### Calculation

Similar to the Public Transport Quality Classes <i>(German: ÖV Güteklassen)</i> , this indicator is calculated on the basis of **GTFS data** (see [Data Basis](../../data/data_basis)). Based on the selected day and time window, the average number of departures per hour (regardless of direction) is calculated.

### Visualization 

<span style={{color: "#FF0000"}}>TODO: description when style is applied.</span>

## 5. Further readings

(Links to tutorials)  
Links to videos  
Related docs  

<span style={{color: "#FF0000"}}>TODO</span>

## 6. Resources

Shkurti, Majk (2022). [Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS](https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS)

<span style={{color: "#FF0000"}}>TODO:@EPajares to which text passages does this reference belong to? I would suggest that we either cite it in the text or move it to the section "Further readings".</span>