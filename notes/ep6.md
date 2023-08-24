Monolith and microservice architecture

Monolith architecture

Microservice architecture
Separation of concerns
single responsibility principle

All the services run on their own different ports They connect through api calls

Part 2
How we can fetch data dynamically from api

Two approaches how api data is fetched from the backend
1.PageLoads-Api(500ms)-Render

2.PageLoads-Render Ui-ApiCall-Rerender the UI with data

In react we always use option 2 and it gives a better aproach

Part 3
UseEffect hook
useEffect(callbackFunction,Array)

If we have to do anything after rendering we need to call useeffect hook

Use effect is always called after rendering at any case

H.W akahay saini cors video

Shimmer UI we load fake page untill the data is loaded.
