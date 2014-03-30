#pragma strict

var turnspeed = 5.0;
var speed = 5.0;
private var trueSpeed = 0.0;
var strafeSpeed = 5.0;

function Update () {
	
	var roll = Input.GetAxis("Roll");
	var pitch = Input.GetAxis("Pitch");
	var yaw = Input.GetAxis("Yaw");
	var strafe = Vector3(Input.GetAxis("Horizontal")*strafeSpeed*Time.deltaTime, Input.GetAxis("Vertical")*strafeSpeed*Time.deltaTime, 0);
	
	var power = Input.GetAxis("Power");
	
	//Truespeed controls
	
	if (trueSpeed < 10 && trueSpeed > -3){
		trueSpeed += power;
	}
	if (trueSpeed > 10){
		trueSpeed = 9.99;	
	}
	if (trueSpeed < -3){
		trueSpeed = -2.99;	
	}
	if (Input.GetKey("backspace")){
		trueSpeed = 0;
	}
	
	rigidbody.AddRelativeTorque(pitch*turnspeed*Time.deltaTime, yaw*turnspeed*Time.deltaTime, roll*turnspeed*Time.deltaTime);
	rigidbody.AddRelativeForce(0,0,trueSpeed*speed*Time.deltaTime);
	rigidbody.AddRelativeForce(strafe);
}