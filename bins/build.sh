# Switch into the main project directory
cd $(dirname $0)/../

# Clean and build project with Nuxt
pnpm run clean
pnpm run build:partial

# Copy EdgeDB config and migrations
cp edgedb.toml .output/edgedb.toml
mkdir -p .output/dbschema/migrations
cp -R dbschema/migrations/*.edgeql .output/dbschema/migrations/

# Bundle output into a tar file
tar -cf quotebook.tar .output/*
gzip quotebook.tar

echo "Successfully build Quotebook for deployment."
