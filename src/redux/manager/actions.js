const APP_ACTIONS = [
    'ADD_ITEM',
    'DELETE_ITEM',
    'EDIT_ITEM',
    'INPUT'
]
import { bindActionCreators } from 'redux';
//static typing each domain actions defines good bounderies
//event is for the reducer to handle the state according to event source
class BindActions {
    static add(newItem) {
        return { type: 'ADD_ITEM', data: newItem, }
    }
    static delete(itemName) {
        return { type: 'DELETE_ITEM', data: itemName, }
    }
    static edit(itemName) {
        return { type: 'EDIT_ITEM', data: itemName, }
    }
}

export const ManagerBindActions = (dispath) => {
    return bindActionCreators({ add: BindActions.add, delete: BindActions.delete, edit: BindActions.edit }, dispath);
}