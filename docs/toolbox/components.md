---
sidebar_position: 0
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import bufferSettings from "/img/indicators/catchments/buffer/tutorial_2.png"
import connectivityFormula from "/img/indicators/connectivity/formula_en.webp"

# Components

`button/action`

:::tip My tip

Use this awesome feature option

:::

:::info

Info text

:::

<Tabs>
  <TabItem value="apple" label="Apple" default className="tabItemBox">
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange" className="tabItemBox">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana" className="tabItemBox">
    This is a banana 🍌
  </TabItem>
</Tabs>

This is <span style={{color: "#FF0000"}}>red</span> and this is <span style={{color: "#FFFF00"}}>yellow</span>


## Image sizes: 

small: 
<img src="https://plan4better.de/images/docs/technical_documentation/isochrone/standard_en.webp" width="1000px" alt="isochrone cycling settings" style={{width: "300px", height: "150px", maxHeight: "100px", maxWidth: "300px", objectFit: "contain"}}/> 

local storage:
<img src={bufferSettings} alt="bufferSettings"  width="1000px" style={{width: "300px", height: "180px", maxHeight: "300px", maxWidth: "500px", objectFit: "contain"}}/> 

medium:

<img src={connectivityFormula} alt="connectivityFormula" width="1000px" style={{width: "400px", height: "130px", maxHeight: "500px", maxWidth: "500px", objectFit: "contain"}}/> 