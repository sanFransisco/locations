import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//represents the location component
export class WsdLocation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const that = this;
        return <tr style={{ color: '#9acc14' }} onClick={function () { that.props.focus() }}>
            <td >{this.props.location.name}</td>
            <td >{this.props.location.category.name}</td>
            <td >{this.props.location.coordinates}</td>
            <td >{this.props.location.address}</td>
        </tr>
    }
}