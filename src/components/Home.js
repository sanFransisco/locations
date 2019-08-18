import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import map from '../map.png';
export const Home = () => {
    
    return (
        <div class="row">
            <div class="col-sm-6">
            <div style={{ height: '100vh', lineBreak:'auto',width:'100%' }}>
            <Jumbotron style={{ height: '100%' }}>
                <h1>Yali Bar</h1>
                <h6>
                    Wellcome to Location app!
                    You can create locations, relate them to categories
                    and finally view them on map
                </h6>
                <h6>
                    In WdsMap.js component you can change the google map api key string to match yours
                </h6>
                <h6>
                    In components/common/action.js there are the HOC component which connected to store
                </h6>
                <h6>
                    The materialCategoryTable.js and materialLocationTable are the concrete implementation of common/MaterialTable.js
                    They incapsulate table implementation details and provides the props needed to create a table base on their state.
                </h6>
                <h6>
                    WdsCategory and WdsLocation are simple presentation components
                </h6>
            </Jumbotron>
          
        </div>
            </div>
            <div class="col-sm-6">
            <img src={map} style={{height:'300px',width:'300px'}}></img>
            </div>
        </div>
       

    )
}