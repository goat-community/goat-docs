---
sidebar_position: 2
---

# Datentypen

GOAT verarbeitet eine Vielzahl von Geometrietypen für räumliche Daten. Diese Fähigkeit wird durch die Verwendung einer [PostgreSQL](https://www.postgresql.org/docs/) Datenbank mit der [PostGIS](https://postgis.net/documentation/) Erweiterung erreicht. GOAT speichert alle Geometrien im **PostGIS-Geometrietyp** (Der PostGIS-Geometrietyp ist eine Möglichkeit, verschiedene Formen und Standorte auf einer Karte innerhalb einer PostgreSQL-Datenbank zu speichern und zu bearbeiten. Er ermöglicht es, Details über Punkte (wie Wahrzeichen), Linien (wie Straßen) und Flächen (wie Bezirke) direkt in der Datenbank zu speichern) im **EPSG:4326** Koordinatenreferenzsystem. Für Operationen, die Längen- oder Flächenmessungen beinhalten, wird jedoch der PostGIS-Geographietyp verwendet. Dieser Typ ermöglicht Berechnungen in Metern und bietet eine höhere Genauigkeit.

Darüber hinaus verfolgt GOAT einen strukturierten Ansatz für das Datenmanagement, indem die Datentypen kategorisiert werden. Diese Kategorisierung soll das Datenbankschema für verbesserte Leistung und Skalierbarkeit optimieren. Das aktuelle Schema umfasst eine begrenzte Anzahl von Spalten pro Datentyp:

| Data Type  | Description | Maximum Number of Columns |
|------------|-------------|--------------|
| integer    | Whole numbers without any decimal points (e.g., 1, 100, -5) |  15 |
| bigint     | Very large whole numbers, larger than what 'integer' can store | 5  |
| float      | Numbers with decimal points that need precision (e.g., 3.14, -0.001) | 10 |
| text       | Any kind of text, including letters, numbers, and symbols | 20 |
| timestamp  | Specific dates and times, including year, month, day, hour, minute, and second | 3  |
| arrfloat (Array of Floats)   | A list of numbers with decimal points, stored together as one entry | 3  |
| arrint (Array of Integers)   | A list of whole numbers, stored together as one entry | 3  |
| arrtext (Array of Text)   | A list of text items, stored together as one entry | 3 |
| jsonb (Binary JSON)    | 	Data formatted as JSON (a way to store information in an organized, easy-to-access manner), stored in an efficient binary format | 3  |
| boolean    | True or false values, used for decisions or to indicate if something is on or off |3 |

::::tip

Visualisieren Sie die Layer-Datentabelle

Under <img src={require('/img/map/filter/3dots.png').default} alt="Options" style={{ maxHeight: "25px", maxWidth: "25px", objectFit: "cover"}}/> <code> More Options </code> click <code> View Data</code>:

![More Options](/img/data/view-data-layer.png "More Options")

Scrollen Sie die Datentabelle. Oben in jedem Feld finden Sie den Datentyp:

![More Options](/img/data/data-table.png  "More Options" )


::::