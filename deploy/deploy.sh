#!/bin/bash

cd build

GIT_SSH_COMMAND="ssh -i /home/travis/build/scottrw93/home-wall/deploy/travis" git clone git@github.com:scottrw93/scottrw93.github.io.git

rm -rf scottrw93.github.io/*
cp -r `ls -A | grep -v "scottrw93.github.io"` scottrw93.github.io/

cd scottrw93.github.io

git add .
git commit -m update
GIT_SSH_COMMAND="ssh -i /home/travis/build/scottrw93/home-wall/deploy/travis" git push origin master

cd ..
rm -rf scottrw93.github.io
