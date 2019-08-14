const xlsx  = require('xlsx')
const fs = require('fs')

const workbook = xlsx.readFile('autores.xlsx')
const sheet = workbook.SheetNames

var autor = xlsx.utils.sheet_to_json(workbook.Sheets[sheet[0]])

//make folder
if(!fs.existsSync(`./autores/sem_autores`)){
	fs.mkdirSync(`./autores/sem_autores`)	
}
/** */
for(r in autor){
	let a = autor[r].nome
	//a = a.replace('//', '')
	
	if(!fs.existsSync(`./autores/${a}`)){
		fs.mkdirSync(`./autores/${a}`)	
		//console.log(a)
		//var res = str.replace("Microsoft", "W3Schools");
	}
	/** */

}

// move files to your authors	
for(r in autor){
	var a = autor[r].nome
	var file = autor[r].arquivo
	if(a == '.' || a == '-' || a == '*' || a == '..' || a == ''){
	//	console.log(a + r)
		if(fs.existsSync(`./arquivos/${file}`)){
			fs.renameSync(`./arquivos/${file}`, `./autores/sem_autor/${file}`)
		}
	} else if(fs.existsSync(`./arquivos/${file}`)){
		fs.renameSync(`./arquivos/${file}`, `./autores/${a}/${file}`)
//			
	}
}

//arquivos qtd
fs.readdir('./arquivos', (err, files) => {
	console.log('Qtd de arquivos: '+files.length);
})

//pastas autores qtd
fs.readdir('./autores', (err, files) => {
	console.log('Qtd de arquivos: '+files.length);
//	console.log(files)
})