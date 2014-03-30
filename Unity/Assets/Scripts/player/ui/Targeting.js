#pragma strict

//var levelTime : float = 0;
//this sets the variable levelTime and makes it start at 0

function Start () {

}

function Update() {
    //levelTime = levelTime + 1.0*Time.deltaTime;
//this makes the level time go up by 1 per second
}

//find object that should have reticle and attach one

//ships and stations will have the tag "ship"
for(var contacts : GameObject in GameObject.FindGameObjectsWithTag("ship"))
{
        //Draw target markers
}
 
function OnGUI() {

}