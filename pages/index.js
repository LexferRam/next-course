// import Head from 'next/head'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import page1 from './page1'
import page2 from './page2'

export default function Home() {

  return (
    <Router >
      <Switch>
        <Route path='/' component={page1} />
        <Route path='/page2' component={page2} />
        {/* <Route path='/' component={ } /> */}
      </Switch>
    </Router>
  )
}

