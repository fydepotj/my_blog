#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件， npm run docs:build
npm run build
rm -rf ../blog_dist/dist/*

# 将build生成的dist目录拷贝至上一层目录中
cp -rf docs/.vuepress/dist ../blog_dist/

# 进入生成的文件夹
cd ../blog_dist/dist

# git初始化，每次初始化不影响推送
git init
git add .
git commit -m 'deploy'

# 部署到 
git push -f git@github.com:fydepotj/fydepotj.github.io.git master