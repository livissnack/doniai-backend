#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

ssh root@47.112.219.2 rm -rf /var/www/backend.doniai.com
# cd 到构建输出的目录下 
scp -r dist root@47.112.219.2:/var/www/backend.doniai.com