import React from 'react';
import angular from 'angular';
import mountReact from 'angular-mount-react';

const HelloComponent = ({ name, upperCase }) => {
  return (
    <span style={{color: 'red'}}>
      {upperCase(`Hello ${name}`)}
    </span>
  );
};

angular.module('app', [mountReact().name])
  .factory('upperCase', () => {
    return (string) => string.toUpperCase()
  })
  .component('hello', {
    template: `
      <mount-react component="$ctrl.component" props="{name: $ctrl.name}" inject="['upperCase']">
      </mount-react>
    `,
    controller: () => {
      return {
        component: HelloComponent
      };
    },
    bindings: {
      name: '@'
    }
  });
