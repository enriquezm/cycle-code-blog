#!/usr/bin/env bash

i=0
exiftool -sort -DateTimeOriginal -ext jpg -ext jpeg -printFormat '$FileName' . |
while IFS= read -r f; do
  new="IMG_${i}.${f##*.}"
  mv -n -- "$f" "$new"
  ((i++))
done
