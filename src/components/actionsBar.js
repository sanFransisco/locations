import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MaterialLocationActionsConnected, MaterialCategoryActionsConnected } from './common/actions';

class ActionBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let actions = undefined;
        let isLocationDisplay = true;
        ;
        if (this.props.state.display.display == 'locations')
            actions = <div class="container text-center">
                <div style={{ paddingTop: '30px' }}>
                    <h3>מסך מיקומים</h3>
                </div>
                <MaterialLocationActionsConnected></MaterialLocationActionsConnected>
            </div >
        else if (this.props.state.display.display == 'categories')
            actions = <div class="container text-center">
                <div style={{ paddingTop: '30px' }}>
                    <h3>מסך קטגוריות</h3>
                </div>
                <MaterialCategoryActionsConnected></MaterialCategoryActionsConnected>
            </div>

        else
           return <div></div>
        return (
            <div>

                {<AppBar position="static" color="default">
                    <Toolbar>
                        {actions}
                    </Toolbar>
                </AppBar>}
            </div>
        );
    }
}
export const ActionsBar = connect(function (state) { return { state } }, undefined)(ActionBar);
