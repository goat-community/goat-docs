---
sidebar_position: 1
---

import thematicIcon from "/img/toolbox/data_management/join/toolbox.webp"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



# Puffer

Der Puffer erstellt eine **Zone um** angegebene **Punkte, Linien oder Polygone** mit einer festgelegten Pufferdistanz.

## 1. Erklärung

Ein **Puffer** ist ein Werkzeug, das verwendet wird, um das Einzugsgebiet um einen bestimmten Punkt, eine Linie oder ein Polygon zu definieren und das Ausmaß des Einflusses oder der Reichweite von diesem Punkt darzustellen. Benutzer können die ``Distanz`` des Puffers definieren und so den Radius des abgedeckten Bereichs anpassen.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <img src={require('/img/toolbox/geoprocessing/buffer/buffer_types.png').default} alt="Buffer Types" style={{ maxHeight: "500px", maxWidth: "500px", objectFit: "cover"}}/>

</div> 

## 2. Anwendungsbeispiele 

- Wie viele Menschen leben innerhalb einer 500m Pufferdistanz vom Bahnhof? 
- Wie viele Geschäfte sind innerhalb einer 1000m Pufferdistanz von einer Bushaltestelle erreichbar?

## 3. Wie benutzt man das Werkzeug?

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Klicke auf <code>Werkzeuge</code> <img src={thematicIcon} alt="toolbox" style={{width: "25px"}}/>. </div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Klicke im Menü <code>Geoverarbeitung</code> auf <code>Puffer</code>.</div>
</div>

<img src={require('/img/toolbox/geoprocessing/buffer/overview.png').default} alt="Buffer Tool in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>

### Puffer-Layer auswählen

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Wähle den <code>Puffer-Layer</code>, um den du einen Puffer erstellen möchtest.</div>
</div>

### Puffer-Einstellungen

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Definiere über die Puffer-<code>Distanz</code>, wie viele Meter sich der Puffer von deinen Punkten, Linien oder Formen ausdehnen soll.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Definiere, in wie viele <code>Pufferstufen</code> der Puffer unterteilt werden soll.</div>
</div>

:::tip HINWEIS
Abhängig davon, welche geometrischen Ergebnisse du anstrebst, kannst du zuerst auswählen, ob alle Geometrien kombiniert werden sollen (**Polygonvereinigung**). Dies bedeutet, wenn z.B. ein Puffer um benachbarte Punkte erstellt wird, ob du **einzelne Puffer** (**keine Vereinigung**) oder **kombinierte Puffer** (**Vereinigung**) als Ergebnis haben möchtest.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <img src={require('/img/toolbox/geoprocessing/buffer/no_union_vs_union.png').default} alt="Buffer Union-No union Comparison" style={{ maxHeight: "400px", maxWidth: "400px", objectFit: "cover"}}/>

</div> 

Zusätzlich, wenn du dich für eine Polygonvereinigung entscheidest, kannst du wählen, ob jeder Puffer als **gefülltes Polygon (ohne Unterschied)** angezeigt werden soll oder ob du einen **geometrischen Unterschied zwischen jeder Pufferstufe(Unterschied)** anwenden möchtest.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <img src={require('/img/toolbox/geoprocessing/buffer/union_vs_union+difference.png').default} alt="Buffer Union-Buffer Difference Comparison" style={{ maxHeight: "400px", maxWidth: "400px", objectFit: "cover"}}/>

</div> 

:::

<Tabs>
<TabItem value="nounion" label="Keine Vereinigung" default className="tabItemBox">

#### Keine Vereinigung
Wenn du Puffer **ohne Vereinigung** berechnest, erstellt GOAT einzelne Puffer um jede Eingabegeometrie.

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Deaktiviere <code>Polygonvereinigung</code>.</div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Klicke auf <code>Ausführen</code>. Dies startet die Berechnung des Puffers.</div>
</div>

### Ergebnisse

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Sobald diese Aufgabe abgeschlossen ist, wird der resultierende Layer namens <b>"Puffer"</b> deiner Karte hinzugefügt.</div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <img src={require('/img/toolbox/geoprocessing/buffer/result_no_union.png').default} alt="No union Result in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>

</div> 

</TabItem>

  <TabItem value="polygonunion" label="Vereinigung" default className="tabItemBox">

#### Polygonvereinigung
Die ``Polygonvereinigung`` erstellt eine **geometrische Vereinigung** aller Schritte der Pufferpolygone. Sie **kombiniert** mehrere Polygone zu einem einzigen Polygon, das alle Bereiche der einzelnen Polygone umfasst, d.h. der Puffer mit der größten Ausdehnung schließt auch alle Pufferbereiche der kleineren Ausdehnung ein. Dieser Ansatz ist nützlich, wenn du die Gesamtfläche sehen möchtest, die durch alle deine Puffer-Schritte zusammen abgedeckt wird.

<div style={{ display: 'flex', flexDirection: 'column' }}>

  <img src={require('/img/toolbox/geoprocessing/buffer/polygon_union.png').default} alt="Polygon Union in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>

</div> 

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Aktiviere <code>Polygonvereinigung</code>.</div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Klicke auf <code>Ausführen</code>. Dies startet die Berechnung des Puffers.</div>
</div>

### Ergebnisse

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Sobald diese Aufgabe abgeschlossen ist, wird der resultierende Layer namens <b>"Puffer"</b> deiner Karte hinzugefügt.</div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <img src={require('/img/toolbox/geoprocessing/buffer/result_union.png').default} alt="Polygon Union Result in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>

</div> 

  </TabItem>
  <TabItem value="polygondifference" label="Vereinigung + Unterschied " className="tabItemBox">

#### Polygonvereinigung + Polygonunterschied 
Die ``Polygonunterschied``-Operation erstellt einen **geometrischen Unterschied** der Puffer. Sie subtrahiert ein Polygon von einem anderen, was zu Polygonformen führt, bei denen sich die **Puffer nicht überlappen**.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <img src={require('/img/toolbox/geoprocessing/buffer/polygon_difference.png').default} alt="Polygon Union+ Polygon Difference Result in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>

</div> 

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Aktiviere <code>Polygonunterschied</code>.</div>
</div>

<div class="step">
  <div class="step-number">7</div>
  <div class="content">Klicke auf <code>Ausführen</code>. Dies startet die Berechnung des Puffers.</div>
</div>

### Ergebnisse

<div class="step">
  <div class="step-number">8</div>
  <div class="content">Sobald diese Aufgabe abgeschlossen ist, wird der resultierende Layer namens <b>"Puffer"</b> deiner Karte hinzugefügt.</div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <img src={require('/img/toolbox/geoprocessing/buffer/result_union.png').default} alt="Polygon Difference Result in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>

</div> 

  </TabItem>


</Tabs>

:::tip TIPP

Möchtest du deine Puffer bearbeiten und ansprechende Karten erstellen? Siehe [Styling](../../map/layer_style/styling.md).

:::

