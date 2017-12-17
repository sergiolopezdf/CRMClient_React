//Actions file

export function updateInfo(visit) {
    //Returns the element that has been clicked on
    return {
        type: 'UPDATE_INFO',
        visit: visit,
    }
}

export function updateData() {
    //If JSON has been downloaded, set the boolean to true
    return {
        type: 'DOWNLOADED_JSON',
        isDataReady: true,
    }
}