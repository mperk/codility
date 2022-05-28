#  perm_missing_elem c# solution

**Solution**
```
    //perm_missing_elem(new int[] { 2, 3, 1, 5})
    public static int perm_missing_elem(int[] A)
    {
        long n = A.Length + 1;
        long sum = (n * (n + 1)) / 2;
        long sumA = A.Sum(v => (long)v);
        int miss = (int) (sum - sumA);
        return miss;
    }
```