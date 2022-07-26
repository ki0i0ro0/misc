const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('database error: ' + err.message)
  } else {
    db.serialize(() => {
      //都度table削除（あれば）
      db.run('drop table if exists todos')
      //table生成（無ければ）
      db.run(
        'create table if not exists todos( \
                id integer primary key autoincrement, \
                title nverchar(32), \
                date nverchar(32) \
            )',
        (err) => {
          if (err) {
            console.error('table error: ' + err.message)
          } else {
            //初期データinsert
            db.run('insert into todos(title,date) values(?,?)', 'hoge', new Date().toDateString())
            db.run('insert into todos(title,date) values(?,?)', 'foo', new Date().toDateString())
            db.run('insert into todos(title,date) values(?,?)', 'bar', new Date().toDateString())
          }
        },
      )
    })
  }
})
