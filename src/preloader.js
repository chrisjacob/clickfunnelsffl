var preloading = [
  "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/F0zq-clickfunnels-14daysfree-1c.jpg",
  "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/W4-d-clickfunnels-14daysfree-2.jpg",
  "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/u0jj-clickfunnels-14daysfree-3b.jpg",
  "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/NjWR-clickfunnels-12monthsfree-1.jpg",
  "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/oAZK-clickfunnels-12monthsfree-2.jpg"
];
var images = [];
for (var i = 0; i < preloading.length; i++) {
  images[i] = new Image();
  images[i].src = preloading[i];
}

// var preloader = function() {
//   console.log("2");
//   preloadImages(
//     "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/F0zq-clickfunnels-14daysfree-1c.jpg",
//     "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/W4-d-clickfunnels-14daysfree-2.jpg",
//     "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/u0jj-clickfunnels-14daysfree-3b.jpg",
//     "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/NjWR-clickfunnels-12monthsfree-1.jpg",
//     "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/oAZK-clickfunnels-12monthsfree-2.jpg"
//   );
// };
// function addLoadEvent(func) {
//   var oldonload = window.onload;
//   if (typeof window.onload !== "function") {
//     console.log("3.1");

//     window.onload = func;
//   } else {
//     console.log("3.2");

//     window.onload = function() {
//       console.log("3.3");

//       if (oldonload) {
//         oldonload();
//       }
//       func();
//     };
//   }
// }
// addLoadEvent(preloader);

// preloadImages(
//   "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/F0zq-clickfunnels-14daysfree-1c.jpg",
//   "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/W4-d-clickfunnels-14daysfree-2.jpg",
//   "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/u0jj-clickfunnels-14daysfree-3b.jpg",
//   "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/NjWR-clickfunnels-12monthsfree-1.jpg",
//   "https://uploads.codesandbox.io/uploads/user/0b22c377-e160-4221-9087-53627a7647db/oAZK-clickfunnels-12monthsfree-2.jpg"
// );
