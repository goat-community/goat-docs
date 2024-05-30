---
sidebar_position: 7
---
import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Nahgelegene ÖV-Haltestellen 

Die **Nahgelegene ÖV-Haltestellen**-Analyse wird verwendet, um öffentliche Verkehrshaltestellen zu finden, die zu Fuß oder mit dem Fahrrad innerhalb einer bestimmten Zeit erreichbar sind. Für jede Haltestelle werden Abfahrtsinformationen nach Verkehrsmittel und Route bereitgestellt.

## 1. Erklärung

Die Nahverkehrsanalyse (Nahgelegene ÖV-Haltestellen) ist ein geeignetes Werkzeug, um **öffentliche Verkehrshaltestellen und deren Verbindungen** zu visualisieren, die zu Fuß oder mit dem Fahrrad von einem oder mehreren Ausgangspunkten erreichbar sind. Die nächstgelegenen Haltestellen, die dort verfügbaren öffentlichen Verkehrslinien, ihre Frequenz und die Reisezeit zu Fuß und mit dem Fahrrad werden als Ergebnis bereitgestellt.

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
  <div class="content">Click on <code>Werkzeuge</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Unter<code>Erreichbarkeitsindikatoren</code> klicken Sie auf <code>Nahgelegene ÖV-Haltestellen</code>.</div>
</div>

![Menu Overview for Public Transport Nearby Stations](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_overview.png "Menu Overview for Public Transport Nearby Stations")

### Zugang zu Stationen

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Wählen Sie den <code>Zugang zu Stationen</code> (<i>zu Fuß, mit dem Fahrrad oder Pedelec</i>), der für den Weg zur nächstgelegenen Station verwendet werden soll.</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Legen Sie die Konfigurationen für den Station-Zugang fest, indem Sie <code>Reisezeitlimit (Minuten)</code> und <code>Reisegeschwindigkeit (km/h)</code> wählen.</div>
</div>

### Station Konfiguration 

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Wählen Sie aus, welche <code>Verkehrsmittel ÖV</code> für die nahegelegenen Stationen berücksichtigt werden sollen.</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Wählen Sie aus, für welchen <code>Tag</code>, <code>Startzeit</code> und <code>Endzeit</code> Sie die öffentlichen Verkehrsanbindungen sehen möchten.</div>
</div>

![Configurations for Public Transport Nearby Stations](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_config.png "Configurations for Public Transport Nearby Stations")

### Starting Points

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Wählen Sie die <code>Art der Startpunkte</code> aus, um zu definieren, wie Sie den bzw. die Startpunkt(e) für die Reise(n) festlegen möchten. Sie können entweder <b>Klicke auf die Karte</b> oder <b>Wähle vom Layer</b>.</div>
</div>

<Tabs>
  <TabItem value="Klicke auf die Karte" label="Klicke auf die Karte" default className="tabItemBox">
 
  Klicken Sie auf <code>Klicke auf die Karte</code>. Wählen Sie den/die Ausgangspunkt(e) aus, indem Sie auf die jeweiligen Position(en) in der Karte klicken. Sie können beliebig viele Ausgangspunkte hinzufügen.

  </TabItem>

  <TabItem value="Wähle vom Layer" label="Wähle vom Layer" className="tabItemBox">
  
  Klicken Sie auf <code>Wähle vom Layer</code>. Wählen Sie den <code>Punktlayer</code> aus, der die Startpunkte enthält, die Sie verwenden möchten.
  
  </TabItem>
</Tabs>

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Klicken Sie auf <code>Ausführen</code>. Dadurch wird die Erfassung der nahegelegenen Stationen von den ausgewählten Startpunkt(en) gestartet.</div>
</div>

:::tip Tipp

Je nach Anzahl der ausgewählten Ausgangspunkte kann die Berechnung einige Minuten dauern. Die [Statusleiste](../../workspace/home#status-bar) zeigt den aktuellen Fortschritt an.

:::

### Ergebnisse

<div class="step">
  <div class="step-number">9</div>
  <div class="content">Sobald der Berechnungsprozess abgeschlossen ist, werden die resultierenden Layer der Karte hinzugefügt. Die Ergebnisse bestehen aus einem Layer namens <b>"Nahegelegene Stationen"</b>, der die nahegelegenen ÖPNV-Stationen zeigt, und einem Layer namens <b>"Startpunkte - Nahegelegene Stationen"</b>, der alle Startpunkte enthält, die für die Berechnung dieses Indikators verwendet wurden.
  <p></p>
  Beim Klicken auf einen Punkt auf der Karte werden weitere Details wie <b>Haltestellenname</b>, <b>Zugangszeit [min]</b> und <b>gesamte Frequenz des ÖPNV-Dienstes [min]</b> sichtbar.
</div>
</div>


![Result of Public Transport Nearby Stations](/img/toolbox/accessibility_indicators/nearby_stations/nearby_stations_result.png "Result of Public Transport Nearby Stations")



:::tip Tipp
Möchten Sie Ihre Ergebnisse bearbeiten und ansprechende Karten erstellen? Siehe [Styling](../../map/layer_style/styling).
:::

## 4. Technische Details

Ähnlich wie die Public Transport Quality Classes (ÖV-Güteklassen) wird dieser Indikator auf Basis von **GTFS-Daten** berechnet (siehe [Datenbasis](../../data/data_basis)). Basierend auf den ausgewählten Verkehrsmitteln, dem Tag und dem Zeitfenster werden die nahegelegenen ÖV-Haltestellen ermittelt.