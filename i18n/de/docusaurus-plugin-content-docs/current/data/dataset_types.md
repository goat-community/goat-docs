---
sidebar_position: 3
---

# Datensatztypen

Die Datensätze in GOAT sind in **interne und externe Datensätze** unterteilt. Interne Datensätze sind solche, die innerhalb von GOAT gespeichert sind, während externe Datensätze auf externen Servern gespeichert sind und als Dienst eingebunden werden.

## Interne Datensätze

Interne Datensätze beziehen sich auf Datensätze, die **direkt in GOAT gespeichert und verwaltet werden**. Dazu gehören [Features](#1-features), die räumlich referenzierte geografische Merkmale enthalten, und [Tabellen](#2-tables), die aus nicht-räumlichen Daten bestehen. Interne Datensätze können für die Durchführung von Analysen in GOAT heran gezogen werden.

:::info INFO
Welche Datentypen von GOAT für interne Datensätze unterstützt werden, erfahren Sie unter [**Datentypen**](../data/data_types).
:::

### 1. Features
Feature-Datensätze sind eine Bündelung für **räumlichen Objekten** wie Punkte, Linien oder Polygone. Benutzer können Daten aus **Shapefiles**, **Geopackages**, **GeoJSON** und **KML**-Dateien hochladen und verwenden. Feature-Datensätze können auf der Karte visualisiert, [gestylt](../category/layer-style) und für Analysen mit allen Werkzeugen aus der [Toolbox](../category/toolbox) genutzt werden. Darüber hinaus können Feature-Datensätze als Datenbasis für die [Szenarienerstellung](../category/scenarios) dienen.

In GOAT gibt es zwei verschiedene Arten von Feature-Datensätzen, um unterschiedliche Aspekte abzudecken:

- **Feature Dataset Standard:** Dies ist der häufigste Datensatz, der automatisch ausgewählt wird, wenn ein Benutzer eine Datei hochlädt. Es unterstützt eine Vielzahl von Formaten, einschließlich GeoJSON, GPKG, KML und ZIP-Dateien. Dieser Datensatz dient als Grundlage für grundlegende räumlichen Operationen in GOAT.

- **Feature Dataset Tool:** Dieser Datensatz umfasst alle Datensätze, die mit den in GOAT verfügbaren Werkzeugen berechnet wurden. Wie mit dem Feature Dataset Standard können Benutzer den Datensatz für weitere Analysen verwenden.

### 2. Tabellen
Tabellen sind **nicht-räumliche Datensätze**, die sich von den räumlichen Datensätzen durch das Fehlen Geometrien unterscheiden. Diese Datensätze können für ausgewählte Analysen und Datenverarbeitungswerkzeuge verwendet werden. Benutzer können Tabellendatensätze in weit verbreiteten Formaten wie **CSV** (Comma-Separated Values) und **XLSX** (Microsoft Excel Open XML Spreadsheet) importieren.

## Externe Datensätze

:::info Bald verfügbar

Dieses Feature befindet sich derzeit in der Entwicklung. 🧑🏻‍💻

:::

Diese Datensätze umfassen hauptsächlich [Imageries](#1-imageries) und [Vector Tiles](#2-vector-tiles), die jeweils unterschiedliche Zwecke erfüllen.

### 1. Imageries
Imagery-Datensätze sind Datensätze, die von externen Quellen wie **WMS** (Web Map Service) oder **WMTS** (Web Map Tile Service) bereitgestellt werden. Damit können eine Vielzahl von georeferenzierten Kartenbildern, wie z.B. topografische Karten, von externen Servern bezogen und in GOAT integriert werden. Während diese Bilder als statische Karten eingebunden werden können, ist zu beachten, dass sie keine analytischen Funktionen unterstützen.

:::tip Tipp

Die Gestaltung dieser externen Bilddatensätze hängt vom externen Dienst ab, der den WMS (z.B. Dienst von GeoServer "https://wms.websitehai.com/geoserver/ows?SERVICE=WMS&") oder WMTS bereitstellt.
Daher kann die visuelle Darstellung der Kartenbilder, einschließlich Elemente wie Farbschemata und Darstellung geografischer Merkmale, nicht innerhalb des GOAT-Frameworks geändert werden.

:::

### 2. Vector Tiles
**Vector Tile Datasets** ermöglichen die Integration von **MVT** (Mapbox Vector Tile) (z.B. mapbox://mapbox.mapbox-terrain-v2) in GOAT, sodass diese effizienten Vektorkacheln als statische Karten verwendet werden können.
