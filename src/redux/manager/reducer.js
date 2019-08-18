import { assertLocationFields, assertAddress, assertCoordinate, assertCategoryFields } from '../../utils/validators'
import { Category } from '../../types/location';
function createCategory(data) {
    return assertCategoryFields(data) ? new Category(data.name) : undefined;
}

function createLocation(data) {
    return assertLocationFields(data) ? {
        name: data.name,
        address: data.address,
        coordinates: data.coordinates.trim(),
        category: { name: data.category }
    } : undefined
}

function saveToLocalStorage(arr) {
    localStorage.setItem('items', JSON.stringify(arr));

 }

export const managerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            ;
            let items = state.items;
            let newItem = { ...state.inputs }
            if (action.event == 'location'){
                newItem = { ...createLocation(newItem) };
                newItem = assertCoordinate(newItem)
            }
            else
                newItem = { ...createCategory(newItem) };
            if (newItem === undefined)
                return state;
            let add = true;
            state.items.forEach((item) => {
                if (item.name === newItem.name)
                    add = false;
            })
            if (!add)
                return state;
            items.push(newItem);
            saveToLocalStorage(items);
            return { ...state };

        }
        case 'DELETE_ITEM': {
            let items = state.items;
            let editItem = { ...state.inputs };
            items.forEach((item) => {
                if (item.name == editItem.name) {
                    const index = items.indexOf(item);
                    items.splice(index, 1);
                    return;
                }
            });
            saveToLocalStorage(items);
            return { ...state };
        }
        case 'EDIT_ITEM': {
            //edit locaiton
            let items = state.items;
            let editItem = { ...state.inputs };
            let editItemID = state.editCategoryID;
            if (action.event == 'location') {
                items.forEach((item) => {
                    if (item.name == editItem.name) {
                        const index = items.indexOf(item);
                        items[index] = { ...editItem }
                        return;
                    }

                });
            }
            else {
                let lastVal = '';
                //edit category name
                items.forEach((item) => {
                    if (!item.category && editItemID != undefined && item.id == editItemID) {
                        const index = items.indexOf(item);
                        lastVal = item.name
                        items[index] = Object.assign({},items[index],{name:editItem.name})
                        return;
                    }

                });
                //name change propagate to existing location categories
                items.forEach((item)=>{
                    if(item.category && item.category.name == lastVal){
                        item.category.name = editItem.name
                    }
                })
            }
            saveToLocalStorage(items)
            return { ...state };
        }
        case 'INPUT': {
            ;
            state.inputs = Object.assign({}, state.inputs, action.data.inputs);
            return { ...state };
        }
        case 'TOGGLE_CATEGORY': {
            ;
            let name = action.data;
            const index = state.activeCategories.indexOf(action.data);
            if (index != -1) {
                state.activeCategories.splice(index, 1);
            }
            else {
                state.activeCategories.push(name);
            }
            return { ...state }

        }
        case 'ACTIVE_CATEGORY': {
            let id = action.data.categoryId;
            state.editCategoryID = id;
            return { ...state };
        }
        default:
            return state;

    }

}