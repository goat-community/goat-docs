---
sidebar_position: 3
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Ebenen

Im Bereich **Ebenen** können Ebenen **hinzugefügt und organisiert** werden. Unter anderem kann die Reihenfolge der Ebenen angepasst werden, Ebenen können aktiviert/deaktiviert, dupliziert, umbenannt, heruntergeladen und entfernt werden.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img src={require('/img/map/layers/overview.png').default} alt="Layer View in GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

## Ebenen hinzufügen

Sie können zwei Arten von Ebenen zu Ihrer Karte hinzufügen: [internal layers](../data/dataset_types) oder [external layers](../data/dataset_types). Um neue interne Ebenen hinzuzufügen, können Sie entweder **Datensätze aus Ihrem Datenexplorer** integrieren oder neue **Datensätze von Ihrem lokalen Gerät** hochladen (GeoPackage, GeoJSON, Shapefile, KML, CSV oder XLSX). Externe Ebenen können durch Einfügen der **Url der externen Quelle** (WMS, WMTS oder MVT) hinzugefügt werden. 

Führen Sie die folgenden Schritte aus, um der Karte eine Ebene hinzuzufügen: 

<div class="step">
  <div class="step-number">1</div>
  <div class="content">Navigieren Sie über die linke Seitenleiste zum Menü <b>"Ebene"</b>.</div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Klicke auf <code>+ Ebene hinzufügen</code>. </div>
</div>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">SWählen Sie aus, ob Sie einen Datensatz aus Ihrem  <b>Datenexplorer</b> einbinden möchten,  <b>einen neuen Datensatz hochladen</b> oder einen <b>externen Datensatz</b> hinzufügen möchten.</div>
</div>

<Tabs>
  <TabItem value="Dataset Explorer" label="Dataset Explorer" default className="tabItemBox">


<div class="step">
  <div class="step-number">4</div>
  <div class="content">Wählen Sie die Datei aus, die Sie importieren möchten.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Klicken Sie auf <code>+ Ebene hinzufügen</code>.</div>
</div>


</TabItem>
<TabItem value="Dataset Upload" label="Dataset Upload" className="tabItemBox">


<div class="step">
  <div class="step-number">4</div>
  <div class="content">Wählen Sie die Datei aus, die Sie importieren möchten.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Bestimmen Sie den Namen des Datensatzes und fügen Sie ggf. eine Beschreibung hinzu.</div>
</div>

<div class="step">
  <div class="step-number">6</div>
  <div class="content">Kontrollieren Sie die Informationen und klicken Sie auf <code>Hochladen</code>.</div>
</div>

  </TabItem>
  <TabItem value="Dataset External" label="Dataset External" className="tabItemBox">

:::info demnächst

Wir implementieren derzeit diese Funktion.  🧑🏻‍💻

:::


  </TabItem>
</Tabs>

:::tip Tipp

 Sie können alle Ihre Datasets auf der Seite [Datasets page](../workspace/datasets) verwalten. 

:::

## Organisieren von Ebenen

Sobald Sie einen Datensatz zur Karte hinzugefügt haben, wird er in der **Ebenenliste** angezeigt. Von dort aus können Sie die verschiedenen Ebenen organisieren.

### Ebenen-Reihenfolge

Wenn Sie mehrere Datensätze auf einmal visualisieren, ist die Reihenfolge der Ebenen entscheidend für die Erstellung guter Karten. Daher kann die **Ebenenreihenfolge** interaktiv geändert werden.
Wenn Sie mit der Maus über den linken Rand der Ebene in der Ebenenliste fahren, erscheint ein Pfeilsymbol. Durch Ziehen und Ablegen kann die Ebene verschoben werden. 

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/map/layers/layer_order.gif').default} alt="Layer Order" style={{ maxHeight: "600px", maxWidth: "600px", objectFit: "cover"}}/>
</div> 

### Ebenen ein-/ausblenden

Um eine Ebene vorübergehend aus der Kartenansicht **auszublenden**, klicken Sie in der Ebenenliste auf das Augensymbol der betreffenden Ebene. Wenn Sie erneut auf das Auge klicken, wird die Ebene wieder **sichtbar**.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/map/layers/hide_layers.gif').default} alt="Hide Layer" style={{ maxHeight: "600px", maxWidth: "600px", objectFit: "cover"}}/>
</div> 

### Optionen


BMit einem Klick auf die drei Punkte <img src={require('/img/map/filter/3dots.png').default} alt="Options" style={{ maxHeight: "25px", maxWidth: "25px", objectFit: "cover"}}/> erhalten Sie weitere Optionen zur Verwaltung und Organisation der ausgewählten Ebene.


<img src={require('/img/map/layers/layer_options.png').default} alt="Layer Options" style={{ maxHeight: "250px", maxWidth: "250px", objectFit: "cover"}}/> 


:::tip Tipp

Möchten Sie das Design Ihrer Ebenen ändern? Siehe [Layer Style](../category/layer-styling).  
Möchten Sie nur Teile Ihres Datensatzes visualisieren? Siehe[Filter](../map/filter). 

:::