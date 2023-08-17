PART 1
Most important NPM package is a bundler for a production ready app
Common Bundlers-Wheat , Web pack ,Parcel
Their are two type of dependencies that we can install one is dev dependency and normal dependency
Dev Dependency-This are the dependencies when we develop a app {-D}
Normal Dependency-The dependencies that are used in production
Careit and Tilda [careit-upgrades the minor upgrades in packages dependencies ,Tilda-Upgrades minors and also major version of dependencies ] note:It is advisable to use careit because major upgrades can break the app
Package.json & Packagelock.json [PackageLock.json -Tracks the exact version of packages and keeps the record of exact version]
NodeModules-It contains all the code that we install from npm and also their transitive dependencies .
Every module has their own package.json means their dependencies

PART 2
npx parcel index.html - npx means executing a package that is installed from npm
CDN links are not a good way to bring react or react dom into our project -Because we have to depend on externa network and if the react upgrades we have to keep changing the links for latest versions.

#Parcel
-Dev build
-,Local server,
-HMR-Hot module replacement ,
-File watching algorith-Written in C++
-Faster Builds-Caching
-Image optimization
-Minification of file in production build
-Bundling
-Compression of files
-consistent Hashing- be curious
-code Splitting
-Differential Bundling-When your app will be hosted ,it will give differential bundling to support in older browsers
-Diagnostic
-Good error Handling
-It also gives you a way to host on https
-Tree Shaking algorithm -Remove unused codes
-Different dev and production bundle

remove main:app.js from package.json or itwill conflict in production

Dont push the files in git hub that can be regenarated
