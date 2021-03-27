// Write your JavaScript code here.
// Remember to pay attention to page loading!
 function init () {

    let takeOff_button = document.getElementById("takeoff");
    let land_button = document.getElementById("landing");
    let abortMission_button = document.getElementById("missionAbort");
    let move_button = document.querySelectorAll("button");
    let moveX = 0;
    let moveY = 0;
    
    function takeOff () {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.background = "#003399";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    }

    takeOff_button.addEventListener("click", takeOff);

    function landProcess () {
        window.alert("The shuttle is landing. Landing gear engaged.");        
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "";    
        document.getElementById("spaceShuttleHeight").innerHTML = 0;    
    }

    land_button.addEventListener("click", landProcess);

    function missionAbort () {
        let result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.background = "";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;    
        }
    }
    
    abortMission_button.addEventListener("click", missionAbort);

    function upButton () {        
        document.getElementById("rocket").style.position = "relative";
        moveX -= 10;
        document.getElementById("rocket").style.top = moveX + "px";        
        document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
    }

    move_button[0].addEventListener("click", upButton);

    function downButton () {            
        document.getElementById("rocket").style.position = "relative";
        moveX += 10;    
        document.getElementById("rocket").style.top = moveX + "px";        
        document.getElementById("spaceShuttleHeight").innerHTML = Number(document.getElementById("spaceShuttleHeight").innerHTML) - 10000;
    }

    move_button[1].addEventListener("click", downButton);

    function leftButton () {            
        document.getElementById("rocket").style.position = "relative";
        moveY -= 10;    
        document.getElementById("rocket").style.left = moveY + "px";        
    }

    move_button[3].addEventListener("click", leftButton);

    function rightButton () {            
        document.getElementById("rocket").style.position = "relative";
        moveY += 10;    
        document.getElementById("rocket").style.left = moveY + "px";        
    }

    move_button[2].addEventListener("click", rightButton);
}

window.addEventListener("load", init); 