cd out
rm -Rf .git
git init
touch .nojekyll
git add -A
git commit -m "Deploy"
git remote add origin git@github.com:ManoCurry/manocurry.github.io.git
git push -f origin master
