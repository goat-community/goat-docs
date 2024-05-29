---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";

# Heatmap - Durchschnitt Reisezeit

Eine farbkodierte Karte zur Visualisierung der durchschnittlichen Reisezeit zu Punkten (wie [POI](../../../further_reading/glossary#point-of-interest-poi "Was ist ein POI?")) aus umliegenden Gebieten.

## 1. Erklärung


Visualisiert als farbkodiertes hexagonales Raster, berücksichtigt die Heatmap reale Transport- und Straßennetze, um Reisezeiten zu berechnen. Nach der Festlegung eines *Routing-Typs* (Gehen, Fahrrad, usw.), einer *Opportunity-Schicht* und eines *Reisezeitlimits* wird das Ergebnis ein farbkodiertes hexagonales Raster für alle unter diesen Bedingungen zugänglichen Bereiche anzeigen. Die Farbschattierung bezieht sich auf die durchschnittliche Reisezeit.

:::info INFO

Ein `Opportunity-Layer` enthält [geografische Punkt](../../../data/data_types "Was sind geografische Punkte?")-Daten. Wählen Sie eine oder mehrere solcher Schichten mit Ihren Zielpunkten (Opportunities) als Eingabe für die Heatmap.

:::

Mit der konfigurierbaren Eigenschaft *Anzahl der Ziele* können Sie die Berechnung auf die *n* nächstgelegenen Opportunities beschränken. Dies ergibt eine leicht verständliche Visualisierung, die verwendet werden kann, um Unterschiede in den durchschnittlichen Reisezeiten sogar auf Stadt- oder regionaler Ebene zu identifizieren. Der berechnete Wert für jede Zelle in der Heatmap stellt die durchschnittliche Reisezeit zu den nächstgelegenen *n* Zielen dar.

:::tip Pro Tipp

Kurz beschrieben, sind Zugänglichkeits-Heatmaps eine Visualisierung, die den *Zugang* von verschiedenen unbestimmten Ursprungsorten zu einem oder mehreren festgelegten Zielen darstellt. Dies steht im Gegensatz zu Einzugsgebieten, die den *Abfluss* von einem oder mehreren festgelegten Ursprungsorten zu verschiedenen unbestimmten Zielen darstellen.

:::

![Closest Average-based Heatmap in GOAT](/img/toolbox/accessibility_indicators/heatmaps/closest_average_based/closest_avg.png "Closest Average-based Heatmap in GOAT")

  
:::info 

Heatmaps sind in bestimmten Regionen verfügbar. Beim Auswählen eines `Routing-Typs` wird auf der Karte ein **Geofence** angezeigt, um die unterstützten Regionen hervorzuheben.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/toolbox/accessibility_indicators/heatmaps/closest_average_based/geofence.png').default} alt="Geofence for Closest-average-based Heatmaps in GOAT" style={{ maxHeight: "400px", maxWidth: "400px", alignItems:'center'}}/>
</div> 


Wenn Sie Analysen außerhalb dieses Geofence durchführen möchten, kontaktieren Sie uns bitte [hier](https://plan4better.de/en/contact/ "Kontaktieren Sie uns"). Wir würden uns freuen, weitere Optionen mit Ihnen zu besprechen.

:::

## 2. Beispielanwendungsfälle

- Haben Bewohner in bestimmten Gebieten längere durchschnittliche Reisezeiten zu Annehmlichkeiten als andere?
- Gibt es einen signifikanten Unterschied in den durchschnittlichen Reisezeiten zu Annehmlichkeiten zwischen verschiedenen Vierteln?
- Wie variieren die durchschnittlichen Reisezeiten zu Annehmlichkeiten je nach Verkehrsmittel?
- Wie variieren die durchschnittlichen Reisezeiten zu verschiedenen Arten von Annehmlichkeiten?
- Gibt es Gebiete mit hohen durchschnittlichen Reisezeiten zu Annehmlichkeiten, die von einer verbesserten Verkehrsinfrastruktur profitieren könnten?
- Wenn Standards verlangen, dass eine Mindestanzahl von Annehmlichkeiten innerhalb einer bestimmten Reisezeit zugänglich sein muss, welche Gebiete erfüllen diese Standards?

## 3. Wie verwendet man den Indikator?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Klicken Sie auf<code>Werkzeuge</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Unter<code>Erreichbarkeitsindikatoren</code> klicken Sie auf<code>Heatmap Durchschnitt Reisezeit</code>.</div>
</div>

### Routing

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Wählen Sie ein<code>Verkehrsmittel</code> welches Sie für die Heatmap anwenden möchten.</div>
</div>

<Tabs>

<TabItem value="walk" label="Walk" default className="tabItemBox">

##### Zu Fuß

Berücksichtigt alle Wege, die zu Fuß zugänglich sind. Für Heatmaps wird eine Gehgeschwindigkeit von 5 km/h angenommen.

:::tip Tipp

Für weitere Einblicke in den Routing-Algorithmus, besuchen Sie [Routing/Gehen](../../routing/walking).

:::

:::

</TabItem>
  
<TabItem value="cycling" label="Bicycle" className="tabItemBox">

#### Fahrrad

Berücksichtigt alle Wege, die mit dem Fahrrad zugänglich sind. Dieser Routing-Modus berücksichtigt die Oberfläche, Glätte und Steigung der Straßen bei der Berechnung der Zugänglichkeit. Für Heatmaps wird eine Fahrradgeschwindigkeit von 15 km/h angenommen.

:::tip Tipp

Für weitere Einblicke in den Routing-Algorithmus, besuchen Sie [Routing/Fahrrad](../../routing/bicycle). Außerdem können Sie diese [Publikation](https://doi.org/10.1016/j.jtrangeo.2021.103080) lesen.

:::

</TabItem>

<TabItem value="pedelec" label="Pedelec" className="tabItemBox">

#### Pedelec

Berücksichtigt alle Wege, die mit dem Pedelec zugänglich sind. Dieser Routing-Modus berücksichtigt die Oberfläche und Glätte der Straßen bei der Berechnung der Zugänglichkeit. Für Heatmaps wird eine Pedelec-Geschwindigkeit von 23 km/h angenommen.

:::tip Tipp

Für weitere Einblicke in den Routing-Algorithmus, besuchen Sie [Routing/Fahrrad](../../routing/bicycle). Außerdem können Sie diese [Publikation](https://doi.org/10.1016/j.jtrangeo.2021.103080) lesen.

:::


</TabItem>

<TabItem value="car" label="Car" className="tabItemBox">

#### Auto

Berücksichtigt alle Wege, die mit dem Auto zugänglich sind. Dieser Routing-Modus berücksichtigt Geschwindigkeitsbegrenzungen und Einbahnstraßenbeschränkungen bei der Berechnung der Zugänglichkeit.

:::tip Tipp

Für weitere Einblicke in den Routing-Algorithmus, besuchen Sie [Routing/Auto](../../routing/car).

:::

</TabItem>

</Tabs>

### Gelegenheiten

Gelegenheiten sind im Wesentlichen punktbasierte Daten (wie [POI](../../further_reading/glossary#point-of-interest-poi "Was ist ein POI?")), für die Sie eine Heatmap berechnen möchten. Dies sind die "Ziele" (wie Transitstationen, Schulen, andere Annehmlichkeiten oder Ihre eigenen benutzerdefinierten punktbasierten Daten), während umliegende Gebiete "Quellen" sind, für die ein Zugänglichkeitswert berechnet und visualisiert wird.

Zusätzlich können Sie über die Schaltfläche `+ Add Opportunity` am unteren Rand des Drawers weitere Opportunities erstellen. Alle Opportunity-Layer werden kombiniert, um eine einheitliche Heatmap zu erzeugen.

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Wählen Sie Ihre <code>Möglichkeitsdaten</code> aus dem Dropdown-Menü aus. Dies kann ein zuvor ersteller Layer sein, die punktbasierte Daten enthält.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Wählen Sie ein <code>Reisezeitlimit</code> für Ihre Wärmekarte. Dies wird im Zusammenhang mit Ihrem zuvor ausgewählten <i>Routentyp</i> verwendet.</div>
</div>

:::tip Tipp

Brauchen Sie Hilfe bei der Wahl eines geeigneten Reisezeitlimits für verschiedene gängige Annehmlichkeiten? Das ["Standort-Werkzeug"](https://www.chemnitz.de/chemnitz/media/unsere-stadt/verkehr/verkehrsplanung/vep2040_standortwerkzeug.pdf) der Stadt Chemnitz kann hilfreiche Leitlinien bieten.

:::

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Geben Sie die <code>Anzahl der Ziele</code> an, die beim Berechnen der durchschnittlichen Reisezeit berücksichtigt werden sollen.</div>
</div>

:::tip Tipp

Da der Parameter *Anzahl der Ziele* einmal pro Opportunity-Layer angegeben wird, haben Sie die Flexibilität, für jeden Opportunity-Layer unterschiedliche Werte anzugeben. Dies kann nützlich sein, wenn verschiedene Arten von Annehmlichkeiten unterschiedliche Zugänglichkeitsstandards haben.

:::

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Click <code>Run</code> um die Berechnung der Heatmap zu beginnen</div>
</div>

:::tip Tipp

Je nach Konfiguration kann die Berechnung einige Minuten dauern. Die [Statusleiste](../../workspace/home#status-bar) zeigt den aktuellen Fortschritt an.

:::

### Ergebnisse

<div class="step">
  <div class="step-number">10</div>
  <div class="content">Sobald die Berechnung abgeschlossen ist, wird ein Ergebnislayer zur Karte hinzugefügt. Dieser Layer mit dem Namen <i>Heatmap Closest Average</i> wird Ihre farblich gekennzeichnet Heatmap enthalten.
  <p></p>
  Durch Klicken auf eine der hexagonalen Zellen der Heatmap wird der berechnete Durchschnittswert der Reisezeit für diese Zelle angezeigt.</div>
</div>


<img src={require('/img/toolbox/accessibility_indicators/heatmaps/closest_average_based/clst-avg-calculation.gif').default} alt="Options" style={{ maxHeight: "800px", maxWidth: "800px"}}/>

:::tip Tipp

Möchten Sie Ihre Heatmaps gestalten und ansprechende Karten erstellen? Siehe unter [Styling](../../map/layer_style/styling).

:::

## 4. Technische Details

### Berechnung

Sobald alle eingegebenen Opportunity-Layer kombiniert sind, wird ein Gitter aus umliegenden sechseckigen Zellen identifiziert. Dies geschieht durch die Berücksichtigung von Zellen, in denen mindestens eine Opportunity erreichbar ist, unter Berücksichtigung des spezifizierten `Routing type` und `Travel time limit`. Anschließend wird die durchschnittliche Reisezeit für jede Zelle innerhalb dieses Gitters berechnet, wobei die nächstgelegenen *n* Gelegenheiten, wie in dem Opportunity-Layer angegeben, berücksichtigt werden.

Formel für die durchschnittliche Fahrtzeit:

![Closest Average Formula](/img/toolbox/accessibility_indicators/heatmaps/closest_average_based/closest_avg_formula.png "Closest Average Formula")

wobei die durchschnittliche Reisezeit für Zelle **i** die Summe von bis zu **n** Reisezeiten von Zelle **i** zu Möglichkeit **j** (**tij**) geteilt durch die Anzahl der Möglichkeiten **n** ist, die kleiner sein muss als der angegebene Parameter 'Anzahl der Ziele'.

### Klassifizierung
Zur Klassifizierung der Erreichbarkeitsstufen, die für jede Rasterzelle berechnet wurden (für die farbige Visualisierung), wird standardmäßig eine Klassifizierung auf Basis von Quantilen verwendet. Es können jedoch auch verschiedene andere Klassifizierungsmethoden verwendet werden. Weitere Informationen finden Sie im Abschnitt **[Datenklassifizierungsmethoden](../../map/layer_style/attribute_based_styling#data-classification-methods)** auf der Seite *Attribute-based Styling*.

### Visualisierung 

Heatmaps in GOAT nutzen die **[Uber's H3 grid-based](../further_reading/glossary#h3-grid)** Lösung für effiziente Berechnungen und leicht verständliche Visualisierung. Hinter den Kulissen nutzt eine vorberechnete Reisezeitmatrix für jeden *Routentyp* diese Lösung und wird in Echtzeit abgefragt und weiterverarbeitet, um die Erreichbarkeit zu berechnen und eine endgültige Heatmap zu erstellen.

Die Auflösung und die Abmessungen des verwendeten hexagonalen Gitters hängen von der gewählten *Routenart* ab:

#### Zu Fuß
- Auflösung: 10
- Durchschnittliche Sechseckfläche: 11285.6 m²
- Durchschnittliche Kantenlänge des Sechsecks: 65,9 m

#### Fahrrad
- Auflösung: 9
- Durchschnittliche Sechseckfläche: 78999.4 m²
- Durchschnittliche Kantenlänge des Sechsecks: 174,4 m

#### Pedelec
- Auflösung: 9
- Durchschnittliche Sechseckfläche: 78999.4 m²
- Durchschnittliche Kantenlänge des Sechsecks: 174,4 m

#### Auto
- Auflösung: 8
- Durchschnittliche Sechseckfläche: 552995.7 m²
- Durchschnittliche Kantenlänge des Sechsecks: 461,4 m

### Berechnungsbeispiel

Die folgenden Beispiele veranschaulichen die Berechnung einer auf dem nächstgelegenen Durchschnitt basierenden Heatmap für dieselben Opportunities mit einem variierenden Wert für die „Anzahl der Ziele“.

![Closest Average Heatmaps for different destinations](/img/toolbox/accessibility_indicators/heatmaps/closest_average_based/cls-avg-destinations.png „Closest Average Heatmaps for different destinations“)

Im ersten Beispiel wird die durchschnittliche Reisezeit nur für das nächstgelegene Ziel berechnet, während im zweiten Beispiel die 5 nächstgelegenen Ziele berücksichtigt werden.
