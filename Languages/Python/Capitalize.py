import math
import os
import random
import re
import sys

'''
Challenge Link: https://www.hackerrank.com/challenges/capitalize/problem
'''


def solve(s):

    chars = list(s)
    first = chars[0]
    firstUpper = first.upper()
    chars[0] = firstUpper
    
    for i in range(len(chars)):
        if chars[i] == ' ':
            second = chars[i+1]
            secondUpper = second.upper()
            chars[i+1] = secondUpper
    
    return ''.join(chars)
    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = solve(s)

    fptr.write(result + '\n')

    fptr.close()
