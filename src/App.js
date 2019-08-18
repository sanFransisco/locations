
/*global google*/
import React from 'react';
import logo from './logo.svg';
import './App.css';
import WDSApp from './components/WDSApp';
class App extends React.Component {
 
  render(){
   
    return (
    
    <div  style={{height:'100vh'}} className="App">
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl_7CEVq5IeRHdRMlpN4En3hXWIx3y_as&callback=initMap"
    async defer></script>
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  crossOrigin="annoymous"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WDSApp></WDSApp>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
       <WDSApp style={{height:'100%'}}></WDSApp>
    </div>
  );
}
}
export default App;
