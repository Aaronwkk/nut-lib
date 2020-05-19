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

play:
	npm run dev:play

new:
	node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))

new-lang:
	node build/bin/new-lang.js $(filter-out $@,$(MAKECMDGOALS))

dist: install
	npm run dist

deploy:
	@npm run deploy

pub:
	npm run pub

test:
	npm run test:watch
