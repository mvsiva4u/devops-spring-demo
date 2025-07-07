#!/bin/bash

# Please note install jq and sponge in your terminal as part of the terminal commands not as a npm package

echo 'Renaming the Home page'
echo $1
mv package.json temp.json
echo 'Creating Temp File'
jq -r '.homepage |= "'"$1"'"' temp.json | sponge package.json
echo 'updated home page'
rm temp.json
echo 'removing Temp File'
