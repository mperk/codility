#  min_perimeter_rectangle c# solution

**Solution**
```
    //min_perimeter_rectangle(30)
    static int min_perimeter_rectangle(int N)
    {
        int minPerimeter = Int32.MaxValue;
        for (int i = 1; i < Math.Sqrt(N); i++)
        {
            if(N % i == 0)
            {
                int tempPerimeter = 2 * (i + (N / i));
                if (tempPerimeter < minPerimeter) minPerimeter = tempPerimeter;
            }
        }

        var sqrt = Math.Sqrt(N);
        if (sqrt % 1 == 0)
        {
            int sqrtInt = (int)sqrt;
            int tempPerimeter = 2 * (sqrtInt + sqrtInt);
            if (tempPerimeter < minPerimeter) minPerimeter = tempPerimeter;
        }

        return minPerimeter;
    }
```