Param(
  [switch]$skipBuild = $false
)
$ErrorActionPreference = "Stop"

yaml2json -s "m-chee-daro.yml"

cd app
if ($skipBuild -eq $false){
  npm install
  npm run build
  Remove-Item -Recurse -Path ../docs -Exclude "_config.yml" -Force
}

Copy-Item -Force "../m-chee-daro.json" build
Copy-Item -Force "../m-chee-daro.json" src

Copy-Item -Force -Recurse "build/*" "../docs/"
