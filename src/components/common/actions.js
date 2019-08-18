import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
export class Actions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100px', textAlign: 'center' }} >

                <span style={{ flexGrow: 1, width: '100px'}}> {this.addItemTemplate()}</span>
                <span style={{ flexGrow: 1, width: '100px'}}>{this.deleteItemTemplate()}</span>
                <span style={{ flexGrow: 1, width: '100px'}}>{this.editItemTemplate()}</span>

            </div>);
    }
    addItemTemplate() {
        return this.props.addTemplate()
        //dispatch add action
    }
    deleteItemTemplate() {
        return this.props.deleteTemplate()
        //dispatch delete action
    }

    editItemTemplate() {
        return this.props.editTemplate()
    }
}

class MaterialLocationActions extends React.Component {
    constructor(props) {
        super(props);

    }
    materialAdd() {
        let that = this;
        return (
            <span><Button onClick={function () { that.props.add({ event: 'location' }); console.log(that.props) }} variant="contained"> הוספת מיקום</Button></span>
        )
    }
    materialDelete(cb) {
        let that = this;
        return (<span><Button onClick={function () { that.props.delete({ event: 'location' }) }} variant="contained">מחיקת מיקום</Button></span>)
    }


    materialEdit() {
        let that = this;
        return <Button onClick={function () { that.props.edit({}); console.log(that.props) }} variant="contained">עריכת מיקום</Button>
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <Actions addTemplate={this.materialAdd.bind(this)} deleteTemplate={this.materialDelete.bind(this)} editTemplate={this.materialEdit.bind(this)}><div></div></Actions>
            </div>
        );
    }
}

//again strong typing location actions
//event is for the reducer to handle the state according to event source
class LocationActions {
    static add(location) {
        ;
        return { type: 'ADD_ITEM', data: location, event: 'location' }
    }
    static delete(locationName) {
        return { type: 'DELETE_ITEM', data: locationName, event: 'location' }
    }
    static edit(locationEdit) {
        return { type: 'EDIT_ITEM', data: locationEdit, event: 'location' }
    }
    static input(location) {
        ;
        return { type: 'INPUT', data: location, event: 'location' }
    }
}

let locationMapDispatchToProps = (dispatch) => {
    return bindActionCreators({ add: LocationActions.add, delete: LocationActions.delete, edit: LocationActions.edit, input: LocationActions.input }, dispatch);
}

let locationMapStateToProps = (state) => {

    return { manager: state.manager };
}

export const MaterialLocationActionsConnected = connect(locationMapStateToProps, locationMapDispatchToProps)(MaterialLocationActions);

//

class MaterialCategoryActions extends React.Component {
    materialAdd() {
        let that = this;
        return (
            <Button onClick={function () {
                ;
                that.props.add({ event: 'category' }); console.log(that.props)
            }} variant="contained">הוספת קטגוריה</Button>
        )
    }
    materialDelete() {
        let that = this;
        return <Button onClick={function () { that.props.delete({ event: 'category' }) }} variant="contained">מחיקת קטגוריה</Button>
    }

    materialEdit() {
        let that = this;
        return <Button onClick={function (e) { that.props.edit({ event: 'category' }); e.stopPropagation(); }} variant="contained">עריכת קטגוריה</Button>
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                {console.log('category item')}
                {console.log(this.props)}
                <Actions addTemplate={this.materialAdd.bind(this)} deleteTemplate={this.materialDelete.bind(this)} editTemplate={this.materialEdit.bind(this)}><div></div></Actions>
            </div>
        );
    }
}
//static typing each domain actions defines good bounderies
//event is for the reducer to handle the state according to event source
class CategoryActions {
    static add(category) {
        ;
        return { type: 'ADD_ITEM', data: category, event: 'category' }
    }
    static delete(categoryName) {
        return { type: 'DELETE_ITEM', data: categoryName, event: 'category' }
    }
    static edit(categoryName) {
        return { type: 'EDIT_ITEM', data: categoryName, event: 'category' }
    }
    static input(category) {

        return { type: 'INPUT', data: category, event: 'category' }
    }
}

let categoryMapDispatchToProps = (dispatch) => {
    return bindActionCreators({ add: CategoryActions.add, delete: CategoryActions.delete, edit: CategoryActions.edit, input: CategoryActions.input }, dispatch);;
}

let categoryMapStateToProps = (state) => {
    return { manager: state.manager };
}

export const MaterialCategoryActionsConnected = connect(categoryMapStateToProps, categoryMapDispatchToProps)(MaterialCategoryActions)
