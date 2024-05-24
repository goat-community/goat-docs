---
sidebar_position: 1
---

# Unsere Datensätze


### Daten als wichtige Basis für Analysen

Wir bei Plan4Better sind uns bewusst, dass Daten der Treibstoff für unsere Analysen sind und somit unser wertvollstes Gut darstellen. Um genaue Erkenntnisse auf der Grundlage qualitativ hochwertiger Informationen zu angemessenen Kosten zu liefern, integriert unsere WebGIS-Plattform [GOAT] (https://goat.plan4better.de/login) diverse räumliche und nicht-räumliche Datensätze aus verschiedenen Quellen. Die Verarbeitung inkonsistenter Geodaten aus verschiedenen Quellen mit unterschiedlichem Genauigkeitsgraden kann jedoch eine große Herausforderung darstellen. Um dieses Problem zu lösen, setzen wir eine Reihe von Techniken ein, einschließlich effizienter Datenintegration, Disaggregation und Fusionsworkflows, um eine nahtlose Datenverarbeitung zu gewährleisten.


### Daten sammeln und Daten vorbereiten 

Bei der Datenerhebung werden Informationen aus verschiedenen Quellen gesammelt und ausgewertet, um bestimmte Anforderungen zu erfüllen. Dazu müssen relevante Datenquellen identifiziert und Daten erhoben werden, idealerweise von offenen Datenportalen oder öffentlich zugänglichen Initiativen. Je nach Datenquelle können unterschiedliche Datenschemata und Formate wie Shapefiles und GeoJSON verwendet werden. Es ist daher wichtig, die Daten in ein gemeinsames Schema und Format aufzubereiten und zu konvertieren, um Konsistenz und Vergleichbarkeit zu gewährleisten.

Bei GOAT stellen wir sicher, dass unsere Daten auf dem neuesten Stand sind, indem wir sie mindestens einmal im Jahr aktualisieren. Bei Bedarf sind jedoch auch häufigere Aktualisierungen möglich, insbesondere bei sich schnell ändernden Points of Interest (POI). Die folgende Abbildung veranschaulicht die verwendeten Kerndatensätze und jeder Datensatz wird dabei ausführlich beschrieben.

![GOAT data basis](/img/data/data_basis/original_files/data_en_blue.png "GOAT data basis")

- **Points Of Interest:** Für POIs wird eine Kombination aus verschiedenen Datenquellen verwendet. Neben den Daten der [Overture Maps Foundation](https://overturemaps.org/) *(die auch Daten von [Open Street Map (OSM)](https://wiki.openstreetmap.org/) umfasst)*, verwenden wir eine Vielzahl anderer Quellen, darunter Daten von Regierungsstellen, Behörden, Krankenkassen und Einzelhandelsunternehmen. Die verschiedenen Datensätze werden mit einer Kombination aus automatisierten und manuellen Verfahren kombiniert. In der Zwischenzeit werden die Daten auf Vollständigkeit und Richtigkeit geprüft. Bei Bedarf führen wir unsere Datenerhebung auch vor Ort durch. 

- **Bevölkerung und Gebäude:** Die Bevölkerung wird auf der Grundlage von Volkszählungsdaten und Bezirks- oder Gemeindebevölkerungszählungen sowie verschiedener Flächennutzungsdaten bis auf die Gebäudeebene disaggregiert. Die Verarbeitung wird durch 3D-Stadtmodelle unterstützt, sofern verfügbar.

- **Öffentliches Verkehrsnetz:** Für das öffentliche Verkehrsnetz und den Fahrplan werden [GTFS (General Transit Feed Specification)](https://gtfs.org/) Daten verwendet, um realistische und zeitlich dynamische Fahrzeiten für den öffentlichen Verkehr bereitzustellen. 

- **Verwaltungsgrenzen:** Die Daten werden verwendet, um die Grenzen eines geografischen Gebiets abzugrenzen, das in den Zuständigkeitsbereich einer Regierungs- oder Verwaltungseinheit fällt, z. B. Gemeinden, Bezirke oder Landkreise.

- **Straßennetz:** Für Fußgänger und Radfahrer werden hauptsächlich Daten der [Overture Maps Foundation](https://overturemaps.org/) verwendet. Es werden Daten aus dem Thema "Verkehr" verwendet, die reale Verkehrsnetze und ihre Komponenten darstellen: Straßen, Autobahnen, Kreuzungen, spezielle Wege und mehr. Die Straßennetzdaten sind jedoch flexibel, so dass auch einige andere Datensätze verwendet werden. Für Autos werden kalibrierte Routing-Netzwerke von kommerziellen Anbietern zur Berechnung der Fahrzeiten verwendet, einschließlich der unterschiedlichen Netzauslastung zu verschiedenen Tageszeiten.

- **Zusätzliche Daten:** Mehrere andere Datensätze ermöglichen es den Nutzern, Geo-Portale zu verbinden und die Visualisierung durch die Auswahl verschiedener Basiskarten zu verbessern. Darüber hinaus werden Höhenmodelle, Straßenlärm und Unfallpunktdatensätze verwendet, um die mit GOAT durchgeführte Analyse zu verbessern und zu variieren. 

Durch Datenintegration und Datenfusion werden die verschiedenen Datensätze kombiniert und an den lokalen Kontext angepasst. Darüber hinaus werden weitere Datenverarbeitungsschritte (Genauigkeit, Vollständigkeit, Zuverlässigkeit, Relevanz und Aktualität) implementiert, um einen genauen und zuverlässigen Datensatz zu erhalten. Darüber hinaus sind wir flexibel, um bei Bedarf zusätzliche Datensätze und Datenquellen mit einzubeziehen.