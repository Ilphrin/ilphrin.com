#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Usage: ./new_article.sh FILENAME"
  exit 1
fi
file=_posts/`date +"%Y-%m-%d"`-$1.markdown
touch $file
oni $file
