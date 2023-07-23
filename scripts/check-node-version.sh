#!/usr/bin/env sh

node_version=$(node -v)

echo Before nvm use $node_version
echo 🚀 Checking the node version
if [ $node_version = "v18.15.0" ]; then
    echo Node version is correct!
else
    echo Node version is incorrect, pls install 18.15.0
    exit 1
fi

exit 0
