---
sidebar_position: 4
---

# Katalog

Der **Datenkatalog** ist eine umfassende Liste aller verfügbaren [georäumlichen Datensätze](../further_reading/glossary#geospatial-data) zur Erkundung und Analyse. Eine breite Palette von Datensätzen wird von Plan4Better, unseren Partnern und [Open-Source](../further_reading/glossary#open-source)-Bibliotheken bereitgestellt, wodurch eine **zuverlässige und genaue** Datenbank für Ihre GIS-Projekte sichergestellt wird.

<div class="content"><img src={require('/img/workspace/catalog/home-catalog.png').default} alt="Data Catalog" style={{ maxHeight: "700px", maxWidth: "800px"}}/></div>

## Den Katalog erkunden

Der Zugang erfolgt über den [Arbeitsbereich](../category/workspace) oder über die Schaltfläche [`+ Ebene hinzufügen`](../map/layers#add-layers) in Ihrem GOAT-Projekt. Sie können unsere Sammlung von Datensätzen nach *Schlüsselwörtern durchsuchen und räumliche und nicht-räumliche Filter* anwenden, um eine effiziente Entdeckung zu ermöglichen. Sie können auch Datensätze interaktiv in unserer Benutzeroberfläche vorab ansehen, um den Inhalt und die Qualität zu bewerten, und so eine visuelle Erkundung ermöglichen. Seien Sie versichert, dass unsere Sammlung aus autoritativen Quellen stammt und eine hohe Datenqualität aufweist.

Unser Katalog bietet eine umfangreiche Sammlung von Datensätzen, die verschiedene thematische Bereiche abdecken und in verschiedenen Kategorien unterteilt sind, darunter:

- **Grundkarte:** Grundlegende Kartenebene, die wesentliche geografische Merkmale wie Küstenlinien, Flüsse und Gelände enthält und als Hintergrund für zusätzliche Datenebenen dient.

- **Bildmaterial:** Hochauflösende visuelle Daten, die von Satelliten oder Luftaufnahmen erfasst wurden und detaillierte Ansichten von Landschaften, städtischen Gebieten und Infrastrukturen bieten.

- **Grenzen:** Räumliche Abgrenzungen, die administrative, politische oder geografische Grenzen darstellen, einschließlich Landesgrenzen, Staats-/Provinzgrenzen und Gemeindebezirke.

- **Landnutzung:** Kategorisierung von Landflächen basierend auf ihrer primären Nutzung, einschließlich Klassifikationen wie Wohngebiete, Gewerbegebiete, Industriegebiete, Landwirtschafts- und Erholungszonen.

- **Umwelt:** Daten, die natürliche Merkmale und Phänomene darstellen, wie Ökosysteme, Klimamuster und ökologische Lebensräume.

- **Menschen:** Demografische Daten zu menschlichen Populationen, wie Bevölkerungsdichte, Bevölkerungsverteilung, Altersgruppen und sozioökonomische Merkmale.

- **Verkehr:** Informationen zu Verkehrsnetzen und Infrastrukturen, einschließlich Straßen, Autobahnen, Eisenbahnen, Flughäfen, Häfen und öffentlichen Verkehrssystemen.

- **Orte:** Sehenswürdigkeiten und geografische Wahrzeichen wie Schulen, Carsharing-Standorte, Touristenattraktionen und Krankenhäuser.

![Data Catalog in GOAT](/img/workspace/catalog/catalog_general.png "Data Catalog in GOAT")

Ein Klick auf einen Datensatz innerhalb der Katalogseite führt Sie zum **Metadaten**-Bereich. Hier können Sie detaillierte Informationen zum Datensatz erkunden, einschließlich seiner **Beschreibung**, des **[Datensatztyps](../data/dataset_types)**, der **geografischen und Sprachcodes** (basierend auf dem [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html)), des **Verteilernamens** und der **Lizenzdetails**. Sie können auch die **Kartenvorschau des Datensatzes** und die zugehörigen Daten direkt von der Datenseite aus ansehen.

## Katalogdaten in Ihrem GOAT-Projekt verwenden

<div class="step">
  <div class="step-number">1</div>
  <div class="content"> Under the <b>Layer</b> tab click <code> + Add Layer</code>.</div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content"> Select <code>Catalog Explorer</code> and browse the <b>Data Catalog</b>.</div>
</div>

<div class="content"><img src={require('/img/workspace/catalog/map-catalog.png').default} alt="Catalog Explorer" style={{ maxHeight: "700px", maxWidth: "800px"}}/></div>

<div class="step">
  <div class="step-number">3</div>
  <div class="content"> Select a <i>dataset</i> and click <code>Add Layer</code>.</div>
</div>

<div class="content"><img src={require('/img/workspace/catalog/add-layer.png').default} alt="Catalog Explorer" style={{ maxHeight: "700px", maxWidth: "800px"}}/></div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content"> Once added, apply a <code><img src={require('/img/map/filter/filter_icon.png').default} alt="Filter Icon" style={{ maxHeight: "16px", maxWidth: "16px"}}/> Filter</code> to the new layer. This will filter the data by a logical or spatial expression, retaining only the data necessary for your analysis and making it easier to work with.</div>
</div>


:::tip HINWEIS

Um mehr über die erweiterten Filterfunktionen von GOAT zu erfahren, besuchen Sie die Seite [Filter](../map/filter.md "Filter dataset").

:::