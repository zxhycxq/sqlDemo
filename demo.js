const mysql=require('mysql')

//创建连接对象
const con=mysql.createConnection({
  host:'location',
  user:'root',
  password:'1234',
  port:'3306',
  database:'myblog'
})

//
con.connect()

const sql='select * from users;'
con.query(sql, (err,result)=>{
  if(err){
    console.error(err);
    return
  }
  console.log(`%c--result-- `, 'color:blue;', result)
})
//关闭连接
con.end()
