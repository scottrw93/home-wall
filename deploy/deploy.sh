#!/bin/bash

cd build
git clone -i ../private git@github.com:scottrw93/scottrw93.github.io.git

rm -rf scottrw93.github.io.git/*
cp -r `ls -A | grep -v "scottrw93.github.io"` scottrw93.github.io/

cd scottrw93.github.io.git

git add .
git commit -m update
git push -i ../private origin master

cd ..
rm -rf scottrw93.github.io.git
