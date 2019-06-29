import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Organisms/Home"
import Header from "./Organisms/Header"
import Notes from "./Page/Notes"
import Note from "./Moleculs/Note"
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/note/:id" component={Note} />
      </Switch>
    </Router>
  )
}

export default App
