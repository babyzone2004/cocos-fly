#!/bin/bash

rm -rf ../build
/Applications/CocosCreator.app/Contents/MacOS/CocosCreator --path "./" --build "startScene=de6d47e5-011f-4c10-a385-1cd318777662"
gulp
