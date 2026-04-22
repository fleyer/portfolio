 for f in *.JPG; do
  cwebp -q 50 "$f" -o "${f%.*}.webp" -resize 2160 0
done
