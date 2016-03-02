/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (() => {

    // declare game objects
    var scene: Scene = new Scene();
    var renderer: Renderer;
    var camera: PerspectiveCamera;
    var control: Control;
    var gui: GUI;
    var stats: Stats;
    var planeGeometry: PlaneGeometry;
    var planeMaterial: LambertMaterial;
    var plane: Mesh;
    var axes: AxisHelper;
    var ambientLight: AmbientLight;
    var cubeGeometry: CubeGeometry;
    var cubeMaterial: LambertMaterial;
    var fifthCube: Mesh;
    var fourthCube: Mesh;
    var thirdCube: Mesh;
    var secondCube: Mesh;
    var firstCube: Mesh;

    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        
        setupRenderer(); // setup the default renderer
	
        setupCamera(); // setup the camera


        /* CODE STARTS HERE */
        
        // Add an AmbientLight to the scene
        ambientLight = new AmbientLight(0xffffff);
        scene.add(ambientLight);
        console.log("Added an Ambient Light to Scene");
        
        // add an axis helper to the scene
        // Green = y, Blue = x, Red = z
        axes = new AxisHelper(20);
        axes.position.x = 0;
        axes.position.y = 0;
        axes.position.z = 0;
        scene.add(axes);
        
        //Add a Plane to the Scene
        planeGeometry = new PlaneGeometry(50, 50);
        planeMaterial = new LambertMaterial({ color: 0x6699ff });
        plane = new Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);
        console.log("Added the plane to the scene");
        
        //Add a Fifthcube to the Scene
        cubeGeometry = new BoxGeometry(10, 5, 10);
        cubeMaterial = new LambertMaterial({ color: (Math.random() * 0xffffff)});
        fifthCube = new Mesh(cubeGeometry, cubeMaterial);
        fifthCube.castShadow = true;

        fifthCube.position.x = 0;
        fifthCube.position.y = 5;
        fifthCube.position.z = 0;

        scene.add(fifthCube);
        console.log("Added Fifth Cube to the scene");
        
        //Add a Fourthcube to the Scene
        cubeGeometry = new BoxGeometry(7, 4, 7);
        cubeMaterial = new LambertMaterial({ color: (Math.random() * 0xffffff)});
        fourthCube = new Mesh(cubeGeometry, cubeMaterial);
        fourthCube.castShadow = true;

        fourthCube.position.x = 0;
        fourthCube.position.y = 9;
        fourthCube.position.z = 0;

        scene.add(fourthCube);
        console.log("Added fourth Cube to the scene");
        
        //Add a thirdcube to the Scene
        cubeGeometry = new BoxGeometry(5, 3, 5);
        cubeMaterial = new LambertMaterial({ color: (Math.random() * 0xffffff)});
        thirdCube = new Mesh(cubeGeometry, cubeMaterial);
        thirdCube.castShadow = true;

        thirdCube.position.x = 0;
        thirdCube.position.y = 12;
        thirdCube.position.z = 0;

        scene.add(thirdCube);
        console.log("Added third Cube to the scene");
        
        //Add a secondcube to the Scene
        cubeGeometry = new BoxGeometry(3, 2, 3);
        cubeMaterial = new LambertMaterial({ color: (Math.random() * 0xffffff)});
        secondCube = new Mesh(cubeGeometry, cubeMaterial);
        secondCube.castShadow = true;

        secondCube.position.x = 0;
        secondCube.position.y = 14;
        secondCube.position.z = 0;

        scene.add(secondCube);
        console.log("Added second Cube to the scene");
        
        //Add a firstcube to the Scene
        cubeGeometry = new BoxGeometry(1, 1, 1);
        cubeMaterial = new LambertMaterial({ color: (Math.random() * 0xffffff)});
        firstCube = new Mesh(cubeGeometry, cubeMaterial);
        firstCube.castShadow = true;

        firstCube.position.x = 0;
        firstCube.position.y = 15;
        firstCube.position.z = 0;

        scene.add(firstCube);
        console.log("Added first Cube to the scene");
        
        /* CODE ENDS HERE */
        
 
        // add controls
        gui = new GUI();
        control = new Control(0.01, 0.02, 0.03, 0.04, 0.05);
        addControl(control);

        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");

        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	

    }

    function addControl(controlObject: Control): void {
        /* ENTER CODE for the GUI CONTROL HERE */

        gui.add(controlObject, 'rotationFirst', -0.5, 0.5);
        gui.add(controlObject, 'rotationSecond', -0.5, 0.5);
        gui.add(controlObject, 'rotationThird', -0.5, 0.5);
        gui.add(controlObject, 'rotationFourth', -0.5, 0.5);
        gui.add(controlObject, 'rotationFifth', -0.5, 0.5);
    }

    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }

    // Setup main game loop
    function gameLoop(): void {
        stats.update();
        
        //animate Tappered Tower
        firstCube.rotation.y += control.rotationFirst;
        secondCube.rotation.y += control.rotationSecond;
        thirdCube.rotation.y += control.rotationThird;
        fourthCube.rotation.y += control.rotationFourth;
        fifthCube.rotation.y += control.rotationFifth;
        
        //generate Random color
        firstCube.material
        
        
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
	
        // render the scene
        renderer.render(scene, camera);
    }

    // Setup default renderer
    function setupRenderer(): void {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }

    // Setup main camera for the scene
    function setupCamera(): void {
        camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 100);
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);
        console.log("Finished setting up Camera...");
    }

    window.onload = init;

    return {
        scene: scene
    }

})();

