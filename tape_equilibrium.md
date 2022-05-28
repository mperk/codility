#  tape_equilibrium c# solution

**Solution**
```
    //tape_equilibrium(new int[] { 3, 1, 2, 4, 3 })
    public static int tape_equilibrium(int[] A)
    {
        long first = A[0];
        long second = A.Skip(1).Sum();
        int min = (int)Math.Abs(first - second);
        for (int i = 1; i < A.Length - 1; i++)
        {
            first += A[i];
            second -= A[i];
            var diff = (int)Math.Abs(first - second);
            if (diff < min) min = diff;
        }

        return min;
    }
```