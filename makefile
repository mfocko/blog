OUTPUT_DIR=public

# Development
dev: assets
	URL=http://localhost BASE_URL=/ yarn run start --no-open

# Build the webpage
build-aisa: assets
	URL="https://fi.muni.cz" BASE_URL="~xfocko/kb/" yarn run build --out-dir $(OUTPUT_DIR)

build-poincare: assets
	URL="https://blog.mfocko.xyz" BASE_URL="/" yarn run build --out-dir $(OUTPUT_DIR)

# Upload the built webpage
deploy-aisa: build-aisa
	rsync -avzrlpptv --delete $(OUTPUT_DIR)/ aisa:~/public_html/kb/

deploy-poincare: build-poincare
	rsync -avzrlpptv --delete $(OUTPUT_DIR)/ poincare:~/public_html/blog/

# Build assets that are generated from the git, but not version-controlled
assets: regenerate-dots regenerate-archives

# Regenerates dotfiles that are rendered to SVG
regenerate-dots:
	sh regenerate-dots.sh

# Regenerates archives with static content, e.g. source files
regenerate-archives:
	sh regenerate-archives.sh

# Deploys
deploy: deploy-aisa deploy-poincare

.PHONY: dev deploy-aisa deploy-poincare assets regenerate-dots regenerate-archives
