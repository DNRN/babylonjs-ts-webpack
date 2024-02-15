import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { Engine } from '@babylonjs/core/Engines/engine';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Scene } from '@babylonjs/core/scene';

import '@babylonjs/core/Materials/standardMaterial';

import { GridMaterial } from '@babylonjs/materials/grid/gridMaterial';

export const Renderer = () => {
	// Get the canvas element from the DOM.
	const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;

	// Associate a Babylon Engine to it.
	const engine = new Engine(canvas);

	var scene = new Scene(engine);

	// This creates and positions a free camera (non-mesh)
	var camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

	// This targets the camera to scene origin
	camera.setTarget(Vector3.Zero());

	// This attaches the camera to the canvas
	camera.attachControl(canvas, true);

	// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
	var light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

	// Default intensity is 1. Let's dim the light a small amount
	light.intensity = 0.7;

	// Our built-in 'sphere' shape.
	var sphere = MeshBuilder.CreateSphere(
		'sphere',
		{ diameter: 2, segments: 32 },
		scene
	);

	// Move the sphere upward 1/2 its height
	sphere.position.y = 1;

	// Our built-in 'ground' shape.
	var ground = MeshBuilder.CreateGround(
		'ground',
		{ width: 6, height: 6 },
		scene
	);

	// Render every frame
	engine.runRenderLoop(() => {
		scene.render();
	});
};
