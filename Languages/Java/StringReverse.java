import java.io.*;
import java.util.*;
import java.lang.*;

// Challenge Link: https://www.hackerrank.com/challenges/java-string-reverse/problem

public class StringReverse {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        String input = sc.next();

        String reverse = new StringBuilder(input).reverse().toString();

        if(input.equals(reverse)) {System.out.println("Yes");}
        else                      {System.out.println("No");}
        
    }
}
