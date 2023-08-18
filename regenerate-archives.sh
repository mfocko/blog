#!/bin/sh

# remove preexisting archives
echo "[INFO] Removing pre-existing archives"
find ./static/files -name '*.tar.gz' -exec rm {} \;
find ./static/files -name '*.tar.bz2' -exec rm {} \;

for relative_path in $(find ./static/files -name '.archive' -print); do
    echo;

    relative_path=$(dirname $relative_path)
    base=$(basename $relative_path)
    cd $relative_path/..

    all_files=$(find $base/** ! -name '.archive' -print)

    echo "[INFO] Compressing $base.tar.gz"
    tar caf $base.tar.gz $all_files

    echo "[INFO] Compressing $base.tar.bz2"
    tar caf $base.tar.bz2 $all_files

    cd - &> /dev/null
done;