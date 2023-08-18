#!/bin/sh

# remove preexisting archives
find ./static/files -name '*.tar.gz' -exec rm {} \;
find ./static/files -name '*.tar.bz2' -exec rm {} \;

for relative_path in $(find ./static/files -name '.archive' -print); do
    relative_path=$(dirname $relative_path)
    base=$(basename $relative_path)
    cd $relative_path/..

    all_files=$(find $base/** ! -name '.archive' -print)
    tar cvaf $base.tar.gz $all_files
    tar cvaf $base.tar.bz2 $all_files

    cd -
done;