import React from 'react'
import { connect } from 'react-redux'

export default class NewsListPagination extends React.PureComponent {
  prevPage = this.props.changePage.bind(null, -1);
  nextPage = this.props.changePage.bind(null, 1);
  
  render() {
    return (
      <div>
        <button onClick={this.prevPage}>{'<'}</button>
        <input type="text" value={this.props.page} readOnly/>
        <button onClick={this.nextPage}>{'>'}</button>        
      </div>
    )
  }
}

