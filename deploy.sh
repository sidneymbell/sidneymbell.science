set -e
git checkout main
npm run build
git checkout gh-pages
mv CNAME ./dist/
git rm -rf .
mv dist/* . && rmdir dist/ 
git add index.html CNAME assets/
git commit -m "deploy" --no-verify
git push
git checkout main