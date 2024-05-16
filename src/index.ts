import { Renderer } from './renderer';
import { BoomBox } from './scenes/boombox';
import { Playground } from './scenes/playground';

console.log('MODE', process.env.NODE_ENV);

(async () => {
	const { scene, canvas, play } = Renderer();
	Playground(scene, canvas);
	// await BoomBox(scene);
	play();
})();
