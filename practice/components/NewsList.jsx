import React from 'react'
import NewsListItem from './NewsListItem.jsx'
import NewsListPagination from './NewsListPagination.jsx'
import { connect } from 'react-redux'
import {changePage, fetchPosts} from '../actions/index'
import { bindActionCreators } from 'redux'
class NewsList extends React.PureComponent {

/*
  state = {
    page: 1,
    newsList: []
  }

  componentDidMount() {
    this.fetchNewsList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page != this.state.page) {
    this.changePage(this.props.page);
    this.fetchNewsList();
    }
  }

   
  //撈畫面的API
  fetchNewsList = async() => {
    const response = await fetch(`/api/news/list/${this.state.page}`);
    this.setState({ 
      newsList: await response.json()
    });
  }

  //offset確定不能有第0頁
  changePage = (offset) => {
    if (this.state.page + offset > 0) {
      this.setState({
        page: this.state.page + offset
      });
    }
  }
*/

  render() {
    return (
      <div>
        console.log(this.props.dataList)
        <NewsListPagination page={this.props.page} changePage={this.changePage}/>
        {this.props.dataList.map(item => (
          <NewsListItem {...item} key={item.id}/>
        ))}
      </div>
    )
  }
}
//Whenever newsList is called , the return should be pass to all of our reducers
//Anything return from this function will end up with as props on the newsList container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changePage: changePage }, dispatch)
}
// if our state ever change,this container will instant render with newsList
function mapStateToProps(state) {
  // Whatever is returned show up as props
  //inside of BookList container
  return {
    dataList: state.dataList,
    page: state.page
  }
}
//promote NewsList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
//container is exported connect (function)(component)