#  distinct_sort c# solution

**Solution**
```
    //distinct_sort(new int[] { 2, 1, 1, 2, 3, 1 })
    static int distinct_sort(int[] A)
    {
        return A.Distinct().Count();
    }
```