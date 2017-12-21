# Toeggeli-Web
Töggeli Angular App

### Cool Libraries I use
- https://github.com/angular/material2 (Components and stuff)
- https://github.com/ng-bootstrap/ng-bootstrap (Use for layouting)
- https://github.com/jiayihu/ng-animate (Library of animations)
- https://github.com/ngx-material-keyboard/core (On screen keyboard)
- https://github.com/stomp-js/ng2-stompjs (STOMP Support for Angular)
- https://github.com/sockjs/sockjs-client (WebSocket Handling)


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

## Notes
- ~~Bigger buttons~~ (Done)
- Select wheel for result 0-10
- For new game: background teambox football field and players a sitting bank
- Google Icon Font self hosting https://google.github.io/material-design-icons/#icon-font-for-the-web
- Logo jumbotron (Football field)
- ~~Result button in matchbox~~ (Done)
- Random button somewhere else
- Random animation (spinner or like flicker go through names)
- directive/component for Team
- App doesn't works on IE
  - BrowserAnimation is not supported by IE at all [link](https://caniuse.com/#feat=web-animation)
- Chat mit Invitation for game




## Some stuff
### npm ERR! Please try running this command again as root/Administrator.
```
npm install <something> --no-optional
```

### Access outside localhost
```
ng serve --host 0.0.0.0
```
