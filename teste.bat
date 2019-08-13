:Dentro da pasta de cada autor cria pastas excel, word, power point.
:E depois move os tipos de arquivos para cada pasta
for /f "tokens=*" %a in (lista.txt) do (
	cd %a
	md excel, word, "power point"
	move *.xlsx excel
	move *.xls excel
	move *.docx word
	move *.doc word
	move *.pptx "power point"
	move *.ppt "power point"
	cd /
)

:copy as pasta do hd, para o servidor de arquivos
:e depois move as pasta para pasta ja_passei_publico
for /f "tokens=*" %a in (lista.txt) do (
	md \\10.10.0.66\dados\temp\publico\"%a"
	xcopy /E "%a" \\10.10.0.66\dados\temp\publico\"%a"\
		
)

