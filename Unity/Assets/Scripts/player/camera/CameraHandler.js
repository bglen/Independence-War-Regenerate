#pragma strict

var cockpitCamera : GameObject;
var orbitCamera : GameObject;
var orbitCameraObject : GameObject;

//makes sure that you can only toggle cameras repeatedly if you hold the button down
var lock : boolean = false;

function Start () {
cockpitCamera.camera.active = true;

}

function FixedUpdate () {
	if(Input.GetKeyUp("tab")){
		lock = false;
	}
	//var rotateScript = orbitCameraObject.GetComponent( "ArcBall" );
	if(Input.GetKeyDown("tab")){
		if(lock == false){
		cockpitCamera.camera.active = !cockpitCamera.camera.active;
		orbitCamera.camera.active = !orbitCamera.camera.active;
		//rotateScript.active = !rotateScript.active;
		}
		lock = true;
	}

}