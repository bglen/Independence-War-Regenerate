#pragma strict
var guiElements : GameObject[];
var contacts : GameObject[];
var guiOrigin : GameObject;

function Start () {
	//add gui elements to array
	//guiElements = GameObject.FindGameObjectsWithTag("gui");

}


function FixedUpdate () {
	contacts = GameObject.FindGameObjectsWithTag("ship");
	//for each contact in contacts
	//if close enough 
		// create target reticle gameObject
	//else remove it
	
	//for each target reticle
	//LookAt guiOrigin
}