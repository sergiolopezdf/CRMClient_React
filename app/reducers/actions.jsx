//Actions file

import {visits} from "../assets/mock-data";


export function updateInfo(visitIndex) {
    //Returns the element that has been clicked on
    return {
        type: 'UPDATE_INFO',
        visit: visits[visitIndex],
    }
}