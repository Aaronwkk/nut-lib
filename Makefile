# .PHONY: dist test
# default: help

# build all theme
build-theme:
	npm run build:theme

install:
	npm install

install-cn:
	npm install --registry=http://registry.npm.taobao.org

dev:
	npm run dev

build:
	npm run build

docs:
	vuepress dev docs

docs-build:
	npm run docs:build