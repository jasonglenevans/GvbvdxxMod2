git init
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch node_modules" HEAD
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .git" HEAD
git add .
git commit -m "Upload From Git Commands"
git branch -M main
git remote add origin https://github.com/jasonglenevans/GvbvdxxMod2.git
git push -f origin main
cd scratch-gui/build
git init
git add .
git commit -m "Upload From Git Commands"
git branch -M website
git remote add origin https://github.com/jasonglenevans/GvbvdxxMod2.git
git push -f origin website