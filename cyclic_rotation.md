#  cyclic_rotation c# solution

**Solution**
```
    //cyclic_rotation(new int[] {  }, 3))
    static int[] cyclic_rotation(int[] A, int K)
    {
        if (A.Count() == 0) return A;
        List<int> aList = new List<int>(A);
        for (int i = 0; i < K; i++)
        {
            int t = aList.Last();
            aList.Insert(0, t);
            aList.RemoveAt(aList.Count - 1);
        }
        return aList.ToArray();
    }
```