import * as THREE from '../libs/three.js-r132/build/three.module.js';

import { GLTFLoader } from '../libs/three.js-r132/examples/jsm/loaders/GLTFLoader.js';





async function loadimage() {

  const loader = new GLTFLoader();



  const [imageData] = await Promise.all([

    loader.loadAsync('../assets/models/musicband-bear/scene.gltf'),



  ]);



  console.log('Squaaawk!', imageData);



  const image = imageData.scene.children[0];

  image.position.set(0, 0, 2.5);

  image.scale.set(0,0,0)



  return {

    image,

  };

}



export { loadimage }