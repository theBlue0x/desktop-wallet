#!/bin/bash

sed -i "s/2022/$PORT/g" conf/nxt-default.properties
cat conf/nxt-default.properties|grep "nxt.apiServerPort"