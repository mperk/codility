#  dominator c# solution

**Solution**
```
    //dominator(new int[] { 3, 4, 3, 2, 3, -1, 3, 3 })
    static int dominator(int[] A)
    {
        Dictionary<int, int> count = new Dictionary<int, int>();

        for (int i = 0; i < A.Length; i++)
        {
            if (count.ContainsKey(A[i]))
                count[A[i]]++;
            else
                count[A[i]] = 1;
        }
        var result = count.Where(x => x.Value > A.Length / 2).FirstOrDefault();
        return result.Key == 0 ? -1 : Array.IndexOf(A, result.Key);
    }
```