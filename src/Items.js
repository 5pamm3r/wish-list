import {DeleteButton} from './DeleteButton'

function Items(props) {
    return (
        <div className="Items__container">
            <p>{props.text}</p>
            <DeleteButton />
        </div>
    )
    // return (
    //     <li>
    //         <span>C</span>
    //         <p>{props.text}</p>
    //         <span>X</span>
    //     </li>
    // )
}

export { Items  }