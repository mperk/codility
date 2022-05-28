#  frog_river_one c# solution

**Solution**
```
    //frog_river_one(5, new int[] { 1, 3, 1, 4, 2, 3, 5, 4 })
    static int frog_river_one(int X, int[] A)
    {
        var temp = new HashSet<int>();
        for (int i = 0; i < A.Length; i++)
        {
            if (!temp.Contains(A[i]))
            {
                temp.Add(A[i]);
                if(temp.Count == X) { return i; }
            }
        }
        return -1;
    }
```