export default function Border(props) {

  return(
      <div className='border' key={props.key}>
        <div style={{ border: props.border, height: '90%' }}></div>

      </div>


  )
}