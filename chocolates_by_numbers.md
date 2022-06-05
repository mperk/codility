#  chocolates_by_numbers c# solution

**Solution**
```
    //chocolates_by_numbers(12, 8)
    static int chocolates_by_numbers(int N, int M)
    {
        return N / gcd_chocolates_by_numbers(N, M);
    }

    //greatest common divisor
    static int gcd_chocolates_by_numbers(int a, int b)
    {
        if (a % b == 0) return b;
        else return gcd_chocolates_by_numbers(b, a % b);
    }
```