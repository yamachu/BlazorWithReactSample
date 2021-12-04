.PHONY: init preview watch

init:
	yarn

preview:
	npx vite preview

typecheck: ARG=
typecheck:
	npx tsc --noEmit $(ARG)

typecheck/watch:
	$(MAKE) typecheck ARG=--watch

watch:
	npx vite build --watch
