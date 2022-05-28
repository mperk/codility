#  perm_check c# solution

**Solution**
```
    //perm_check(new int[] { 4, 1 })
    public static int perm_check(int[] A)
    {
        if(A.Length == 0) return 0;
        if (A.Length == 1 && A[0] != 1) return 0;
        else if (A.Length == 1 && A[0] == 1) return 1;

        var l = A.ToList();
        l.Sort();
        if (l[0] != 1) return 0;
        for (int i = 0; i < l.Count - 1; i++)
        {
            if (l[i + 1] - l[i] != 1) return 0;
        }

        return 1;
    }
```