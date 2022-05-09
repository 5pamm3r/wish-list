import './EmptySearchResults.css'

function EmptySearchResults(props) {
  return (
    <p className='txt-results'>No hay resultados para {props.searchTxt}</p>
  )
}

export { EmptySearchResults }