// pm2 list // pm2 monit // pm2 start index.js --watch // pm2 stop index // pm2 start index.js --node-args="--max-old-space-size=2048" # increase to 2gb --watch
// git status // git branch "nameNewBranch" // git checkout "nameNewBranch" // git checkout -b "nameNewBranch"
// git commit -am "add index.js and clone old files" // git add . // git commit -m "add index.js and clone old files"
// git push (git push --set-upstream (-u)* origin dev)* // git pull origin
// git merge "nameBranch what we want to merge" // git branch -d "nameBranch" (for delete on PC) // git push origin --delete "nameBranch" (for delete on GIT)

const chokidar = require('chokidar');
const path = require('path');

// const { create } = require('xmlbuilder2');
// const xml2js = require('xml2js');
const fs = require('fs');
const { transform, prettyPrint } = require('camaro');
// const builder = new xml2js.Builder();

// const parser = new xml2js.Parser({
//     explicitArray: true
// });



// var fetch = require('node-fetch'); 

// fetch('https://levenya.top/admin/newcron.php')
//   .then(res => res);
  // .then(text => console.log(text)); 

// const filePath3 = path.join(__dirname, '../../Server/domains/levenya/admin/', 'newcron.php');
// fs.readFile(filePath3, 'utf-8', (err, content) => {
//   if (err) { throw err }; 
// });
// fetch('https://levenya.top/admin/newcron.php')
//   .then((response) => {
//     // return response.text();
//   });

// setInterval(function() {
//   console.log('cron start');
  // src="https://levenya.top/admin/newcron.php";
//   setTimeout(function () {
//   src=0;
//   }, 850000);
//   console.log('cron done');
// }, 900000);



//   fs.readFile(filePath, 'utf-8', (err, content) => {
//     if (err) { console.log(err); throw err;  };

// csvNew = content.replace(/Одежда/gi, 'Одежда---+++'); // замена слова в названии

// console.log(csvNew);
    // const goodsParsed = Papa.parse(content, { header: true });
  // console.log(goodsParsed);
    // goodsParsed.data.map(item => {
      // item._MODEL_NEW = item._MODEL_MMM; delete item._MODEL_MMM; // переименовать поле в прайсе

      // (item._ID_ === "29353500") && (item._SKU_MMM = item._SKU_) && (delete item._SKU_);  // переименовать поле в прайсе при условии

      // item._NAME_ = item._NAME_.replace(/МОДЕЛЬ/gi, 'МОДЕЛЬ__NEWYYY'); // замена слова в названии

      // (item._ID_ === "29353500") && (item._NAME_ = item._NAME_.replace(/МОДЕЛЬ+++/gi, 'МОДЕЛЬ+++NEW')); // замена слова в названии при условии

      // return item;
    // });

    // const csvNew = Papa.unparse(goodsParsed.data);
  
    // fs.writeFile(filePath2, csvNew, err => {
    //   if (err) { throw err };
    // });

  // });

// });



const filePath = path.join(__dirname, 'csv', '1.xml');
const filePath2 = path.join(__dirname, 'csv', '2.xml');
const filePath3 = path.join(__dirname, 'csv', '2.json');

const watcher = chokidar.watch('csv/1.xml', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

console.log('322');

watcher.on('change', () => {

  console.log('122'); 

try {
  const data = fs.readFileSync(filePath)
  // // console.log(data)
  let xml = data.toString()
  // console.log(xml);
// var filePath = filePath;
  
  
// fs.readFile(filePath, function(err, data) {
// 	parser.parseString(data, function(err, result) {
// 		let f1 = {"User": {"$":{"name":"Adam"},"Address":{"Street":"1234 park avenue"}}}
		// result.Person = f1;

//     let data = JSON.stringify(result);
// fs.writeFileSync(filePath3, data);
    
// 		let xml_string = builder.buildObject(result);
// 		fs.writeFile(filePath2, xml_string, function(err, data){
// 			if (err) console.log(err);
// 		});
// 	});
// });
  

  const template = [
            '/items/item',
            {
              id: '@id',
              available: '@available',
              vendor: 'title-case(vendor)',
                param: ['param', {
                    name: '@name',
                    data: '.'
                }]
            }
        ]

    ;
  (async function () {
    const result = await transform(xml, template)
    // console.log(result)

    let data2 = JSON.stringify(result);
fs.writeFileSync(filePath3, data2);

    // const prettyStr = await prettyPrint(xml, { indentSize: 4})
    // // console.log(prettyStr)
    // fs.writeFile(filePath2, prettyStr, function(err, data){
		// 	if (err) console.log(err);
		// });

    // let xml_string = builder.buildObject(result);
		// fs.writeFile(filePath2, xml_string, function(err, data){
		// 	if (err) console.log(err);
		// });
})()
  
  
  
  

  
} catch (err) {
  console.error(err)
}



  
  


  // fs.readFileSync(filePath, 'utf-8', (err, content) => {
  //   if (err) { throw err };
  //   const x2js = new X2JS();
    // const jsonObj = x2js.xml2js(content);
    // console.log(content);
  //   console.log(jsonObj);
    // const jsonObjNew = jsonObj.items.item;


//   var stream = new fs.ReadStream(filePath);
 
// stream.on('readable', function(){
//     var data = stream.read();
   

//   const xml2 = data.toString()
//    console.log(xml2);
  // console.log(csvNewOld);


// ></0><1 id="

    // const xml2 = x2js.js2xml(jsonObj);
    
    // const xml3 = xml2.replace(/></gi, ">\n<")
    // const xml3 = xml2.replace(/><\/\d+><\d+ id="/gi, "></item>\n<item id=\"")
    // const xml4 = xml2.replace(/<\d+ id="/gi, '<item id="')
    // const xml5 = xml4.replace(/<\d+ id="/gi, '<item id="')
  
    // fs.writeFile(filePath2, fd, err => {
    //   if (err) { throw err };
    // });

  // });

});