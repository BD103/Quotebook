#!/bin/bash

# Builds the project and bundles it into quotebook.tar.gz
#
# You can run pnpm build or run this script directly.

# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -euo pipefail
IFS=$'\n\t'

# Switch into the main project directory
cd $(dirname $0)/../

# Clean and build project with Nuxt
pnpm run clean
pnpm run build:partial

# Copy update script
cp bins/update.sh .output/

# Copy EdgeDB config and migrations
cp edgedb.toml .output/edgedb.toml
mkdir -p .output/dbschema/migrations
cp -R dbschema/migrations/*.edgeql .output/dbschema/migrations/

# Bundle output into a tar file
tar -czf quotebook.tar.gz .output/*

echo "Successfully build Quotebook for deployment."
