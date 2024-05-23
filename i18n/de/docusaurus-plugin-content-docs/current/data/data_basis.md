---
sidebar_position: 1
---

# Unsere Datensätze


### Daten als wichtige Grundlage für Analysen

Bei Plan4Better erkennen wir, dass Daten der Treibstoff sind, der unsere Analysen antreibt, und somit unser wertvollstes Gut darstellen. Um genaue Einblicke basierend auf qualitativ hochwertigen Informationen zu angemessenen Kosten zu liefern, integriert unsere WebGIS-Plattform [GOAT](https://goat.plan4better.de/login) vielfältige räumliche und nicht-räumliche Datensätze aus verschiedenen Quellen. Das Verarbeiten inkonsistenter Geodaten aus unterschiedlichen Quellen mit variierenden Genauigkeitsgraden kann jedoch eine erhebliche Herausforderung darstellen. Um dieses Problem zu lösen, nutzen wir eine Reihe von Techniken, darunter effiziente Datenintegration, Disaggregation und Fusions-Workflows, um eine nahtlose Datenverarbeitung sicherzustellen.


### Datenerfassung und Datenvorbereitung

Der Datenerfassungsprozess umfasst das Sammeln und Bewerten von Informationen aus verschiedenen Quellen, um spezifischen Anforderungen gerecht zu werden. Dazu gehört die Identifizierung relevanter Datenquellen und das Sammeln von Daten, idealerweise aus Open-Data-Portalen oder öffentlich zugänglichen Initiativen. Je nach Datenquelle können unterschiedliche Datenschemata und Formate wie Shapefiles und GeoJSON verwendet werden. Daher ist es wesentlich, die Daten in ein einheitliches Schema und Format zu konvertieren, um Konsistenz und Vergleichbarkeit sicherzustellen.

Bei GOAT stellen wir sicher, dass unsere Daten aktuell sind, indem wir sie mindestens einmal im Jahr aktualisieren. Häufigere Updates sind jedoch bei Bedarf möglich, insbesondere für sich schnell ändernde Points of Interest (POIs). Die folgende Abbildung veranschaulicht die Kerndatensätze, die verwendet werden, und jeder Datensatz wird im Detail beschrieben.

![GOAT Datenbasis](/img/data/data_basis/original_files/data_en_blue.png "GOAT Datenbasis")

- **Points Of Interest:** Für POIs wird eine Kombination verschiedener Datenquellen verwendet. Neben Daten von der [Overture Maps Foundation](https://overturemaps.org/) *(die auch Daten von [Open Street Map (OSM)](https://wiki.openstreetmap.org/) umfasst)*, nutzen wir eine Vielzahl anderer Quellen, einschließlich Daten von Regierungsabteilungen und -behörden, Krankenkassen und Einzelhandelsunternehmen. Die verschiedenen Datensätze werden mittels einer Kombination aus automatisierten und manuellen Prozessen kombiniert. Dabei werden die Daten auf Vollständigkeit und Genauigkeit geprüft. Falls erforderlich, führen wir auch eigene Datenerhebungen vor Ort durch.

- **Bevölkerung und Gebäude:** Die Bevölkerung wird auf Gebäudeebene basierend auf Volkszählungsdaten und Bevölkerungszahlen der Bezirke oder Gemeinden sowie verschiedenen Landnutzungsdaten disaggregiert. Die Verarbeitung wird bei Vorhandensein durch 3D-Stadtmodelle unterstützt.

- **Öffentliches Verkehrsnetz:** Für das öffentliche Verkehrsnetz und den Fahrplan verwenden wir [GTFS (General Transit Feed Specification)](https://gtfs.org/) Daten, um realistische und zeitlich dynamische Reisezeiten für den öffentlichen Verkehr zu bieten.

- **Verwaltungsgrenzen:** Diese Daten werden verwendet, um die Grenzen eines geografischen Gebiets unter der Zuständigkeit einiger Regierungs- oder Verwaltungseinheiten, wie Gemeinden, Bezirke oder Landkreise, abzugrenzen.

- **Straßennetz:** Für das Gehen und Radfahren wird hauptsächlich auf Daten der [Overture Maps Foundation](https://overturemaps.org/) zurückgegriffen. Daten aus dem Thema "Transport" werden verwendet, die reale Transportnetze und deren Komponenten darstellen: Straßen, Autobahnen, Kreuzungen, ausgewiesene Wege und mehr. Das Straßennetzdaten sind jedoch flexibel, sodass auch einige andere Datensätze verwendet werden. Für Autos werden kalibrierte Autoroutennetzwerke von kommerziellen Anbietern verwendet, um Reisezeiten zu berechnen, einschließlich variierender Netzsättigung zu unterschiedlichen Tageszeiten.

- **Zusätzliche Daten:** Mehrere andere Datensätze ermöglichen es den Nutzern, Geo-Portale zu verbinden und die Visualisierung durch die Auswahl verschiedener Basiskarten zu verbessern. Darüber hinaus werden Höhenmodelle, Straßenlärm- und Unfallpunktdaten verwendet, um die Analysen mit GOAT zu verbessern und zu variieren.

Datenintegrations- und Datenfusionsschritte werden angewendet, um die verschiedenen Datensätze zu kombinieren und an den lokalen Kontext anzupassen. Zudem werden weitere Datenverarbeitungsschritte (Genauigkeit, Vollständigkeit, Zuverlässigkeit, Relevanz und Aktualität) implementiert, um einen genauen und zuverlässigen Datensatz zu erhalten. Darüber hinaus sind wir flexibel und können bei Bedarf zusätzliche Datensätze und Datenquellen einbeziehen.