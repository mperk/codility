#  count_factors c# solution

**Solution**
```
    //count_factors(25)
    static int count_factors(int N)
    {
        var result = 0;
        for (int i = 1; i < Math.Sqrt(N); i++)
        {
            if (N % i == 0)
                result+=2;
        }

        // check exact square
        if (Math.Sqrt(N) % 1 == 0)
            result++;

        return result;
    }
```