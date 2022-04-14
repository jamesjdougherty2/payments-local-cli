#!/bin/bash

command="cd $1 && docker-compose logs -f $2"

osascript -e "tell application \"Terminal\" to do script \"$command\""
