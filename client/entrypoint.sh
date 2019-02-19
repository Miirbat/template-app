#!/bin/bash
set -e

if [ "$1" = 'runserver' ]; then
  exec su-exec mirna yarn run start
fi

exec "$@"
