// import ListGroup from "./components/ListGroup"
import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"

function App() {
  // let items = ["a", "s", "df", "dfsf"]
  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }
  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>

  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //   </div>
  // )

  const [ alertVisible, setAlertVisibility ] = useState(false)
  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  )
}

export default App
