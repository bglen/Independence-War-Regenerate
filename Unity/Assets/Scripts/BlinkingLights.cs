using UnityEngine;
using System.Collections;

public class BlinkingLights : MonoBehaviour {

	public float rate = 2.0f;
	public float duration = 0.2f;
	public float blinkDuration = 14;
	public GameObject[] lights; 

	// Use this for initialization
	void Start () {
		lights = GameObject.FindGameObjectsWithTag("blink");
		while(true){
			StartCoroutine(BlinkLights());
		}
	}

	IEnumerator BlinkLights() {
		yield return new WaitForSeconds (rate);
		for(int i = 0; i <= lights.Length; i++){
			light.enabled = !light.enabled;
		}
		yield return new WaitForSeconds (duration);
	}
}
