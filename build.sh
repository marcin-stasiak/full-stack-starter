# Cleanup
echo "Remove old build..."
npm prebuild --prefix "$(dirname "$0")"
if [ -d "$(dirname "$0")/node_modules" ]; then
  echo "Remove old modules..."
  rm -rf "$(dirname "$0")/node_modules"
fi

# Install and build
echo "Install modules..."
npm install --prefix "$(dirname "$0")"
echo "Build application..."
npm run build:server --prefix "$(dirname "$0")"
