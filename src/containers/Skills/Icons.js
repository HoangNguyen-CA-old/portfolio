import reduxIcon from '@iconify/icons-logos/redux';
import reactIcon from '@iconify/icons-logos/react';
import htmlIcon from '@iconify/icons-logos/html-5';
import cssIcon from '@iconify/icons-logos/css-3';
import jsIcon from '@iconify/icons-logos/javascript';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';

import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import expressIcon from '@iconify/icons-logos/express';

import mongodbICon from '@iconify/icons-logos/mongodb';

import gitIcon from '@iconify/icons-logos/git-icon';
import herokuIcon from '@iconify/icons-logos/heroku-icon';
import netlifyIcon from '@iconify/icons-logos/netlify';

export const frontendIcons = [
  { icon: htmlIcon, label: 'HTML' },
  { icon: cssIcon, label: 'CSS' },
  { icon: jsIcon, label: 'Javascript' },
  { icon: reactIcon, label: 'React' },
  { icon: reduxIcon, label: 'Redux' },
  { icon: bootstrapIcon, label: 'Bootstrap' },
];

export const backendIcons = [
  { icon: nodejsIcon, label: 'NodeJs' },
  { icon: expressIcon, label: 'Express' },
];

export const databaseIcons = [{ icon: mongodbICon, label: 'MongoDB' }];

export const toolIcons = [
  { icon: gitIcon, label: 'Git' },
  { icon: herokuIcon, label: 'Heroku' },
  { icon: netlifyIcon, label: 'Netlify' },
];