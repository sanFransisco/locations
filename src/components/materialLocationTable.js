import { Action } from './common/actions';
import React from 'react';
import { MaterialTable } from './common/MaterialTable';
import { connect } from 'react-redux';
import { Location } from '../types/location';
import { WsdLocation } from './location';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from 'react-bootstrap/Button';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Table from 'react-bootstrap/Table';


const ExpansionPanel = withStyles({
   root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
         borderBottom: 0,
      },
      '&:before': {
         display: 'none',
      },
      '&$expanded': {
         margin: 'auto',
      },
   },
   expanded: {},
})(MuiExpansionPanel);


const ExpansionPanelDetails = withStyles(theme => ({
   root: {
      padding: theme.spacing(2),
   },
}))(MuiExpansionPanelDetails);

class MaterialLocationTable extends React.Component {
   constructor(props) {
      super(props);
      console.log(this.props);
      this.onChange.bind(this);
      this.state = { isGroupByCategory: false };
   }
   isGroupByCategory = false;
   isSortAlphabetical = false;
   tableRows = [];
   inputs = {};
   onChange(obj) {
      ;
      this.props.dispatch({ type: 'INPUT', data: { inputs: this.inputs } });
   }

   componentWillReceiveProps(nextProps) {
      ;
      //this.setState(nextProps);
   }
   render() {
      let view;
      let that = this;
      let table = <div><h3>רשימת המיקומים ריקה</h3></div>
      let tableHeaders =
         <tr style={{ color: '#9acc14' }}>
            <td>name</td>
            <td>category</td>
            <td>coordinates</td>
            <td>address</td>
         </tr>

      let categories = [];
      if (this.state.isGroupByCategory == true) {
         //group by category table code
         that.props.manager.items.forEach((item) => {
            if (!item.category && !item.address && !item.coordinates)
               categories.push(<MenuItem value={item.name}>{item.name}</MenuItem>)
         })

         let dict = {};
         that.props.manager.items.forEach((item) => {
            if (item.address && item.coordinates && item.category) {
               if (Object.keys(dict).indexOf(item.category.name) != -1) {
                  dict[item.category.name].push(item);
               }
               else {
                  dict[item.category.name] = [];
                  dict[item.category.name].push(item);
               }
            }
         })
         let entries = Object.keys(dict);
         let tableRows = [];
         let tableHead = <tr style={{ color: '#9acc14', font: 'bold' }}>
            <td><b>category</b></td>
            <td><b>coordinates</b></td>
            <td><b>address</b></td>
            <td><b>name</b></td>
         </tr>

         entries.forEach((group) => {
            ;
            tableRows.push(
               <tr style={{ color: '#9acc14' }}>
                  <td>{group}</td>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>);
            dict[group].forEach((location) => {
               tableRows.push(<tr style={{ color: '#9acc14', backgroundColor: 'white' }}>
                  <td></td>
                  <td>{location.coordinates}</td>
                  <td>{location.address}</td>
                  <td>{location.name}</td>
               </tr>)
            })
         })
         let groupTable = (
            <div style={{ maxHeight: '300px' }}>
               <Table variant="dark" >
                  <thead>
                     {tableHead}
                  </thead>
                  <tbody>
                     {tableRows}
                  </tbody>
               </Table>
            </div>
         )
         view = groupTable;
      }
      else {
         //not group by category table code
         that.props.manager.items.forEach((item) => {
            if (!item.category && !item.address && !item.coordinates)
               categories.push(<option value={item.name}>{item.name}</option>)
         })
         this.state.tableRows = [<tr style={{ color: '#9acc14' }} >
            <td style={{ color: 'black', cursor: 'grab' }}><input placeholder="הכנס שם" style={{ color: 'black', cursor: 'grab', textAlign: 'center' }} htmlFor="component-filled" id="name" onChange={function (e) { that.inputs.name = e.target.value; that.onChange(e); }}></input></td>
            <td style={{ color: 'black', cursor: 'grab', textAlign: 'center' }}>
               <select id="category"
                  onChange={function (e) { that.inputs.category = e.target.value; that.onChange(e) }}>
                  {categories}
               </select></td>
            <td style={{ color: 'black', cursor: 'grab', textAlign: 'center' }}><input placeholder="הכנס קואורדינטה" style={{ color: 'black', textAlign: 'center' }} id="coordinate" onChange={function (e) { that.inputs.coordinates = e.target.value; that.onChange(e); }}></input></td>
            <td style={{ color: 'black', cursor: 'grab', textAlign: 'center' }}><input placeholder="הכנס כתובת" style={{ color: 'black', textAlign: 'center' }} id="address" onChange={function (e) {
               ; that.inputs.address = e.target.value; that.onChange(e);
            }}></input></td>
         </tr>];
         ;
         if (this.props.manager != undefined) {
            if (this.state.isSortAlphabetical) {
               this.props.manager.items.sort(function (a, b) {
                  if (a.name && b.name) {
                     var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                     if (nameA < nameB) //sort string ascending
                        return -1;
                     if (nameA > nameB)
                        return 1;
                     return 0; //default return value (no sorting)

                  }
               });
            } else {

            }
            this.props.manager.items.forEach((location) => {
               if (location.address && location.coordinates && (this.props.manager.activeCategories.indexOf(location.category.name)) != -1)
                  this.state.tableRows.push(<WsdLocation location={location} focus={function () {
                     window.document.querySelector('#name').value = location.name
                     window.document.querySelector('#category').value = location.category.name
                     window.document.querySelector('#coordinate').value = location.coordinates
                     window.document.querySelector('#address').value = location.address

                     that.props.dispatch({ type: 'INPUT', data: { inputs: location } });
                  }}></WsdLocation>)
            });

            view = <MaterialTable thead={tableHeaders} trows={this.state.tableRows}></MaterialTable>
         }
      }
      return (

         <div style={{ color: '#9acc14' }} class="container-fluid" style={{ height: '100vh', overflowY: 'auto' }}>
            <Button variant="contained" onClick={function () {
               let that = this;
               if (this.state.isSortAlphabetical == true) {
                  this.setState({ isSortAlphabetical: false }, function () { console.log(that.state) })
               } else {
                  this.setState({ isSortAlphabetical: true }, function () { console.log(that.state) })
               }
            }.bind(this)}><span style={{ color: '#9acc14' }}>מיון מיקומים בסדר אלפבתי</span></Button>


            <label style={{ color: '#9acc14' }}>קיבוץ לפי קטגוריה</label>

            <Checkbox onClick={function () {
               let that = this;
               if (that.state.isGroupByCategory == true)
                  this.setState(function (state) { return { isGroupByCategory: false } }, function () { console.log(that.state.isGroupByCategory) })
               else
                  this.setState(function (state) { console.log('print'); console.log(state); return { isGroupByCategory: true, tableRows: [...state.tableRows].push(7) } }, function (work) { console.log(that.state.isGroupByCategory) })
                     ;
            }.bind(this)}

            />
            <div style={{ margin: '20px' }} class="container-fluid">
               {view}
            </div>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return { manager: state.manager };
}
export const MaterialLocationTableConnected = connect(mapStateToProps)(MaterialLocationTable);