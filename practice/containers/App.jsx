import React from 'react'
import { connect } from 'react-redux'
import NewsList from '../components/NewsList.jsx'

export default class App extends React.PureComponent {
  render() {
    return (
        <NewsList/>
    )
  }
}
