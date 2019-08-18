export const assertCoordinate = (cord) => {
    //check that the user entered a valid string that can be mtached to a coordinate
    return cord.coordinates != undefined &&  cord.coordinates.match(/^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/g) ?
        cord : undefined;
}

export const assertAddress = () => {
    //check that address to contain valid chars
}

export const assertLocationFields = (obj) => {
    //ensure all location data entered by user
    return obj.name &&
        obj.address &&
        obj.coordinates && obj.category
}

export const assertCategoryFields = (obj) => {
    //ensure category is object with name prop
    return (typeof (obj) == 'object' && obj.name);
}