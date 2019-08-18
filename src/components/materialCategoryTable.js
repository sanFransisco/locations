import { Action } from './common/actions';
import React from 'react';
import { MaterialTable } from './common/MaterialTable';
import { connect } from 'react-redux';
import { WsdCategory } from './category';
import Checkbox from '@material-ui/core/Checkbox';

class MaterialCategoryTable extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    inputs = {};
    onChange(obj) {
        ;
        this.props.dispatch({ type: 'INPUT', data: { inputs: this.inputs } });
    }
    onToggle(name) {
        ;
        this.props.dispatch({ type: 'TOGGLE_CATEGORY', data: name });
    }
    render() {
        let that = this;
        let tableHeaders =
            <tr style={{ color: '#9acc14' }}>

            </tr>
        //if(this.props.categories == undefined || !this.props.categories)
        //return table;  
        let tableRows = [<tr style={{ color: '#9acc14', cursor: 'grab' }}>
            <td>
                <input id="category" placeholder="enter category..."
                    onChange={function (e) {
                        that.inputs.name = e.target.value; that.onChange()
                    }.bind(this)
                    }>
                </input>
            </td>
        </tr>];
        if (this.props.manager != undefined)
            ;
        this.props.manager.items.forEach((item) => {
            if (!item.category)
                tableRows.push(
                    <WsdCategory name={item.name} id={item.id}
                        toggle={function (name) { that.onToggle(name) }}
                        checked={that.props.manager.activeCategories.indexOf(item.name) != -1}
                        cb={function (value, categoryObj) {
                            ;
                            let id = categoryObj.id
                            that.props.dispatch({ type: 'ACTIVE_CATEGORY', data: { categoryId: id } });
                            //  that.inputs.id = categoryName.id
                            let input = document.querySelector('#category');
                            input.value = categoryObj.name
                        }
                        }>
                    </WsdCategory>
                )
        });
        return (<div class='container-fluid' style={{ textAlign: 'center', width: '50%', height:'100vh', overflowY:'auto' }}>
            <MaterialTable thead={tableHeaders} trows={tableRows}></MaterialTable>
        </div>)
    }
}

function mapStateToProps(state) {
    return { manager: state.manager };
}
export const MaterialCategoryTableConnected = connect(mapStateToProps)(MaterialCategoryTable);