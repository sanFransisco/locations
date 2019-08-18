import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';

class BottomBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const that = this;
        return (<div style={{ position: 'sticky', bottom: '0px', width: '100%' }}>

            <AppBar position="static" color="default">
                <Toolbar>
                    <nav style={{ width: '100%' }}>
                        <ul style={{ listStyleType: 'none', display: 'flex' }}>
                            <li style={{ flexGrow: 1 }}>
                                <Link onClick={function () { that.props.dispatch({ type: "CHANGE_DISPLAY", display: 'locations' }) }} to="/manage/locations">ניהול מיקומים</Link>
                            </li>
                            <li style={{ flexGrow: 1 }}>
                                <Link onClick={function () { that.props.dispatch({ type: "CHANGE_DISPLAY", display: 'categories' }) }} to="/manage/categories">ניהול קטגוריות</Link>
                            </li>
                            <li style={{ flexGrow: 1 }}>
                                <Link onClick={function () { that.props.dispatch({ type: "CHANGE_DISPLAY", display: '' }) }}  to="/map"> מפה</Link>
                            </li>
                        </ul>
                    </nav>
                </Toolbar>
            </AppBar>
        </div >
        );
    }
}

export const AppBottomBar = connect()(BottomBar);