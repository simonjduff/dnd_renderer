Param(
  [switch]$skipBuild = $false
)
$ErrorActionPreference = "Stop"

yaml2json -s "character.yml"

cd app
if ($skipBuild -eq $false){
  npm install
  npm run build
  Remove-Item -Recurse -Path ../docs -Exclude "_config.yml" -Force
}

Copy-Item -Force "../character.json" build
Copy-Item -Force "../character.json" src

Copy-Item -Force -Recurse "build/*" "../docs/"
