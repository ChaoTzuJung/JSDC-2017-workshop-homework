import React from 'react'
import styled from 'styled-components'


export default class NewsListItem extends React.PureComponent {
  render() {
    const {thumbnail, title, data, description} = this.props
    return (
      <div>
        <Thumbnail src={thumbnail}/>
        <h2>{title}</h2>
        <div>{data}</div>
        <p>{description}</p>
      </div>
    )
  }
}
const Thumbnail = styled.img`
  width: 80%;
  border-radius: 10px;
`
