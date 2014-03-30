#pragma strict

//set a global rotation
var defaultRotation : Vector3 = Vector3.zero;

function Update () {
	transform.rotation = Quaternion.Euler(defaultRotation);
}