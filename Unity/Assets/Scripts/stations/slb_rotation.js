//Brian Glen
//4/9/14
#pragma strict

//in degrees
var speed : float = 3;

function Start () {

}

function FixedUpdate () {
	transform.Rotate(0,speed,0);
}