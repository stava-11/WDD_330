import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js';

document.getElementById('btnRadius').addEventListener('click', function(evt){
    const radius = document.getElementById('radius').value;
    myQuakesController.getQuakesByRadius(radius);
});

async function getURL() {
    return getLocation().then(response => {
        const lat = response.coords.latitude;
        const long = response.coords.longitude;
        const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=${lat}&longitude=${long}&maxradiuskm=100`
        return url;
    });
};
getJSON(getURL());
const myQuakesController = new QuakesController('#quakeList');


myQuakesController.init();



