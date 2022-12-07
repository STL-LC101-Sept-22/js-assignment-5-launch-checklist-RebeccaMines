// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else (!isNaN(testInput)) 
        return "Is a number"
    }
    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
        alert("All fields are required!");
        
    } else if (isNaN(pilotTest) === false || isNaN(copilotTest) === false || isNaN(fuelLevel) || isNaN(cargoLevel)) {
        alert("Make sure to enter valid information for each field!");

    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       
        let launchStatus = document.getElementById("launchStatus");

        if (fuelLevel < 10000 && cargoLevel <= 10000) {
            cargo.innerHTML = "Cargo mass low enough for launch"
            fuel.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "rgb(199, 37, 78)";

        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            cargo.innerHTML = "Cargo mass too heavy for launch";
            fuel.innerHTML = "Fuel level high enough for launch"
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "rgb(199, 37, 78)";

        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            cargo.innerHTML = "Cargo mass too high";
            fuel.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "rgb(199, 37, 78)";

        } else {
            cargo.innerHTML = "Cargo mass low enough for launch"
            fuel.innerHTML = "Fuel level high enough for launch"
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "#419F6A";
        }
    }
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
