#!/bin/bash

# Challenge Link https://www.hackerrank.com/challenges/bash-tutorials---looping-and-skipping/problem

for i in {1..99}
do 
    if [ $((i%2)) -ne 0 ];
    then
        echo $i
    fi
done
