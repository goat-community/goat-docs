---
sidebar_position: 4
---

import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp";

# Quell-Ziel

Die **Quell-Ziel**-Analyse wird in verschiedenen Bereichen wie Verkehrsplanung und Stadtplanung verwendet, um **Bewegungen oder Flüsse zwischen verschiedenen Orten** zu untersuchen.

## 1. Erklärung

Das Ursprung-Ziel (OD)-Werkzeug eignet sich zur Untersuchung von **Bewegungsmustern zwischen Standorten**, wie z.B. Pendlerströmen, und bietet Einblicke in räumliche Interaktionen. Dieser analytische Prozess visualisiert die Beziehungen zwischen **Ausgangspunkten (Quellen)** und **Endpunkten (Zielen)**, indem sie **mit einer geraden Linie verbunden** werden. Solche Analysen helfen zu verstehen, wie und warum Bewegungen in verschiedenen Kontexten stattfinden, und unterstützen die Bewertung und Planung von Verkehrsnetzen und städtischen Infrastrukturen. Es unterstützt datenbasierte Entscheidungen, indem **Muster und Trends in räumlichen Interaktionen** hervorgehoben werden, was zur Verbesserung der Effizienz und Nachhaltigkeit von Verkehrssystemen und Stadtstrukturen beiträgt.

Das untenstehende Beispiel zeigt eine *Eingabetabelle (Matrix)* und die resultierenden *Quell-Ziel-Linien* basierend auf den *Postleitzahlengebieten (Geometrien)*.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/toolbox/geoanalysis/origin_destination/od_example.png').default} alt="Origin Destination Tool in GOAT" style={{ maxHeight: "700px", maxWidth: "700px", objectFit: "cover"}}/>
</div> 


## 2. Anwendungsbeispiele

- Visualisierung der Pendlerströme zwischen Wohngebieten (Quellen) und Arbeitsplätzen (Zielen).
- Bewertung der Passagierströme im öffentlichen Nahverkehr zwischen verschiedenen Stationen.
- Analyse des Personenflusses von Wohngebieten (Quellen) zu Einkaufsorten (Zielen).

## 3. Wie benutzt man das Werkzeug?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Klicke auf <code>Werkzeuge</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Klicke im Menü <code>Geoanalyse</code> auf <code>Quell-Ziel</code>.</div>
</div>

<img src={require('/img/toolbox/geoanalysis/origin_destination/overview.png').default} alt="Origin Destination Tool Overview" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>

### Layer

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Wähle deinen <code>Geometrie-Layer</code> (dies sollte ein Feature-Layer sein, der die Geometrien der Quellen und Ziele und ein Attribut enthält, das als Identifikator verwendet werden kann, um die OD-Verbindungen mit den Geometrien abzugleichen) und das <code>Feld für eindeutige IDs</code>.</div>
</div>

### Matrix

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Wähle die <code>Matrix-Tabelle</code> (die Tabelle mit der Ursprung-Ziel-Matrix) und das <code>Ursprungsfeld</code>.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Wähle dein <code>Zielfeld</code> (das Feld, das die Ziele in der Quell-Ziel-Matrix enthält).</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Wähle dein <code>Gewichtsfeld</code> (das Feld, das die Gewichte in der Quell-Ziel-Matrix enthält).</div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Klicke auf <code>Ausführen</code>.</div>
</div>

:::tip Tipp

Abhängig von der Komplexität der OD-Matrix kann die Berechnung einige Minuten dauern. Die [Statusleiste](../../workspace/home#status-bar) zeigt den aktuellen Fortschritt an.

:::

### Ergebnisse 

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Sobald der Berechnungsprozess abgeschlossen ist, werden die resultierenden Layer zur Karte hinzugefügt. Die Ergebnisse bestehen aus einem Layer namens <b>"O-D-Relation"</b>, der die Linien zwischen den Ursprüngen und Zielen zeigt, und einem Layer namens <b>"O-D-Punkt"</b>, der alle Quell- und Zielpunkte bereitstellt (für Polygone werden die Zentroiden verwendet).<p></p>
  Wenn du auf ein "O-D-Relation"-Element auf der Karte klickst, kannst du die Attributdetails anzeigen, wie z.B. die <b>Quelle</b>, das <b>Ziel</b> und das <b>Gewicht</b> dieser Beziehung.</div>
</div>

<img src={require('/img/toolbox/geoanalysis/origin_destination/result.png').default} alt="Origin Destination Result in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>

:::tip TIPP
Möchtest du deinen Ergebnisslayer bearbeiten und ansprechende Karten erstellen? Siehe [Styling](../../map/layer_style/styling).
:::