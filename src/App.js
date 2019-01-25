import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
class App extends Component {
  componentDidMount()
  {
    let images;
    fetch('http://starlord.hackerearth.com/insta')
    .then(result=>result.json())
    .then((result,value)=>{
      debugger
            images=result;
            console.log(result);
            localStorage.setItem("images",images)
    });
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
