import {
	ArcRotateCamera,
	CubeTexture,
	Scene,
	SceneLoader,
} from '@babylonjs/core';

export const BoomBox = (scene: Scene) => {
	return new Promise<void>((resolve, reject) => {
		var hdrTexture = CubeTexture.CreateFromPrefilteredData(
			'https://playground.babylonjs.com/textures/environment.dds',
			scene
		);
		var currentSkybox = scene.createDefaultSkybox(hdrTexture, true);

		// Append glTF model to scene.
		SceneLoader.Append(
			'https://playground.babylonjs.com/scenes/BoomBox/',
			'BoomBox.gltf',
			scene,
			(s) => {
				// Create a default arc rotate camera and light.
				s.createDefaultCameraOrLight(true, true, true);

				// The default camera looks at the back of the asset.
				// Rotate the camera by 180 degrees to the front of the asset.
				(<ArcRotateCamera>s.activeCamera).alpha += Math.PI;

				resolve();
			}
		);
	});
};
