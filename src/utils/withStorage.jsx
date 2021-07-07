import React, { Component } from 'react';

const withStorage = (WrappedComp) => {
  return class extends Component {
    storeData = (key, data) => {
      localStorage.setItem(key, JSON.stringify(data));
    }

    getData = (key) => {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
      return {};
    }

    removeData = (key) => {
      localStorage.removeItem(key);
    }

    render() {
      return <WrappedComp
        storeData={this.storeData}
        getData={this.getData}
        removeData={this.removeData}
        {...this.props}
      />
    }
  }
}

export default withStorage;
