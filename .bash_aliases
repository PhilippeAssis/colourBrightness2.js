alias mongorestart="sudo rm /var/lib/mongodb/mongod.lock && sudo service mongod restart"
alias bashrc="source ~/.bashrc"

gitall(){
if [ -z "$1" ]; then
	git add --all && git commit -m all && git push origin master
else
	git add --all && git commit -m \"$1\" && git push origin master
fi
}


gittag(){
packagejson="$PWD/package.json"

if [ -e $packagejson ]; then
	packegeversion=$(cat package.json | grep -Po '(?<="version": ")[^"]*')
	if [ -z "$1" ]; then
		gitcommand="git tag -a $packegeversion -m $packegeversion"		
	else
		gitcommand="git tag -a $packegeversion -m $1"
	fi
else
	if [ -z "$2" ]; then
		gitcommand="git tag -a $1 -m $1"
	else
		gitcommand="git tag -a $1 -m \"$2\""
	fi
fi

if [ -e $packagejson ]; then
	eval "$gitcommand && git push origin --tags && npm publish"
else
	eval "$gitcommand && git push origin --tags"
fi
}

appversion(){
cat package.json | grep -Po '(?<="version": ")[^"]*'
}

