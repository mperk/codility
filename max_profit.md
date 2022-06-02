#  max_profit c# solution

**Solution**
```
    //max_profit(new int[] { 23171, 21011, 21123, 21366, 21013, 21367 })
    static int max_profit(int[] A)
    {
        int maxProfit = 0;
        int min = Int32.MaxValue;
        for (int i = 0; i < A.Length; i++)
        {
            min = Math.Min(min, A[i]);
            maxProfit = Math.Max(maxProfit, A[i] - min);
        }
        return maxProfit;
    }
```