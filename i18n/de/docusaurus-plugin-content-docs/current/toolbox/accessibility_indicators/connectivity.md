---
sidebar_position: 2

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";

# Heatmap - Konnektivität
Eine farbkodierte Karte zur Visualisierung der Konnektivität von Orten innerhalb eines Interessengebiets ([AOI](../../../further_reading/glossary#area-of-interest-aoi „What is an AOI?“)).

## 1. Erläuterung

Die Heatmap wird als farbkodiertes sechseckiges Gitter dargestellt und berücksichtigt reale Verkehrs- und Straßennetze zur Berechnung der Konnektivität. Nach der Angabe einer *Routenart* (zu Fuß, mit dem Fahrrad usw.) und eines *Reisezeitlimits* zeigt das Ergebnis ein farbkodiertes hexagonales Raster, das die relative Konnektivität aller Orte innerhalb des angegebenen AOI darstellt.

Im Gegensatz zu unseren anderen Heatmaps, die sich auf die Visualisierung der Erreichbarkeit bestimmter Punkte (wie z. B. [POI](../../../further_reading/glossary#point-of-interest-poi „What is a POI?“)) oder Einrichtungen in der Umgebung konzentrieren, stellen konnektivitätsbasierte Heatmaps die Gesamtkonnektivität eines Gebiets dar. Das bedeutet, dass alle Orte innerhalb Ihres AOI als Ziele betrachtet werden, und für jeden Ort stellt seine „Konnektivität“ den geografischen Bereich (innerhalb und außerhalb des AOI) dar, von dem aus der Ort unter Berücksichtigung der angegebenen *Routenart* und *Reisezeitbeschränkung* erreichbar ist.

![Connectivity-based Heatmap in GOAT](/img/toolbox/accessibility_indicators/heatmaps/connectivity_based/connectivity.png "Connectivity-based Heatmap in GOAT")

:::info 

Heatmaps sind in bestimmten Regionen verfügbar. Bei der Auswahl eines `Routing type` wird auf der Karte ein **geofence** angezeigt, um die unterstützten Regionen hervorzuheben.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/toolbox/accessibility_indicators/heatmaps/connectivity_based/geofence.png').default} alt="Geofence for Connectivity-based Heatmaps in GOAT" style={{ maxHeight: "400px", maxWidth: "400px", alignItems:'center'}}/>
</div>


Wenn Sie Analysen über diesen Geofence hinaus durchführen möchten, wenden Sie sich bitte an [contact us](https://plan4better.de/en/contact/ „Contact us“). Wir besprechen mit Ihnen gerne weitere Möglichkeiten.

:::

## 2. Beispielhafte Anwendungsfälle

 - Wie gut ist das Straßen-, Fuß- oder Radwegenetz in einem bestimmten Gebiet vernetzt?

 - Wie schneiden die Orte innerhalb eines AOI in Bezug auf die Anbindung an die verschiedenen Verkehrsträger ab?

 - Gibt es Barrieren, Lücken oder Inseln im Straßennetz, die die Konnektivität behindern?

 - Bietet das bestehende Verkehrsnetz einen gleichberechtigten Zugang innerhalb der AOI?

## 3. Wie ist der Indikator zu verwenden?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Klicken Sie auf<code>Werkzeuge</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Unter<code>Erreichbarkeitsindikatoren</code> wählen Sie<code>Heatmap Konnektivität</code>.</div>
</div>

### Routing

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Wählen Sie ein <code>Verkehrsmittel</code> welches Sie für die Heatmap verwenden möchten.</div>
</div>

<Tabs>

<TabItem value="walk" label="Walk" default className="tabItemBox">

#### Zu Fuß

Berücksichtigt alle zu Fuß begehbaren Wege. Für Heatmaps wird eine Gehgeschwindigkeit von 5 km/h angenommen.

:::tip Tipp

Weitere Einblicke in den Routing-Algorithmus erhalten Sie unter [Routing/Walk](../../routing/walking).

:::

</TabItem>
  
<TabItem value="cycling" label="Bicycle" className="tabItemBox">

#### Fahrrad

Berücksichtigt alle mit dem Fahrrad befahrbaren Wege. Dieser Routing-Modus berücksichtigt bei der Berechnung der Zugänglichkeit die Oberfläche, die Glätte und die Steigung der Straßen. Für Heatmaps wird eine Fahrradgeschwindigkeit von 15 km/h angenommen.

:::tip Hinweis

Weitere Einblicke in den Routing-Algorithmus erhalten Sie unter [Routing/Fahrrad](../../routing/fahrrad). Darüber hinaus können Sie diese [Publikation](https://doi.org/10.1016/j.jtrangeo.2021.103080) lesen.

:::

</TabItem>

<TabItem value="pedelec" label="Pedelec" className="tabItemBox">

#### Pedelec

Berücksichtigt alle mit dem Pedelec befahrbaren Wege. Dieser Routing-Modus berücksichtigt bei der Berechnung der Erreichbarkeit die Oberfläche und Glätte der Straßen. Für Heatmaps wird eine Pedelec-Geschwindigkeit von 23 km/h angenommen.

:::tip Tipp

Weitere Einblicke in den Routing-Algorithmus erhalten Sie unter [Routing/Fahrrad](../../routing/fahrrad). Darüber hinaus können Sie diese [Publikation](https://doi.org/10.1016/j.jtrangeo.2021.103080) lesen.

:::

</TabItem>

<TabItem value="car" label="Car" className="tabItemBox">

#### Auto

Berücksichtigt alle mit dem Auto befahrbaren Wege. Dieser Routing-Modus berücksichtigt bei der Berechnung der Erreichbarkeit Geschwindigkeitsbegrenzungen und Einbahnstraßenbeschränkungen.

:::tip Tipp

Weitere Einblicke in den Routing-Algorithmus erhalten Sie unter [Routing/Car](../../routing/car).

:::

</TabItem>

</Tabs>

### Konfiguration

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Wählen Sie ein <code>Reisezeitlimit</code> für Ihre Heatmap aus. Dies wird im Zusammenhang mit Ihrem zuvor ausgewählten <i>Verkehrsmittel</i> verwendet.</div>
</div>

:::tip Tipp

Benötigen Sie Hilfe bei der Auswahl einer geeigneten Reisezeit für verschiedene Gemeinschaftseinrichtungen? Das [„Standort-Werkzeug“] (https://www.chemnitz.de/chemnitz/media/unsere-stadt/verkehr/verkehrsplanung/vep2040_standortwerkzeug.pdf) der Stadt Chemnitz kann Ihnen dabei behilflich sein.

:::

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Wählen Sie die <code>Referenzlayer</code> (Layer, der Ihren AOI enthält), für den Sie die Heatmap berechnen möchten. Dies kann eine beliebiger Polygon-Feature-Layer sein.</div>
</div>


<div class="step">
  <div class="step-number">6</div>
  <div class="content">Klicken Sie auf <code>Ausführen</code>, um mit der Berechnung der Heatmap zu beginnen.</div>
</div>

:::tip Tipp

Je nach Ihrer Konfiguration kann die Berechnung einige Minuten dauern. Die [Statusleiste](../../Arbeitsbereich/home#status-bar) zeigt den aktuellen Fortschritt an.

:::

### Ergebnisse

<div class="step">
  <div class="step-number">10</div>
  <div class="content">Nach Abschluss der Berechnung wird ein Ergebnisslayer zur Karte hinzugefügt. Dieser Layer "<i>Heatmap Konnektivität</i>" wird Ihre farblich gekennzeichnete Heatmap enthalten.
  <p></p>
  Durch Klicken auf eine der hexagonalen Zellen der Heatmap wird der berechnete Konnektivitätswert für diese Zelle angezeigt.</div>
</div>


![Connectivity-based Heatmap Result in GOAT](/img/toolbox/accessibility_indicators/heatmaps/connectivity_based/connectivity_heatmap_result.png "Connectivity-based Heatmap Result in GOAT")


:::tip Tipp

Möchten Sie Ihre Heatmaps gestalten und schöne Karten erstellen? Siehe [Styling](../../map/layer_style/styling).
:::

## 4. Technische Details

### Berechnung

Für jede Zelle des sechseckigen Gitters (innerhalb Ihres AOI) wird die gesamte Ausdehnung der umgebenden Zellen, von denen aus sie erreichbar ist, ermittelt. Diese umgebenden Zellen können sich außerhalb Ihres AOI befinden, müssen aber in Bereichen liegen, die gemäß der angegebenen `Travel time limit`  und dem `Routing type` zugänglich sind.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/toolbox/accessibility_indicators/heatmaps/connectivity_based/heatmap_connectivity_infographic.png').default} alt="Extent of cells from where destination cell within AOI is accessible." style={{ maxHeight: "400px", maxWidth: "500px", alignItems:'center'}}/>
</div>

Konnektivitäts Formel:

![Connectivity Formula](/img/toolbox/accessibility_indicators/heatmaps/connectivity_based/connectivity_formula.png "Connectivity Formula")

Dabei ist ***i*** ein Reisezeitschritt und ***n*** die Reisezeitgrenze. Diese Funktion berechnet die gesamte geographische Fläche (in Quadratmetern), von der aus die Zielzelle in Ihrem AOI erreichbar ist.

### Klassifizierung
Zur Klassifizierung der Konnektivitätsstufen, die für jede Rasterzelle berechnet wurden (für die farbliche Darstellung), wird standardmäßig eine Klassifizierung auf der Grundlage von Quantilen verwendet. Es können jedoch auch verschiedene andere Klassifizierungsmethoden verwendet werden. Weitere Informationen finden Sie im Abschnitt **[Datenklassifizierungsmethoden](../../map/layer_style/attribute_based_styling#data-classification-methods)** auf der Seite *Attribute-based Styling*.

### Visualisierung 

Heatmaps in GOAT nutzen die **[Uber's H3 grid-based](../further_reading/glossary#h3-grid)** Lösung für effiziente Berechnungen und leicht verständliche Visualisierung. Hinter den Kulissen wird eine vorberechnete Reisezeitmatrix für jeden *Routentyp* mit dieser Lösung abgefragt und in Echtzeit weiterverarbeitet, um die Erreichbarkeit zu berechnen und eine endgültige Heatmap zu erstellen.

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

### Beispiel für die Berechnung

Das folgende Beispiel veranschaulicht die Berechnung einer konnektivitätsbasierten Heatmap für eine bestimmte AOI. Die Heatmap wird für ein `Travel time limit` von 15 Minuten und einen`Routing type` von `Walk`berechnet.

<img src={require('/img/toolbox/accessibility_indicators/heatmaps/connectivity_based/connectivity-calculation.gif').default} alt="Options" style={{ maxHeight: "800px", maxWidth: "800px"}}/>
