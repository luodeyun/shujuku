let stuModel = require('./schema')
let db = require('./db');
// (async()=>{
//     await db  
//     let result = await stuModel.findOne({name:'班长'},function(err,data){
//         if(err) console.log(err);

//     })
// })()
db
    .then(value => {
        stuModel.findOne({
            name: '班长'
        }, function (err, data) {
            if (err) console.log(err);
            else {
                console.log(data);
            }
        }) //
        //新增数据
        /*let createResult = await studentModel.create({
          stu_id:'20190722004',
          name:'qiu海峰',
          age:90,
          sex:'男',
          hobby:['打代码','吃饭','睡觉'],
          info:'一个非常帅气的男人',
        })
        //查
              /*studentModel.findOne({age:90},{name:1,_id:0},(err,data)=>{
            if(!err){
              console.log(data)
            }else{
              console.log(err)
            }
        })*/

        //更新数据
        /*let updateResult = await studentModel.updateMany({age:90},{sex:'男'},{multi:true})
        console.log(updateResult);*/

        //删除数据
        /*await studentModel.deleteMany({age:90})*/
    })