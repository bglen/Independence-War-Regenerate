#pragma strict

var cockpitCamera : GameObject;
var orbitCamera : GameObject;
var orbitCameraObject : GameObject;

function Start () {
cockpitCamera.camera.active = true;

}

function FixedUpdate () {

	var cameraInput : float = Input.GetAxis("Switch Camera");
	//var rotateScript = orbitCameraObject.GetComponent( "ArcBall" );
	if(cameraInput == 1){
		cockpitCamera.camera.active = !cockpitCamera.camera.active;
		orbitCamera.camera.active = !orbitCamera.camera.active;
		//rotateScript.active = !rotateScript.active;
	}

}