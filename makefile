OUTPUT_DIR=public

# Development
dev: assets
	URL=http://localhost BASE_URL=/ yarn run start --no-open

build-poincare: assets
	yarn run build --out-dir $(OUTPUT_DIR)

# Upload the built webpage
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
deploy: deploy-poincare

.PHONY: dev deploy-poincare assets regenerate-dots regenerate-archives
