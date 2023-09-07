#!/bin/sh

FONT="'Cascadia Code PL', 'JetBrains Mono', 'Iosevka', 'Fira Code', 'Hack', monospace"

for pic in $(find ./static/files -name '*.dot' -print); do
    PNG_NAME=".$(echo $pic | cut -d'.' -f2)"

    # light mode
    dot $pic -Tpng -Gfontname="$FONT" -Nfontname="$FONT" -Efontname="$FONT" > ${PNG_NAME}_light.png

    # dark mode
    dot $pic -Tpng -Gfontname="$FONT" -Nfontname="$FONT" -Efontname="$FONT" -Gbgcolor="#1b1b1d" -Gcolor="white" -Gfontcolor="white" -Nfillcolor="none" -Ncolor="white" -Nfontcolor="white" -Efillcolor="none" -Ecolor="white" -Efontcolor="white" > ${PNG_NAME}_dark.png
done;
