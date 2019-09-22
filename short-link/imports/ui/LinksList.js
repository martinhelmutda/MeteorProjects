import React from 'react';
export default class LinksList extends React.Component {
  //Just after is loaded to the screen
  componentDidMount(){
    console.log('componentDidMount LinksList');
  }
  //
componentWillUnmount(){
    console.log('componentWillUnmount LinksList');
}
  render() {
    return (
      <div>
        <h1>Links List</h1>
      </div>
    );
  }
}
