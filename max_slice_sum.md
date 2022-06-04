#  max_slice_sum c# solution

**Solution**
```
    //max_profit(new int[] { 3, 2, -6, 4, 0 })
    static int max_slice_sum(int[] A)
    {
        int max = A[0];
        int previousMax = A[0];
        for (int i = 1; i < A.Length; i++)
        {
            previousMax = Math.Max(A[i], previousMax + A[i]);
            max = Math.Max(previousMax, max);
        }
        return max;
    }
```