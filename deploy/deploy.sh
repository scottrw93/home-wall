#!/bin/bash

cd build
git clone -i ../deploy/travis git@github.com:scottrw93/scottrw93.github.io.git

rm -rf scottrw93.github.io/*
cp -r `ls -A | grep -v "scottrw93.github.io"` scottrw93.github.io/

cd scottrw93.github.io

git add .
git commit -m update
git push -i ../deploy/travis origin master

cd ..
rm -rf scottrw93.github.io
