#  passing_cars c# solution

**Solution**
```
    //passing_cars(new int[] { 0, 0, 1, 1, 0 })
    static int passing_cars(int[] A)
    {
        int max = 1000000000;
        var eCount = 0;
        var pairsCount = 0;

        for (int i = 0; i < A.Length; i++)
        {
            if (A[i] == 0)
            {
                eCount++;
            }
            else
            {
                pairsCount += eCount;
                if (pairsCount > max) return -1;
            }
        }

        return pairsCount;
    }
```