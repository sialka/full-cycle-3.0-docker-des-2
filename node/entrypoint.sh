#!/bin/bash
if [ ! -d "node_modules" ]; then
npm install;
fi

dockerize -wait tcp://db:3306 -timeout 20s node index.js
