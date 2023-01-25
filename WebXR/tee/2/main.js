import * as THREE from '../../libs/three.js-r132/build/three.module.js';

import { GLTFLoader } from '../../libs/three.js-r132/examples/jsm/loaders/GLTFLoader.js';



import { RGBELoader } from '../../libs/three.js-r132/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from '../../libs/three.js-r132/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer;

init();
render();

function init() {

	const container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
	camera.position.set( - 1.8, 0.6, 2.7 );

	scene = new THREE.Scene();

	new RGBELoader()
		.setPath( '../../assets/models/textures/' )
		.load( 'royal_esplanade_1k.hdr', function ( texture ) {

			texture.mapping = THREE.EquirectangularReflectionMapping;

			scene.background = texture;
			scene.environment = texture;

			render();

			// model

			//const loader = new GLTFLoader().setPath( '../../assets/models/Helmet/' );
			//loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
			const loader = new GLTFLoader().setPath( '../../assets/models/Valeria/' );
			loader.load( 'BevelDeformer.gltf', function ( gltf ) {
			    scene.scale.set(.01,.01,.01)

				scene.add( gltf.scene );

				render();

			} );

		} );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	renderer.outputEncoding = THREE.sRGBEncoding;
	container.appendChild( renderer.domElement );

	const controls = new OrbitControls( camera, renderer.domElement );
	controls.addEventListener( 'change', render ); // use if there is no animation loop
	controls.minDistance = 2;
	controls.maxDistance = 10;
	controls.target.set( 0, 0, - 0.2 );
	controls.update();

	window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	render();

}

//

function render() {

	renderer.render( scene, camera );

}