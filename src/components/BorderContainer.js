import { useState } from "react"
import Border from "./Border"

export default function BorderContainer() {
  const themeColors = [      
  '#EF7C8E',
  '#FAE8E0',
  '#B6E2D3',
  '#D8A7B1'
  ]
return(<fieldset className="theme-wrapper">
  <legend>Choose Border</legend>
  <div className="themes">
    {themeColors.map(color => {
      return(<div>
      <Border border={`5px solid ${color}`} key={`solid ${color}`}/>
      <Border border={`5px dotted ${color}`} key={`dotted ${color}`}/>
      <Border border={`5px dashed ${color}`} key={`dashed ${color}`}/>
      <Border border={`5px double ${color}`} key={`double ${color}`}/>
      </div>)
    })}
  </div>

</fieldset>)
}