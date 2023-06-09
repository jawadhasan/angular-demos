# AngularDemos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

[https://ngdemos.awsclouddemos.com/](https://ngdemos.awsclouddemos.com/)


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

## Adding a service to services folder

Run `ng g s services/data` or `ng g s ./quotes/services/quotes` for adding a service.

## Adding a component to a module

Run `ng g c ./quotes/components/quotes-list  --module quotes.module` for adding a component to a module.

## Cloudformation - Create S3 bucket for Website
Run `aws cloudformation create-stack --stack-name ngdemos  --template-body file://demo-s3.yaml`

## Cloud Formation - Delete Static Website
Run `aws cloudformation delete-stack --stack-name ngdemos`

## Cloud Formation - Update Stack
Run `aws cloudformation update-stack --stack-name ngdemos  --template-body file://demo-s3.yaml`


## Build and Deploy
Run `ng build` from web folder...>dist folder.
Run `aws s3 sync . s3://ngdemos.awsclouddemos.com `


### Three levels
Description.
