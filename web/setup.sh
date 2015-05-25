#!/bin/bash

echo "'use strict'; angular.module('config', []).constant('ENV', { 'apiUrl': '${API_URL}' });" > /usr/share/nginx/html/config.js

/usr/sbin/nginx -g "daemon off;"
