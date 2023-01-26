import themes from "../themes"

export default function ChooseTheme() {
  const themeStyling = themes.map(theme => {
    return(
      <div class="palette" key={theme.title}>
  <div class="colors">
    <div class="color" style={{backgroundColor: theme.colors[0]}}></div>
    <div class="color" style={{backgroundColor: theme.colors[1]}}></div>
    <div class="color" style={{backgroundColor: theme.colors[2]}}></div>
    <div class="color" style={{backgroundColor: theme.colors[3]}}></div>
  </div>
  <div class="dec">
    <p class="title">{theme.title}</p>
  </div>
</div>
    )
  })
  return(
    <fieldset className="theme-wrapper">
      <legend>Choose Theme</legend>
      <div className="themes">
        {themeStyling}
      </div>
    </fieldset>

  )
}