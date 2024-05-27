---
sidebar_position: 2

---

# Fahrrad/Pedelec


Das **Fahrrad/Pedelec-Routing** wird für alle Analysen in GOAT verwendet, die Fahrradfahrten enthalten. 


 
## 1. Zielsetzung

Das Fahrrad-/Pedelec-Routing wird für viele Indikatoren in GOAT verwendet, wie z.B. [Catchment Areas](../toolbox/accessibility_indicators/catchments "Visit Docs on Catchment Areas"), [Heatmaps](../toolbox/accessibility_indicators/connectivity "Visit Docs on Heatmaps") und [PT Nearby Stations](../toolbox/accessibility_indicators/nearby_stations "Visit Docs on PT Nearby Stations"). Da GOAT auch die Erstellung von [Scenarios on the Paths Network](../scenarios/ways) erlaubt, wird ein **angepasster Routing-Algorithmus** benötigt, der auch die Änderungen des Szenarios in den Erreichbarkeitsanalysen widerspiegelt. Für den Verkehrsträger Fahrrad/Pedelec werden dabei **nur Wege berücksichtigt, die für den Radverkehr geeignet sind**. Darüber hinaus haben die `surface` und die `slope` einen Einfluss auf die Radfahrgeschwindigkeit und werden daher bei der Routenplanung berücksichtigt. Die durchschnittliche `speed` einer radfahrender Person kann vom Benutzer bei jeder Erreichbarkeitsanalyse angepasst werden. Abhängig von der Steigung und Oberfläche eines Wegabschnitts wird die Geschwindigkeit entsprechend angepasst. 


## 2. Daten

### Routing-Netzwerk

Die Daten der **[Overture Maps Foundation](https://overturemaps.org/)** iwerden in GOAT als Routing-Netzwerk verwendet. Es umfasst die Verkehrsinfrastruktur mit **Kanten** (für jeden durchgehenden Weg, der nicht von einem anderen halbiert wird) und **Knoten** (für jeden Punkt, an dem sich zwei verschiedene Wege kreuzen), die reale Netzwerke darstellen.


### Topographie und Höhenlage

Die Höhendaten stammen von **[Copernicus](https://www.copernicus.eu/en)** als **Digital Elevation Model (DEM)** Kacheln.


## 3. Technische Details

### Datenvorverarbeitung

Die folgenden Schritte werden an den Daten durchgeführt, um ein **schnelles** und **genaues** Routing für Fahrrad/Pedelec zu ermöglichen:

 1. **Attribute Parsing:**  Kategorisierung der Attribute der Kanten (Straßen `class` und `surface`).
 2. **Geospatial Indexing:**  Nutzen des **[Uber's H3 grid-based](../further_reading/glossary#h3-grid)** Indexing für effizientes Routing.
 3. **Oberflächenimpedanzberechnung:** Berechnung der Impedanz unter Berücksichtigung der Oberflächeneigenschaften.
 4. **Steigungsimpedanzberechnung:** Überlagerung von DEM auf Kanten zur Berechnung von Steigungsprofilen.


### Routing-Prozess-Schritte

#### Extraktion von Teilnetzen

1. **Pufferregion:** Basierend auf Benutzerherkunft, Reisezeit und Geschwindigkeit.
2. **Kantenfilterung:** Es werden nur die für den Radverkehr relevanten Kanten berücksichtigt.

Für das Fahrrad-/Pedelec-Routing werden die Kanten der folgenden Straßenklassen berücksichtigt:

`secondary`, `tertiary`, `residential`, `living_street`, `trunk`, `unclassified`, `parking_aisle`, `driveway`, `alley`, `pedestrian`, `crosswalk`, `track`, `cycleway`, `bridleway` and `unknown`.

Weitere Informationen zu diesen Klassifizierunged sind im [Overture Wiki](https://docs.overturemaps.org/schema/reference/transportation/segment) zu finden.

#### Erstellung künstlicher Kanten

Die vom Benutzer bereitgestellten Ausgangspunkte befinden sich in der Regel in geringer Entfernung zum Straßennetz. Um die zusätzliche Zeit (oder die Kosten) für die Fahrt vom Ausgangspunkt zur nächstgelegenen Straße zu berücksichtigen, werden künstliche (oder simulierte) Kanten erstellt.

#### Berechnung der Kantenkosten

Für alle Kanten im Teilnetz wird ein Kostenwert (dargestellt als Zeit) auf der Grundlage der Weglänge und der Radfahrgeschwindigkeit berechnet.

Kostenfunktion für **Fahrrad**:
`cost = (length * (1 + slope impedance + surface impedance)) / speed`

Kostenfunktion für **Pedelec**:
`cost = (length * (1 + surface impedance)) / speed`

Wenn eine Kante der Klasse `pedestrian` oder `crosswalk` angehört, gehen wir davon aus, dass der Fahrer absteigt und sein Fahrrad/Pedelec geht. Die Kosten für diese Art von Segmenten sind: `cost = length / speed`

#### Netzausbreitung

Um den kürzesten Weg vom Ausgangspunkt zu verschiedenen Zielen zu berechnen, wird eine eigene Implementierung des bekannten [Dijkstra Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) verwendet.


<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/routing/walk/dijkstra.gif').default}  alt="Dijkstra Algorithm" style={{ width: "auto", height: "auto", objectFit: "cover"}}/>
<p style={{ textAlign: 'center' }}>GIF: <a href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm">Dijkstra Algorithm</a></p>
</div>


Die Implementierung hat eine Zeitkomplexität von *O(ElogV)*, ist in **Python** geschrieben und verwendet den just-in-time compiler **Numba**.


## 4. Weitere Lektüre

- E. Pajares, B. Büttner, U. Jehle, A. Nichols, and G. Wulfhorst, ‘Accessibility by proximity: Addressing the lack of interactive accessibility instruments for active mobility’, *Journal of Transport Geography*, Vol. 93, p. 103080, May 2021, [doi: 10.1016/j.jtrangeo.2021.103080](https://doi.org/10.1016/j.jtrangeo.2021.103080).
