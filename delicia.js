const xlsx  = require('xlsx')

const workbook = xlsx.readFile('autores.xlsx')
const sheet = workbook.SheetNames
/**/
const mysql = require('mysql')
const connection = mysql.createConnection({
	host:'localhost',
	user:'server',
	password:'server',
	database:'bat'
})

connection.connect(function(err){
	if(err)return console.log(err)
	
})

var autor = xlsx.utils.sheet_to_json(workbook.Sheets[sheet[0]])
const sql = "INSERT INTO arquivos(nome, arquivo) VALUES ?";

var values = [
	for(r in autor){'INSERT INTO arquivos(nome, arquivo) VALUES (\'-\', \'000083072.ppt\')'
		[autor[r].nome, autor[r].arquivo],
	}
]


console.log(values)
	  
/*
connection.query(sql, [values], function (error, results, fields){
    if(error) return console.log(error)
    console.log('adicionou registros!')
    connection.end();//fecha a conexão
})

/**/
/*

for(r in autor){
	var [r] console.log(autor[r].nome)
}
/**/