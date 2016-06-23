/**
 * Created by jmlegrand on 01/06/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import WineApp from './component/WineApp';


const wines = [
  {
    key:0,
    region: 'Bordeaux',
    name: 'Château Ausone',
    status: 'coming',
    price: 'NA',
    rating: 19,
    appelation: 'Saint-Emilion',
    superficie: 7,
    assemblage: [{merlot: 50}, {cabernetfranc: 50}],
    description: 'Avec son nez un peu poudré, sur la minéralité, le camphre et l’encens, la couleur est annoncée.'
  },
  {
    key:1,
    region: 'Bordeaux',
    name: 'Château Figeac',
    status: 'coming',
    price: 'NA',
    rating: 18.5,
    appelation: 'Saint-Emilion',
    superficie: 54,
    assemblage: [{merlot: 30}, {cabernetfranc: 35}, {cabernetsauvignon: 35}],
    description: 'Le retour en force de Figeac se confirme, avec ce nez de fleur sauvage et de tabac blond, et cette signature mentholée, réglissée.'
  },
  {
    key:2,
    region: 'Bordeaux',
    name: 'Château Canon',
    status: 'out',
    price: 'NA',
    rating: 18,
    appelation: 'Saint-Emilion',
    superficie: 34,
    assemblage: [{merlot: 72}, {cabernetsauvignon: 28}],
    description: 'Dès le premier nez, fumé, aiguisé, capiteux, la magie opère. violette, pivoine, bourgeon de cassis, épices douces, matière très suave, toucher de bouche velouté, soyeux, élégant..'
  },
  {
    key:3,
    region: 'Bordeaux',
    name: 'Château Fleur Cardinale',
    status: 'out',
    price: 'NA',
    rating: 17,
    appelation: 'Saint-Emilion',
    superficie: 23.5,
    assemblage: [{merlot: 75}, {cabernetfranc: 20}, {cabernetsauvignon: 5}],
    description: 'Beaucoup de style dans ce vin sensuel et sûr de lui, séduisant comme une paire de stilettos.'
  },
  {
    key:4,
    region: 'Bordeaux',
    name: 'Château Grand Corbin-Despagne',
    status: 'available',
    price: 22.5,
    rating: 17,
    appelation: 'Saint-Emilion',
    superficie: 29,
    assemblage: [{merlot: 75}, {cabernetfranc: 24}, {cabernetsauvignon: 1}],
    description: 'Un nez agréablement vintage comme une confiture de vieux garçon. Une bouche tendue, ciselée, sans superflu.'
  },

  {
    key:5,
    region: 'Bordeaux',
    name: 'Petrus',
    status: 'coming',
    price: 'NA',
    rating: 19.5,
    appelation: 'Pomerol',
    superficie: 11.5,
    assemblage: [{merlot: 100}],
    description: 'Unique, Petrus nous laisse frôler la perfection du bord du verre'
  },
  {
    key:6,
    region: 'Bordeaux',
    name: 'Château Eglise Clinet',
    status: 'coming',
    price: 'NA',
    rating: 19,
    appelation: 'Pomerol',
    superficie: 4.5,
    assemblage: [{merlot: 90}, {cabernetfranc: 10}],
    description: ''
  },
  {
    key:7,
    region: 'Bordeaux',
    name: 'Château L’Evangile',
    status: 'coming',
    price: 'NA',
    rating: 18.5,
    appelation: 'Pomerol',
    superficie: 19,
    assemblage: [{merlot: 80}, {cabernetfranc: 20}],
    description: 'Un vin immense, incroyable de profondeur dans ses arômes de cerise noire, d’orange sanguine et ses notes fumées et florales, son extraordinaire fluidité de matière, sa soyeuse qualité de tanins'
  },
  {
    key:8,
    region: 'Bordeaux',
    name: 'Château La Violette',
    status: 'out',
    price: 'NA',
    rating: 18,
    appelation: 'Pomerol',
    superficie: 3.5,
    assemblage: [{merlot: 100}],
    description: 'Superbe vin résolument exceptionnel.'
  },
  {
    key:9,
    region: 'Bordeaux',
    name: 'Château La Conseillante',
    status: 'available',
    price: 'NA',
    rating: 17.5,
    appelation: 'Pomerol',
    superficie: 12,
    assemblage: [{merlot: 80}, {cabernetfranc: 20}],
    description: 'Fabuleuse densité d’une matière à la fois profonde et précise.'
  }
];

ReactDOM.render(
  <WineApp wines={wines}/>,
  document.getElementById('main')
);


