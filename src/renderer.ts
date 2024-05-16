import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';

import '@babylonjs/core/Debug/debugLayer';
import '@babylonjs/inspector';

import '@babylonjs/core/Materials/standardMaterial';

export const Renderer = () => {
	// Get the canvas element from the DOM.
	const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;

	// Show inspector after hitting d
	window.onkeydown = (ev) => {
		if (ev.key === 'd') {
			scene.debugLayer.isVisible()
				? scene.debugLayer.hide()
				: scene.debugLayer.show();
		}
	};

	// Associate a Babylon Engine to it.
	const engine = new Engine(canvas);

	var scene = new Scene(engine);

	/// Get resize events
	const resize = (ev: UIEvent) => {
		engine.resize();
	};
	window.onresize = resize;
	canvas.onresize = resize;

	return {
		scene,
		canvas,
		play: () => {
			engine.runRenderLoop(() => {
				scene.render();
			});
		},
		pause: () => {
			engine.stopRenderLoop();
		},
	};
};
