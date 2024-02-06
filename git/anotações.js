/*
mkdir -> criar nova pasta
cd -> acessar pasta
cd .. -> voltar a pasta anterior
ls -> listar os arquivos e pastas de uma determinada pasta
echo -> exibir uma mensagem ou variável na saída padrão do terminal.
echo "mensagem" >> nome do arquivo -> adicionar o texto no arquivo
cat -> pegar o conteúdo do arquivo
less -> exibir o conteúdo do arquivo
cp -> copiar o conteúdo de um arquivo para outro. Ex: cp file.txt file2.txt
mv -> mover o conteúdo de um arquivo para outro. Ex: mv file.txt file2.txt
rm -> remover o arquivo.
rm -rf -> remover a pasta
history -> listar os últimos comandos
!(número que está no history) -> recuperar o comando que está no history
grep -> filtrar comandos do history. Ex: history | grep mv
exit -> sair do terminal
clear -> limpar o terminal
touch -> criar novo arquivo
pwd -> mostrar onde estou acessando no momento
nano -> editar o arquivo
type nul > nome_do_arquivo.txt

GIT
git config --global user.name "nome"
git config --global user.email "email"
git config --list
git init
git status
git add (nome do arquivo)
git commit -m "mensagem"
git log
git log --pretty=oneline
git log --stat
git diff
git diff nomedoarquivo
gif diff --name--only
git add .
git commit --amend
git checkout -- (nome do arquivo)
git reset HEAD (nome do arquivo)
git merge
git branch -D (nome da branch) -> deletar
git checkout -b (nome da branch) -> criar e mudar de branch
git clone (link do github)
git pull -> baixar os arquivos enviados ao github

.gitignore -> nomes dos arquivos que devem ser ignorados
*/
