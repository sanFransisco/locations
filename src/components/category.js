import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Checkbox from '@material-ui/core/Checkbox';
//represents the category component
export class WsdCategory extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        ;
        let template='' ;        
        let that = this;
        if(this.props.name){
            template =
             <tr style={{textAlign:'right', color:'#9acc14'}}
             onClick={function(e){this.props.cb(undefined, {name:this.props.name, id:this.props.id})}.bind(that)}>
                  <td>{this.props.name}<Checkbox  
            onClick={function(){
                ;
                that.props.toggle(that.props.name)}}             
             color="primary"
             checked={this.props.checked}
           ></Checkbox> </td>
                 
             </tr>
          
        }
        return template;
    }
}