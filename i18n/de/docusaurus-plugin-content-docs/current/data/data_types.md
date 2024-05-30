---
sidebar_position: 2
---

# Datentypen

GOAT verarbeitet eine Vielzahl von Geometrietypen für räumliche Daten. Diese Fähigkeit wird durch die Verwendung einer [PostgreSQL](https://www.postgresql.org/docs/) Datenbank mit der [PostGIS](https://postgis.net/documentation/) Erweiterung erreicht. GOAT speichert alle Geometrien im **PostGIS-Geometrietyp** (Der PostGIS-Geometrietyp ist eine Möglichkeit, verschiedene Formen und Standorte auf einer Karte innerhalb einer PostgreSQL-Datenbank zu speichern und zu bearbeiten. Er ermöglicht es, Details über Punkte (wie Wahrzeichen), Linien (wie Straßen) und Flächen (wie Bezirke) direkt in der Datenbank zu speichern) im **EPSG:4326** Koordinatenreferenzsystem. Für Operationen, die Längen- oder Flächenmessungen beinhalten, wird jedoch der PostGIS-Geographietyp verwendet. Dieser Typ ermöglicht Berechnungen in Metern und bietet eine höhere Genauigkeit.

Darüber hinaus verfolgt GOAT einen strukturierten Ansatz für das Datenmanagement, indem die Datentypen kategorisiert werden. Diese Kategorisierung soll das Datenbankschema für verbesserte Leistung und Skalierbarkeit optimieren. Das aktuelle Schema umfasst eine begrenzte Anzahl von Spalten pro Datentyp:

| Datentyp  | Beschreibung | Maximale Anzahl der Spalten |
|-----------|--------------|-----------------------------|
| integer   | Ganze Zahlen ohne Dezimalstellen (z.B. 1, 100, -5) | 15 |
| bigint    | Sehr große ganze Zahlen, größer als das, was 'integer' speichern kann | 5  |
| float     | Zahlen mit Dezimalstellen, die Präzision benötigen (z.B. 3,14, -0,001) | 10 |
| text      | Jegliche Art von Text, einschließlich Buchstaben, Zahlen und Symbole | 20 |
| timestamp | Spezifische Daten und Zeiten, einschließlich Jahr, Monat, Tag, Stunde, Minute und Sekunde | 3  |
| arrfloat (Array von Floats)   | Eine Liste von Zahlen mit Dezimalstellen, die zusammen als ein Eintrag gespeichert werden | 3  |
| arrint (Array von Integern)   | Eine Liste von ganzen Zahlen, die zusammen als ein Eintrag gespeichert werden | 3  |
| arrtext (Array von Text)   | Eine Liste von Textelementen, die zusammen als ein Eintrag gespeichert werden | 3  |
| jsonb (Binary JSON)    | Daten im JSON-Format (eine Möglichkeit, Informationen auf organisierte und leicht zugängliche Weise zu speichern), gespeichert in einem effizienten binären Format | 3  |
| boolean   | Wahr- oder Falschwerte, verwendet für Entscheidungen oder um anzuzeigen, ob etwas an oder aus ist | 3 |

::::tip

Visualisieren Sie die Layer-Datentabelle

Under <img src={require('/img/map/filter/3dots.png').default} alt="Options" style={{ maxHeight: "25px", maxWidth: "25px", objectFit: "cover"}}/> <code> More Options </code> click <code> View Data</code>:

![More Options](/img/data/view-data-layer.png "More Options")

Scrollen Sie in der Datentabelle. Oben in jedem Feld finden Sie den Datentyp:

![More Options](/img/data/data-table.png  "More Options" )


::::