# Toeggeli-Web
Töggeli Angular App

### Cool Libraries I use
- https://github.com/angular/material2
- https://github.com/ng-bootstrap/ng-bootstrap
- https://github.com/jiayihu/ng-animate
- https://github.com/ngx-material-keyboard/core


## Github Page
### Install
```
npm install -g angular-cli-ghpages
```
### Deploy
```
ng build --prod --base-href "https://phong6698.github.io/Toeggeli-Web/"
```
```
ngh
```


## Some stuff
### npm ERR! Please try running this command again as root/Administrator.
```
npm install <something> --no-optional
```

### ERROR in Error: Error encountered resolving symbol values statically. 
```
import {bounceInDown, bounceOutUp} from 'ng-animate/lib';
```
to
```
import {bounceInDown, bounceOutUp} from 'ng-animate';
```