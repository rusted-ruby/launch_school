#!/usr/bin/bash

integer=8

if ! ([ $integer -lt 5 ] || [ $integer -gt 10 ])
then
  echo $integer is between 5 and 10.
fi

integer=12

if [ $integer -lt 5 ] || [ $integer -gt 10 ]
then
  echo $integer is less than 5 or greater than 10.
fi