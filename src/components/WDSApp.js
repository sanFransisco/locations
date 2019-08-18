import React, { Component } from 'react';
import { WsdRouter } from './wsdRouting';
import { AppBottomBar } from './bottomBar';
import { ActionsBar } from './actionsBar';
import { Provider } from 'react-redux';
import { appStore } from '../redux/index';

export default class WDSApp extends Component {
    render() {

        return (
            <div>
                {/* <MaterialCategoryActions></MaterialCategoryActions>
            <MaterialLocationActions></MaterialLocationActions>
            <MaterialLocationTable locations={[{name:1,b:2}]}></MaterialLocationTable> */}
                <Provider store={appStore} >
                    <ActionsBar></ActionsBar>
                    <WsdRouter>

                        <AppBottomBar></AppBottomBar>
                    </WsdRouter>
                </Provider>

            </div>);

    }
}