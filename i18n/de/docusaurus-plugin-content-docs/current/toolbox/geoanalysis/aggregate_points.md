---
sidebar_position: 1
---
import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Punkte aggregieren

Das **Punkte aggregieren**-Werkzeug führt statistische Analysen von Punkten durch, z.B. **Anzahl, Summe, Minimum oder Maximum**, und aggregiert die Informationen auf Polygonen.

## 1. Erklärung

Das Werkzeug Punkte aggregieren kann verwendet werden, um **die Eigenschaften von Punkten innerhalb eines bestimmten Gebiets zu analysieren**. Es aggregiert die Informationen der Punkte und ermöglicht so die Berechnung der Punktanzahl, die Summe der Punktattribute oder z.B. den maximalen Wert eines bestimmten Punktattributs innerhalb eines Polygons. Als Polygon-Layer kann entweder ein Feature-Layer (z.B. Stadtteile) oder ein hexagonales Raster verwendet werden.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

  <img src={require('/img/toolbox/geoanalysis/aggregate_points/point_aggregation.png').default} alt="Point Aggregation" style={{ maxHeight: "600px", maxWidth: "600px", objectFit: "cover"}}/>

</div> 

## 2. Anwendungsbeispiele

- Aggregieren der Bevölkerungszahlen auf einem Hexagon-Raster.
- Ableiten der Summe der Verkehrsunfälle innerhalb eines Stadtteils.
- Visualisieren der durchschnittlichen Anzahl von Carsharing-Fahrzeugen pro Station auf Stadtebene.

## 3. Wie benutzt man das Werkzeug?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Klicke auf <code>Toolbox</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Klicke im Menü <code>Geoanalyse</code> auf <code>Punkte aggregieren</code>.</div>
</div>

<img src={require('/img/toolbox/geoanalysis/aggregate_points/aggregate_points.png').default} alt="Point Aggregation Tool in GOAT" style={{ maxHeight: "auto", maxWidth: "auto"}}/>

### Layer zum Aggregieren

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Wähle deinen <code>Referenz-Layer</code>, der die Daten enthält, die du aggregieren möchtest.</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Wähle, auf welchem <code>Gebietstyp</code> du die Referenz-Layer aggregieren möchtest. Du kannst zwischen <b>Polygon</b> oder <b>H3-Raster</b> wählen.</div>
</div>

<Tabs>
  <TabItem value="Polygon" label="Polygon" default className="tabItemBox">

 #### Polygon

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Wähle den <code>Gebiets-Layer</code>, der die Polygone enthält, auf denen du deine Punktdaten aggregieren möchtest.</div>
</div>

  </TabItem>
  <TabItem value="H3 Grid" label="H3-Raster" className="tabItemBox">

 #### H3-Raster

 <div class="step">
  <div class="step-number">5</div>
  <div class="content">Wähle die <code>H3-Rasterauflösung</code>. Du kannst zwischen Auflösungen von <b>3</b> (durchschnittliche Kantenlänge von 69 km) und <b>10</b> (durchschnittliche Kantenlänge von 70 m) wählen.</div>
</div>

:::tip Tipp

Um mehr über das H3-Raster zu erfahren, kannst du das [Glossar](../../further_reading/glossary#H3-grid) besuchen.

:::

  </TabItem>
</Tabs>

### Statistiken

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Wähle die <code>Statistische Methode</code> und das Feld, das du für die <code>Feldstatistik</code> verwenden möchtest (das Feld in des Referenz-Layers, das verwendet wird, um die aggregierten Punkte für die Statistik zu gruppieren).</div>
</div>

Die verfügbaren **Statistischen Methoden** sind im Folgenden aufgeführt. Die verfügbaren Methoden hängen vom Datentyp des ausgewählten Attributs ab:

| Methode | Typ | Beschreibung |
| -------|------| ------------|
| Anzahl | `string`,`number`    | Zählt die Anzahl der Nicht-Null-Werte in der ausgewählten Spalte|
| Summe  | `number`   | Berechnet die Summe aller Zahlen in der ausgewählten Spalte|
| Mittelwert | `number`   | Berechnet den Durchschnitt (Mittelwert) aller numerischen Werte in der ausgewählten Spalte|
| Median | `number`   | Gibt den Mittelwert in der sortierten Liste der numerischen Werte der ausgewählten Spalte zurück|
| Min    | `number`   | Gibt den Minimalwert der ausgewählten Spalte zurück|
| Max    | `number`   | Gibt den Maximalwert der ausgewählten Spalte zurück|

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Klicke auf <code>Ausführen</code>.</div>
</div>

:::tip HINWEIS

Abhängig von der Größe der Datensätze kann die Berechnung einige Minuten dauern. Die [Statusleiste](../../workspace/home#status-bar) zeigt den aktuellen Fortschritt an.

:::

### Ergebnisse

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Sobald der Berechnungsprozess abgeschlossen ist, wird die resultierende Ebene <b>"Aggregation Point"</b> der Karte hinzugefügt. Diese Ebene besteht aus den Informationen der Quell-Ebene und einer <b>zusätzlichen Spalte</b>, die die Ergebnisse der <b>statistischen Operation</b> anzeigt. Du kannst die Tabelle sehen, indem du auf das Polygon auf der Karte klickst.</div>
</div>

<img src={require('/img/toolbox/geoanalysis/aggregate_points/aggregate_points_result.png').default} alt="Point Aggregation Result in GOAT" style={{ maxHeight: "auto", maxWidth: "auto"}}/>

:::tip Tipp
Möchtest du deinen Ergebnislayer stylen und ansprechende Karten erstellen? Siehe [Styling](../../map/layer_style/styling).
:::