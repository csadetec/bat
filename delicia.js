const xlsx  = require('xlsx')
const fs = require('fs')

const workbook = xlsx.readFile('autores.xlsx')
const sheet = workbook.SheetNames

var autores = xlsx.utils.sheet_to_json(workbook.Sheets[sheet[0]])


// CHAMAR FUNÇOES DELICIAS

//addFiles()
//makeFolders()
//moveFiles()

qtdFiles()

function makeFolders(){
	if(!fs.existsSync(`./autores/sem_autores`)){
		fs.mkdirSync(`./autores/sem_autores`)	
	}
	/** */
	for(r in autores){
		let a = autores[r].nome
		//a = a.replace('//', '')
		
		if(!fs.existsSync(`./autores/${a}`) && authorValido(a)){
			fs.mkdirSync(`./autores/${a}`)	
			
		}
		/** */
	
	}
	
}
function authorValido(a){
	if(a != '--' && a != '?' && a != '_' && a != '-' && a != '*' && a != '.......... da Mágica' && a != '*.*' && a != '*.*.*.*.*.*.*.*.*.*.*.*.*.*.*' && a != '' && a != '*****' && a != 'A' && a != 'a' && a != 'C' && a != 'c')return true
	return false
}
function moveFiles(){
	for(r in autores){
		var a = autores[r].nome
		var file = autores[r].arquivo
		if(!authorValido(a)){
		//	console.log(a + r)
			if(fs.existsSync(`./arquivos/${file}`)){
				fs.renameSync(`./arquivos/${file}`, `./autores/sem_autores/${file}`)
			}
		}else if(fs.existsSync(`./arquivos/${file}`)){
			fs.renameSync(`./arquivos/${file}`, `./autores/${a}/${file}`)
	//			
		}
		/** */
	}
	
}

function qtdFiles(){
	//arquivos qtd
	fs.readdir('./arquivos', (err, files) => {
		console.log('Qtd de arquivos: '+files.length);
	})

	//pastas autores qtd
	fs.readdir('./autores', (err, files) => {
		console.log('Qtd de Autores: '+files.length);
	//	console.log(files)
	})
}
function addFiles(){
	for(r in autores){
		fs.appendFileSync(`arquivos/${autores[r].arquivo}`, 'teste')
	}
	//fs.appendFileSync('teste.pptx', 'teste')
}
