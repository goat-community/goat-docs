---
sidebar_position: 1
---

# Unsere Datensätze


<<<<<<< development
### Daten als wichtige Grundlage für Analysen

Bei Plan4Better erkennen wir, dass Daten der Treibstoff sind, der unsere Analysen antreibt, und somit unser wertvollstes Gut darstellen. Um genaue Einblicke basierend auf qualitativ hochwertigen Informationen zu angemessenen Kosten zu liefern, integriert unsere WebGIS-Plattform [GOAT](https://goat.plan4better.de/login) vielfältige räumliche und nicht-räumliche Datensätze aus verschiedenen Quellen. Das Verarbeiten inkonsistenter Geodaten aus unterschiedlichen Quellen mit variierenden Genauigkeitsgraden kann jedoch eine erhebliche Herausforderung darstellen. Um dieses Problem zu lösen, nutzen wir eine Reihe von Techniken, darunter effiziente Datenintegration, Disaggregation und Fusions-Workflows, um eine nahtlose Datenverarbeitung sicherzustellen.


### Datenerfassung und Datenvorbereitung

Der Datenerfassungsprozess umfasst das Sammeln und Bewerten von Informationen aus verschiedenen Quellen, um spezifischen Anforderungen gerecht zu werden. Dazu gehört die Identifizierung relevanter Datenquellen und das Sammeln von Daten, idealerweise aus Open-Data-Portalen oder öffentlich zugänglichen Initiativen. Je nach Datenquelle können unterschiedliche Datenschemata und Formate wie Shapefiles und GeoJSON verwendet werden. Daher ist es wesentlich, die Daten in ein einheitliches Schema und Format zu konvertieren, um Konsistenz und Vergleichbarkeit sicherzustellen.

Bei GOAT stellen wir sicher, dass unsere Daten aktuell sind, indem wir sie mindestens einmal im Jahr aktualisieren. Häufigere Updates sind jedoch bei Bedarf möglich, insbesondere für sich schnell ändernde Points of Interest (POIs). Die folgende Abbildung veranschaulicht die Kerndatensätze, die verwendet werden, und jeder Datensatz wird im Detail beschrieben.
=======
### Daten als wichtige Basis für Analysen

Wir bei Plan4Better sind uns bewusst, dass Daten der Treibstoff für unsere Analysen sind und somit unser wertvollstes Gut darstellen. Um genaue Erkenntnisse auf der Grundlage qualitativ hochwertiger Informationen zu angemessenen Kosten zu liefern, integriert unsere WebGIS-Plattform [GOAT] (https://goat.plan4better.de/login) diverse räumliche und nicht-räumliche Datensätze aus verschiedenen Quellen. Die Verarbeitung inkonsistenter Geodaten aus verschiedenen Quellen mit unterschiedlichem Genauigkeitsgraden kann jedoch eine große Herausforderung darstellen. Um dieses Problem zu lösen, setzen wir eine Reihe von Techniken ein, einschließlich effizienter Datenintegration, Disaggregation und Fusionsworkflows, um eine nahtlose Datenverarbeitung zu gewährleisten.


### Daten sammeln und Daten vorbereiten 

Bei der Datenerhebung werden Informationen aus verschiedenen Quellen gesammelt und ausgewertet, um bestimmte Anforderungen zu erfüllen. Dazu müssen relevante Datenquellen identifiziert und Daten erhoben werden, idealerweise von offenen Datenportalen oder öffentlich zugänglichen Initiativen. Je nach Datenquelle können unterschiedliche Datenschemata und Formate wie Shapefiles und GeoJSON verwendet werden. Es ist daher wichtig, die Daten in ein gemeinsames Schema und Format aufzubereiten und zu konvertieren, um Konsistenz und Vergleichbarkeit zu gewährleisten.

Bei GOAT stellen wir sicher, dass unsere Daten auf dem neuesten Stand sind, indem wir sie mindestens einmal im Jahr aktualisieren. Bei Bedarf sind jedoch auch häufigere Aktualisierungen möglich, insbesondere bei sich schnell ändernden Points of Interest (POI). Die folgende Abbildung veranschaulicht die verwendeten Kerndatensätze und jeder Datensatz wird dabei ausführlich beschrieben.
>>>>>>> development

![GOAT Datenbasis](/img/data/data_basis/original_files/data_en_blue.png "GOAT Datenbasis")

<<<<<<< development
- **Points Of Interest:** Für POIs wird eine Kombination verschiedener Datenquellen verwendet. Neben Daten von der [Overture Maps Foundation](https://overturemaps.org/) *(die auch Daten von [Open Street Map (OSM)](https://wiki.openstreetmap.org/) umfasst)*, nutzen wir eine Vielzahl anderer Quellen, einschließlich Daten von Regierungsabteilungen und -behörden, Krankenkassen und Einzelhandelsunternehmen. Die verschiedenen Datensätze werden mittels einer Kombination aus automatisierten und manuellen Prozessen kombiniert. Dabei werden die Daten auf Vollständigkeit und Genauigkeit geprüft. Falls erforderlich, führen wir auch eigene Datenerhebungen vor Ort durch.

- **Bevölkerung und Gebäude:** Die Bevölkerung wird auf Gebäudeebene basierend auf Volkszählungsdaten und Bevölkerungszahlen der Bezirke oder Gemeinden sowie verschiedenen Landnutzungsdaten disaggregiert. Die Verarbeitung wird bei Vorhandensein durch 3D-Stadtmodelle unterstützt.

- **Öffentliches Verkehrsnetz:** Für das öffentliche Verkehrsnetz und den Fahrplan verwenden wir [GTFS (General Transit Feed Specification)](https://gtfs.org/) Daten, um realistische und zeitlich dynamische Reisezeiten für den öffentlichen Verkehr zu bieten.

- **Verwaltungsgrenzen:** Diese Daten werden verwendet, um die Grenzen eines geografischen Gebiets unter der Zuständigkeit einiger Regierungs- oder Verwaltungseinheiten, wie Gemeinden, Bezirke oder Landkreise, abzugrenzen.

- **Straßennetz:** Für das Gehen und Radfahren wird hauptsächlich auf Daten der [Overture Maps Foundation](https://overturemaps.org/) zurückgegriffen. Daten aus dem Thema "Transport" werden verwendet, die reale Transportnetze und deren Komponenten darstellen: Straßen, Autobahnen, Kreuzungen, ausgewiesene Wege und mehr. Das Straßennetzdaten sind jedoch flexibel, sodass auch einige andere Datensätze verwendet werden. Für Autos werden kalibrierte Autoroutennetzwerke von kommerziellen Anbietern verwendet, um Reisezeiten zu berechnen, einschließlich variierender Netzsättigung zu unterschiedlichen Tageszeiten.

- **Zusätzliche Daten:** Mehrere andere Datensätze ermöglichen es den Nutzern, Geo-Portale zu verbinden und die Visualisierung durch die Auswahl verschiedener Basiskarten zu verbessern. Darüber hinaus werden Höhenmodelle, Straßenlärm- und Unfallpunktdaten verwendet, um die Analysen mit GOAT zu verbessern und zu variieren.

Datenintegrations- und Datenfusionsschritte werden angewendet, um die verschiedenen Datensätze zu kombinieren und an den lokalen Kontext anzupassen. Zudem werden weitere Datenverarbeitungsschritte (Genauigkeit, Vollständigkeit, Zuverlässigkeit, Relevanz und Aktualität) implementiert, um einen genauen und zuverlässigen Datensatz zu erhalten. Darüber hinaus sind wir flexibel und können bei Bedarf zusätzliche Datensätze und Datenquellen einbeziehen.
=======
- **Points Of Interest:** Für POIs wird eine Kombination aus verschiedenen Datenquellen verwendet. Neben den Daten der [Overture Maps Foundation](https://overturemaps.org/) *(die auch Daten von [Open Street Map (OSM)](https://wiki.openstreetmap.org/) umfasst)*, verwenden wir eine Vielzahl anderer Quellen, darunter Daten von Regierungsstellen, Behörden, Krankenkassen und Einzelhandelsunternehmen. Die verschiedenen Datensätze werden mit einer Kombination aus automatisierten und manuellen Verfahren kombiniert. In der Zwischenzeit werden die Daten auf Vollständigkeit und Richtigkeit geprüft. Bei Bedarf führen wir unsere Datenerhebung auch vor Ort durch. 

- **Bevölkerung und Gebäude:** Die Bevölkerung wird auf der Grundlage von Volkszählungsdaten und Bezirks- oder Gemeindebevölkerungszählungen sowie verschiedener Flächennutzungsdaten bis auf die Gebäudeebene disaggregiert. Die Verarbeitung wird durch 3D-Stadtmodelle unterstützt, sofern verfügbar.

- **Öffentliches Verkehrsnetz:** Für das öffentliche Verkehrsnetz und den Fahrplan werden [GTFS (General Transit Feed Specification)](https://gtfs.org/) Daten verwendet, um realistische und zeitlich dynamische Fahrzeiten für den öffentlichen Verkehr bereitzustellen. 

- **Verwaltungsgrenzen:** Die Daten werden verwendet, um die Grenzen eines geografischen Gebiets abzugrenzen, das in den Zuständigkeitsbereich einer Regierungs- oder Verwaltungseinheit fällt, z. B. Gemeinden, Bezirke oder Landkreise.

- **Straßennetz:** Für Fußgänger und Radfahrer werden hauptsächlich Daten der [Overture Maps Foundation](https://overturemaps.org/) verwendet. Es werden Daten aus dem Thema "Verkehr" verwendet, die reale Verkehrsnetze und ihre Komponenten darstellen: Straßen, Autobahnen, Kreuzungen, spezielle Wege und mehr. Die Straßennetzdaten sind jedoch flexibel, so dass auch einige andere Datensätze verwendet werden. Für Autos werden kalibrierte Routing-Netzwerke von kommerziellen Anbietern zur Berechnung der Fahrzeiten verwendet, einschließlich der unterschiedlichen Netzauslastung zu verschiedenen Tageszeiten.

- **Zusätzliche Daten:** Mehrere andere Datensätze ermöglichen es den Nutzern, Geo-Portale zu verbinden und die Visualisierung durch die Auswahl verschiedener Basiskarten zu verbessern. Darüber hinaus werden Höhenmodelle, Straßenlärm und Unfallpunktdatensätze verwendet, um die mit GOAT durchgeführte Analyse zu verbessern und zu variieren. 

Durch Datenintegration und Datenfusion werden die verschiedenen Datensätze kombiniert und an den lokalen Kontext angepasst. Darüber hinaus werden weitere Datenverarbeitungsschritte (Genauigkeit, Vollständigkeit, Zuverlässigkeit, Relevanz und Aktualität) implementiert, um einen genauen und zuverlässigen Datensatz zu erhalten. Darüber hinaus sind wir flexibel, um bei Bedarf zusätzliche Datensätze und Datenquellen mit einzubeziehen.
>>>>>>> development
