// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}

// setTimeout(()=>{
//   console.log("setTimeout");
// })

// let p2=new Promise((resolve)=>{
//   resolve("Promise2")
//   console.log("Promise1")
// })
// p2.then((res)=>{
//   console.log(res);
// })

// setTimeout(()=>{
//   console.log("setTimeout");
// })
// new Promise((resolve)=>{
//   resolve("Promise2")
//   console.log("Promise1")
// }).then((res)=>{
//   console.log(res);
// })
// console.log(1);

//1 setTimeout Promise1 Promise2
//Promise1 1 Promise2 setTimeout
