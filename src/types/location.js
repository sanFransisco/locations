//represent a location
export class Location{
    name ='';
    address = '';
    coordinates = undefined;
    category = undefined;
    constructor(name, address, coordinates, category){
        this.name = name;
        this.address = address;
        this.coordinates = coordinates;
        this.category = category;
    }
}

//reporesents a category
export class Category{
    constructor(name){
        this.name = name;
        this.id= Math.floor(Math.random() * Math.floor(10000));
    }
}

//filter by category
const filterLocations = (locations = [], {name})=>{
    let res = [];
    if(assertLocations(locations))
        return res;        
    locations.forEach((location)=>{
        if(location.category == name)
            res.push(location);
        });
    return res;
}

//sort by alphabetic order and cateogry
const sortLocations = (locations = [], isAlphabetic, isCategorized) => {

}

//validate locations 
const assertLocations = (locations = []) => {
    if(locations != undefined && locations instanceof Array)
        return true;
    return false;
}
