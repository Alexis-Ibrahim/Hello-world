# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Angular Overview

ci-dessous la liste des fichiers que l'on retrouve dans un projet angular
le premier dossier e2e : pour les tests end to end, tests automatisé qui simulent un vrai user

En dessous node modules : toutes les les librairies tiers
on ne doit pas le déployer dans le serveur

app : les modules et les composants

assets : les icones, les images, etc

environnment : fichier de configuration, dev production etc

---

quelle est la difference entre angularJS et angular ?

angularJS premiere version : tres complexe

angular2 : nouvelle version avec du TS, totalement different de angularJS
angular est maintenant plus clean

Pour creer un nouveau composant utiliser la commande ng g c NomDuComposant

Les directives permettent l'insertion du code ts dans le template html
