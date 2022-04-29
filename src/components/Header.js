import { Counter } from "./Counter"
import { Title } from "./Title"
import './../styles/Header.css'

function Header() {
  return (
    <header className="header">
        <Title />
        <Counter />
    </header>
  )
}

export { Header }