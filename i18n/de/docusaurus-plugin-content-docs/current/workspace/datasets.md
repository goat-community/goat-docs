---
sidebar_position: 3
---

# Datensätze

Auf der **Datensätze**-Seite können Daten **hochgeladen, verwaltet und geteilt** werden. Die Seite bietet den Nutzern eine organisierte Ansicht ihrer Datensätze, kategorisiert nach persönlichen Datensätzen, Team-Datensätzen und Datensätzen, die mit der gesamten Organisation geteilt werden. Darüber hinaus können Datensätze in **Ordnern** organisiert, **gefiltert** und **sortiert** werden, basierend auf ihrem Namen, Erstellungsdatum oder ihrer letzten Aktualisierung. Datensätze können auch **gelöscht**, **heruntergeladen** und deren **Metadaten** bearbeitet werden.


<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/workspace/datasets/datasets_general.png').default} alt="Datasets Page in Workspace of GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

## Daten hochladen

GOAT unterstützt das Hochladen von **GeoPackage-, GeoJSON-, Shapefile-, KML-, CSV**- und **XLSX**-Dateien. Folgen Sie diesen Schritten, um einen Datensatz über den Arbeitsbereich hinzuzufügen:


<div class="step">
  <div class="step-number">1</div>
  <div class="content">Navigate to the <b>"Datasets"</b> page via the sidebar.</div>
</div>

<div class="step">
  <div class="step-number">2</div>
  <div class="content">Click on <code>+ Add Dataset</code>. </div>
</div>

<div class="step">
  <div class="step-number">3</div>
  <div class="content">Select the file from your local device.</div>
</div>

<div class="step">
  <div class="step-number">4</div>
  <div class="content">Select the <b>Destination Folder</b> and define the <b>Name</b> of your new dataset. Furthermore, you can add a <b>Description</b> if you like.</div>
</div>

<div class="step">
  <div class="step-number">5</div>
  <div class="content">Check the information and click on <code>Upload</code>.</div>
</div>



:::tip Tipp

Sie können Datensätze auch direkt in der [Karte](../map/layers) hochladen.

:::

## Datensätze filtern

Datasets can be sorted based on the [dataset type](../data/dataset_types "What are the dataset types?"), i.e. *features, tables, external imagery*, and *external vector tiles*. Simply click on the filter icon <img src={require('/img/map/filter/filter_icon.png').default} alt="Filter Icon" style={{ maxHeight: "20px", maxWidth: "20px"}}/> to choose the desired dataset type for filtering.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/workspace/datasets/dataset_filter.gif').default} alt="Datasets filtering in Workspace of GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 

## Datensätze verwalten
Durch Klicken auf die drei Punkte <img src={require('/img/map/filter/3dots.png').default} alt="Optionen" style={{ maxHeight: "25px", maxWidth: "25px", objectFit: "cover"}}/> können Sie die Metadaten von Datensätzen anzeigen und bearbeiten, einen Datensatz in einen anderen Ordner verschieben, ihn herunterladen, den Datensatz mit anderen Personen teilen oder ihn löschen.
<img src={require('/img/workspace/datasets/managing_datasets.gif').default} alt="Options" style={{ maxHeight: "300px", maxWidth: "300px"}}/>


## Metadaten der Datensätze anzeigen

The **metadata** of datasets can be viewed and edited by clicking on <code>Info</code> under the three dots <img src={require('/img/map/filter/3dots.png').default} alt="Options" style={{ maxHeight: "25px", maxWidth: "25px", objectFit: "cover"}}/> or by clicking directly on the dataset. This grants access to a detailed **summary** of the data, the **attribute table**, and a **map preview with a legend**.
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/workspace/datasets/metadata.gif').default} alt="Metadata of the datasets in Workspace of GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 


## Ordner erstellen

To organize your data, you can create new folders within the workspace. Therefore, click on the ``folder icon`` <img src={require('/img/workspace/datasets/folder_icon.png').default} alt="Folder Icon" style={{ maxHeight: "25px", maxWidth: "25px"}}/> and define the name of the new folder.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/workspace/datasets/new_folder.gif').default} alt="Create new folders in Workspace of GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 


## Datensätze in Ordner verschieben

To move a dataset into a folder, click on three dots <img src={require('/img/map/filter/3dots.png').default} alt="Options" style={{ maxHeight: "25px", maxWidth: "25px"}}/> and select **"Move to folder"**. From the dropdown menu, choose the folder to which you want to move your dataset.

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <img src={require('/img/workspace/datasets/move_to_folder.gif').default} alt="Move your datasets to the folders in Workspace of GOAT" style={{ maxHeight: "auto", maxWidth: "auto", objectFit: "cover"}}/>
</div> 
