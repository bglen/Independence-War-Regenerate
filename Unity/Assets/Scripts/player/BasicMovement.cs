using UnityEngine;
using System.Collections;

public class BasicMovement : MonoBehaviour
{
	public float amount = 50f;
	public float maxSpeed = 1000;
	public float speed = 0;
	public Vector3 movingDirection = Vector3.zero;
	public Vector3 thrustDirection = Vector3.zero;
	public Vector3 facingDirection = Vector3.zero;

	void FixedUpdate ()
	{
		thrustDirection = Vector3.zero;
		float h = Input.GetAxis("Horizontal") * amount * Time.deltaTime;
		float v = Input.GetAxis("Vertical") * amount * Time.deltaTime;
		float thrust = Input.GetAxis("Throttle") * 25;
		
		rigidbody.AddTorque(transform.up * -h);
		rigidbody.AddTorque(transform.right * -v);

		facingDirection = -transform.forward;

		thrustDirection = thrustDirection * thrust;

		movingDirection = movingDirection + thrustDirection;

		if (movingDirection.magnitude > maxSpeed)
		{
			movingDirection.Normalize();
			movingDirection = movingDirection * maxSpeed;
		}

		speed = movingDirection.magnitude;

		rigidbody.AddForce(movingDirection);
	}
}