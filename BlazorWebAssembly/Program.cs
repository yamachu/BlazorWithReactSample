using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using BlazorWithReactSample;
using BlazorWithReactSample.Pages;
using JSComponentGeneration.React;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.RegisterForReact<Counter>();

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
