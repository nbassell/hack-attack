/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLMultisampleRenderTarget, WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, DataTexture2DArray, DataTexture3D, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, AnimationLoader, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, PositionalAudioHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ImageUtils, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, CubeGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, MeshMatcapMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, ACESFilmicToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RedFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, Projector, CanvasRenderer, JSONLoader, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/js/enemies.js":
/*!***************************!*\
  !*** ./src/js/enemies.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemies; });\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./src/js/enemy.js\");\n\r\n\r\nclass Enemies {\r\n    constructor(scene) {\r\n        this.enemies = [];\r\n        this.positions = [[-10,-10], [-10,0], [-10,10], [0, -10], [0,0], [0,10], [10,-10], [10,0], [10,10]]\r\n        this.scene = scene;\r\n        this.spawnEnemies();\r\n    }\r\n\r\n    spawnEnemies() {\r\n        setInterval(() => {\r\n            let random = Math.floor(Math.random() * 9);\r\n            let position = this.positions[random]\r\n            let enemy = new _enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](position, this.scene);\r\n            // this.scene.add(enemy.enemy);\r\n            this.enemies.push(enemy);\r\n        }, 1000);\r\n    }\r\n\r\n    updateEnemy() {\r\n        this.enemies.forEach((enemy) => {\r\n            enemy.updatePos();\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/enemies.js?");

/***/ }),

/***/ "./src/js/enemy.js":
/*!*************************!*\
  !*** ./src/js/enemy.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemey; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Enemey {\r\n  constructor(position, scene) {\r\n    this.position = position;\r\n    this.scene = scene;\r\n    this.enemy = this.startEnemy();\r\n  }\r\n  \r\n  startEnemy() {\r\n\r\n    var loader = new three__WEBPACK_IMPORTED_MODULE_0__[\"ObjectLoader\"]();\r\n    loader.load( 'models/enemy.json', (object) => {\r\n      this.scene.add(object);\r\n    });\r\n\r\n    // var geometry = new THREE.BoxBufferGeometry(10, 1, 1);\r\n    // var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );\r\n    // var object = new THREE.Mesh( geometry, material );\r\n    object.position.x = this.position[0];\r\n    object.position.y = this.position[1];\r\n    return object;\r\n  }\r\n\r\n  updatePos() {\r\n    this.enemy.position.z += 0.5;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/enemy.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heart */ \"./src/js/heart.js\");\n/* harmony import */ var _enemies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemies */ \"./src/js/enemies.js\");\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n  constructor() {\r\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\r\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](230, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n    this.camera.position.z = 50;\r\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    this.heart = new _heart__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    this.scene.add(this.heart.heart);\r\n    this.enemies = new _enemies__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scene);\r\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\r\n    this.renderer.setSize(window.innerWidth, window.innerHeight);\r\n    this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"]( 0x000000 );\r\n    document.body.appendChild(this.renderer.domElement);\r\n}\r\n\r\n\r\n  animate() {\r\n    this.renderer.render(this.scene, this.camera);\r\n    this.update();\r\n  }\r\n  \r\n  update() {\r\n    this.heart.drawHeart();\r\n    this.enemies.updateEnemy();\r\n    requestAnimationFrame(this.animate.bind(this));\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/heart.js":
/*!*************************!*\
  !*** ./src/js/heart.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heart; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Heart {\r\n  constructor() {\r\n    this.heart = this.startHeart();\r\n  }\r\n  \r\n  startHeart() {\r\n    var x = 0, y = 0;\r\n    var heartShape = new three__WEBPACK_IMPORTED_MODULE_0__[\"Shape\"]();\r\n\r\n    heartShape.moveTo( x + 5, y + 5 );\r\n    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );\r\n    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );\r\n    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );\r\n    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );\r\n    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );\r\n    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );\r\n\r\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"ShapeBufferGeometry\"]( heartShape );\r\n    var material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]( { color: 0x00ff00 } );\r\n    var mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( geometry, material ) ;\r\n    material.side = three__WEBPACK_IMPORTED_MODULE_0__[\"DoubleSide\"];\r\n    var center = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\r\n    mesh.geometry.computeBoundingBox();\r\n    mesh.geometry.boundingBox.getCenter(center);\r\n    mesh.geometry.center();\r\n    mesh.position.copy(center);\r\n    // geometry.center();\r\n    return mesh;\r\n  }\r\n\r\n  drawHeart() {\r\n    this.heart.rotation.y += 0.05;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/heart.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  // var scene = new THREE.Scene();\r\n  // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n\r\n  // var geometry = new THREE.BoxGeometry(1, 1, 1);\r\n  // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });\r\n  // var cube = new THREE.Mesh(geometry, material);\r\n  // scene.add(cube);\r\n\r\n  // var renderer = new THREE.WebGLRenderer();\r\n  // renderer.setSize(window.innerWidth, window.innerHeight);\r\n  // document.body.appendChild(renderer.domElement);\r\n\r\n  // camera.position.z = 5;\r\n\r\n  // function animate() {\r\n  //   requestAnimationFrame(animate);\r\n\r\n  //   cube.rotation.x += 0.01;\r\n  //   cube.rotation.y += 0.01;\r\n    \r\n  //   renderer.render(scene, camera);\r\n  // }\r\n\r\n  // animate();\r\n  const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  game.animate();\r\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\r\n  constructor(scene, camera) {\r\n    this.scene = scene;\r\n    this.camera = camera;\r\n    this.health = 3;\r\n  }\r\n\r\n  isHit() {\r\n    this.health--;\r\n  }\r\n\r\n  gameOver() {\r\n    this.health === 0;\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/player.js?");

/***/ })

/******/ });