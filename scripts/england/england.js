import * as footer from '../../scripts/shared/footer.js';
import * as mainFunctions from '../shared/mainGeneratorFunctions.js'
import * as header from '../shared/HeaderGenerator.js';
import * as englandData from './englandData.js';

// Generate Header
document.querySelector('header').innerHTML = header.Header({
    name: "England",
    info: "",
    location: "",
    pathToBackgroundImage: "../../images/england/bigbenriver.jpg",
    pathToRoot: "../../"
})

// Generate Main Section
// Cities Loop
for (let i of englandData.getCities()){
    mainFunctions.generateCityHTML(i);
}
// Landmarks Loop
for (let i of englandData.getLandmarks()){
    mainFunctions.generateLandmarkHTML(i);
}
// Citizens Loop
for (let i of englandData.getFamousCitizens()){
    mainFunctions.generateCitizenHTML(i);
}


// Generate Footer
footer.insertFooterHTML();