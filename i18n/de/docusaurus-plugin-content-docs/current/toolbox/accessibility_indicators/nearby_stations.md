---
sidebar_position: 7
---
import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# PT Nearby Stations

Die **PT Nearby Stations**-Analyse wird verwendet, um öffentliche Verkehrshaltestellen zu finden, die zu Fuß oder mit dem Fahrrad innerhalb einer bestimmten Zeit erreichbar sind. Für jede Haltestelle werden Abfahrtsinformationen nach Verkehrsmittel und Route bereitgestellt.

## 1. Erklärung

Die Nahverkehrsanalyse (PT Nearby Stations) ist ein geeignetes Werkzeug, um **öffentliche Verkehrshaltestellen und deren Verbindungen** zu visualisieren, die zu Fuß oder mit dem Fahrrad von einem oder mehreren Ausgangspunkten erreichbar sind. Die nächstgelegenen Haltestellen, die dort verfügbaren öffentlichen Verkehrslinien, ihre Frequenz und die Reisezeit zu Fuß und mit dem Fahrrad werden als Ergebnis bereitgestellt.

**Die Nähe zu nahegelegenen Stationen** ist für verschiedene Aspekte des städtischen Lebens wesentlich und wichtig in der Stadtplanung. Die Verfügbarkeit von öffentlichen Verkehrsverbindungen verbessert die Erreichbarkeit für Bewohner, Arbeiter und Besucher erheblich.


![Nearby Stations in GOAT](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_example.png "Nearby Stations in GOAT")

:::info 
Die Berechnung der nahegelegenen Stationen ist nur für Gebiete verfügbar, in denen das öffentliche Verkehrsnetz in GOAT integriert ist.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/toolbox/accessibility_indicators/gueteklassen/geofence-pt.png').default} alt="Geofence for nearby stations calculation in GOAT" style={{ maxHeight: "400px", maxWidth: "400px", alignItems:'center'}}/>
</div> 

Falls Sie eine Analyse außerhalb dieses Geofence durchführen müssen, wenden Sie sich bitte an den [Support](https://plan4better.de/en/contact/ "Contact Support") und wir werden prüfen, was möglich ist.
:::


## 2. Anwendungsbeispiele

- Welche öffentlichen Verkehrshaltestellen befinden sich in der Nähe und bieten bequemen Zugang zu wichtigen Sehenswürdigkeiten und Wahrzeichen für Touristen, die eine neue Stadt erkunden?
- Bei der täglichen Pendelstrecke zur Arbeit, welche nahegelegenen öffentlichen Verkehrshaltestellen bieten optimale Routen und Fahrpläne für eine nahtlose Reise?
- Welche nahegelegenen öffentlichen Verkehrshaltestellen bieten bequemen Zugang zu Einkaufszentren?


## 3. Wie verwendet man den Indikator?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Click on <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Under the <code>Accessibility Indicators</code> menu, click on <code>PT Nearby Stations</code>.</div>
</div>

![Menu Overview for Public Transport Nearby Stations](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_overview.png "Menu Overview for Public Transport Nearby Stations")

### Zugang zur Haltestelle

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select the <code>Station Access</code> mode (<i>walk, bicycle, or pedelec</i>), which shall be used for the way to the PT station.</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Set the configurations for the Station Access by choosing <code>Travel time limit (min)</code> and <code>Travel speed (km/h)</code>.</div>
</div>

### Konfiguration der Haltestelle

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Pick which <code>Public transport modes</code> shall be considered for the nearby stations.</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Select for which <code>Day</code>, <code>Start Time</code> and <code>End Time</code> you would like to see the public transport connections.</div>
</div>

![Configurations for Public Transport Nearby Stations](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_config.png "Configurations for Public Transport Nearby Stations")

### Ausgangspunkte

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Select the <code>Starting point method</code> to define how you like to define the starting point(s) for the trip(s). You can either <b>Select on map</b> or <b>Select from layer</b>.</div>
</div>

<Tabs>
  <TabItem value="Select on map" label="Select on map" default className="tabItemBox">
 
  Klicken Sie auf <code>Auf der Karte auswählen</code>. Wählen Sie den/die Ausgangspunkt(e) aus, indem Sie auf die jeweiligen Position(en) in der Karte klicken. Sie können beliebig viele Ausgangspunkte hinzufügen.

  </TabItem>

  <TabItem value="Select from layer" label="Select from layer" className="tabItemBox">
  
  Klicken Sie auf <code>Aus Ebene auswählen</code>. Wählen Sie die <code>Punktebene</code> aus, die die Ausgangspunkte enthält, die Sie verwenden möchten.
  
  </TabItem>
</Tabs>

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Click on <code>Run</code>. This starts the capturing of the Nearby Stations from the selected starting point(s).</div>
</div>

:::tip Hinweis

Je nach Anzahl der ausgewählten Ausgangspunkte kann die Berechnung einige Minuten dauern. Die [Statusleiste](../../workspace/home#status-bar) zeigt den aktuellen Fortschritt an.

:::

### Ergebnisse

<div class="step">
  <div class="step-number">9</div>
  <div class="content">As soon as the calculation process is finished, the resulting layers will be added to the map. The results consist of one layer called <b>"Nearby Stations"</b>, showing the Nearby PT Stations, and one layer called <b>"Starting Points - Nearby Stations"</b> which provides all starting points that were used for the calculation of this indicator. 
  <p></p>
  When clicking on a point in the map, further details, such as <b>stop name</b>, <b>access time [min]</b> and <b>aggregate frequency of PT service [min]</b>, become visible.
</div>
</div>


![Result of Public Transport Nearby Stations](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_result.png "Result of Public Transport Nearby Stations")



:::tip Tipp
Möchten Sie Ihre Ergebnisse stylen und ansprechende Karten erstellen? Siehe [Styling](../../map/layer_style/styling).
:::

## 4. Technische Details

Ähnlich wie die Public Transport Quality Classes (ÖV-Güteklassen) wird dieser Indikator auf Basis von **GTFS-Daten** berechnet (siehe [Datenbasis](../../data/data_basis)). Basierend auf den ausgewählten Verkehrsmitteln, dem Tag und dem Zeitfenster werden die nahegelegenen PT-Stationen ermittelt.