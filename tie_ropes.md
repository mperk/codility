#  tie_ropes c# solution

**Solution**
```
    //tie_ropes(4, new int[] { 1, 2, 3, 4, 1, 1, 3 })
    static int tie_ropes(int K, int[] A)
    {
        long tempSum = 0;
        int result = 0;
        for (int i = 0; i < A.Length; i++)
        {
            tempSum += A[i];
            if (tempSum >= K)
            {
                tempSum = 0;
                result++;
            }
        }
        return result;
    }
```