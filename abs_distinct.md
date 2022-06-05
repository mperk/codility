#  abs_distinct c# solution

**Solution**
```
    //abs_distinct(new int[] { -2147483648, 0 })
    static int abs_distinct(int[] A)
    {
        HashSet<long> stack = new HashSet<long>();
        for (int i = 0; i < A.Length; i++)
        {
            long abs = Math.Abs((long)A[i]);
            if (!stack.Contains(abs))
                stack.Add(abs);
        }
        return stack.Count;
    }
```