---
sidebar_position: 8
---
import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PT Nearby Stations

The **PT Nearby Stations** tool provides an overview of all public transport stops and connections in the proximity of selected starting point(s).

## 1. Explanation

The Public Transport (PT) Nearby Stations access analysis is a suitable tool to **visualize public transport stops and their connections** that are accessible by walking/cycling from one or more starting point(s). For detailed information on public transport services, the public transport connections to/from any point can be displayed. The nearest stops, the public transport lines available there, their frequency and the journey time to reach the stop on foot and by bike are provided as a result.

**Proximity to nearby stations** is essential for various aspects of urban life and is important urban planning.

**The close vicinity of public transport hubs** significantly improves accessibility for residents, workers, and visitors, particularly those facing mobility challenges or concerned about environmental impact.


![Nearby Stations in GOAT](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_example.png "Nearby Stations in GOAT")

:::info 
A **geofence** is used to calculate the nearby stations. This geofence covers most Germany, Denmark, Netherlands, Belgium, Switzerland and Austria as shown in the image below.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/toolbox/accessibility_indicators/nearby_stations/geofence.png').default} alt="Geofence for nearby stations calculation in GOAT" style={{ maxHeight: "400px", maxWidth: "400px", alignItems:'center'}}/>
</div> 
:::

## 2. Example use cases 

- Which public transport stations are nearby and provide convenient access to key attractions and landmarks for tourists exploring a new city?
- When considering daily commuting to work, which nearby public transport stations offer optimal routes and schedules for a seamless journey?
- What are the nearby public transport stations for convenient access to shopping centers?



## 3. How to use the indicator?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Accessibility Indicators</code> menu, click on <code>PT Nearby Stations</code>.</div>
</div>

![Menu Overview for Public Transport Nearby Stations](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_overview.png "Menu Overview for Public Transport Nearby Stations")

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select the <code>Station Access</code> mode (walk, bicycle or pedelec) you would like to calculate the nearby stations.</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Set the configurations for the <code>Station Access</code> by changing <code>Travel time limit (min)</code> and <code>Travel speed(km/h)</code>.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Pick for which <code>Public transport mode</code> mode you would like to calculate the nearby stations.</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Set the configurations for <code>Public transport mode</code> by changing <code>Day</code> and <code>Time</code>.</div>
</div>

![Configurations for Public Transport Nearby Stations](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_config.png "Configurations for Public Transport Nearby Stations")


<div class="step">
  <div class="step-number">7</div>
  <div class="content">Choose how you like to define the starting point(s) of the isochrone under <code>Starting</code> menu.</div>
</div>

<Tabs>
  <TabItem value="Select on Map" label="Select on Map" default className="tabItemBox">

 #### Select on Map

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Click on <code>Select on map</code>. Select the starting point(s) by clicking on the respective location(s) in the map. You can add <b>as many starting points</b> as you like.</div>
</div>


  </TabItem>
  <TabItem value="Select From Layer" label="Select From Layer" className="tabItemBox">

 #### Select From Layer

 <div class="step">
  <div class="step-number">8</div>
  <div class="content">Select the <code>Point layer</code> which you like to use as starting points. You can add <b>as many starting points</b> as you like.</div>
</div>


  </TabItem>
</Tabs>

<div class="step">
  <div class="step-number">9</div>
  <div class="content">Click on <code>Run</code>. This starts the calculation of the Nearby Stations from the selected starting point(s).</div>
</div>

:::tip Hint

Depending on the size of the selected area, the calculation might take some minutes. The [status bar](../../workspace/home#status-bar) shows the current progress.

:::

![Result of Public Transport Nearby Stations](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_result.png "Result of Public Transport Nearby Stations")

:::tip Tip
Want to style your catchment areas and create nice looking maps? See [Styling](../../map/layer_style/styling).
:::

## 4. Technical details

The Nearby Stations are received from the GTFS data.