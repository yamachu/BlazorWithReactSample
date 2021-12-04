.PHONY: init init/React JSComponentGeneration.Build watch/Blazor watch/React

init: JSComponentGeneration.Build init/React

init/React:
	$(MAKE) -C React init

submodules/aspnet-samples:
	git submodule update --init --recursive

JSComponentGeneration.Build: submodules/aspnet-samples
	dotnet build -c Debug   submodules/aspnet-samples/samples/aspnetcore/blazor/JSComponentGeneration/JSComponentGeneration.Build
	dotnet build -c Release submodules/aspnet-samples/samples/aspnetcore/blazor/JSComponentGeneration/JSComponentGeneration.Build

watch/Blazor:
	$(MAKE) -C BlazorWebAssembly watch

watch/React:
	$(MAKE) -C React watch

preview:
	$(MAKE) -C React preview
