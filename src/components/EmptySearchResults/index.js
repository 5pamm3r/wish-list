import './EmptySearchResults.css'

function EmptySearchResults(props) {
  return (
    <p className='txt-results'>{props.searchTxt} was not found.</p>
  )
}

export { EmptySearchResults }