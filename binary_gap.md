#  binary_gap c# solution

**Solution**
```
    //binary_gap(1041)
    static int binary_gap(int[] A)
    {
        int result = 0;

        result = Convert.ToString(N, 2)
            .Trim('0')
            .Split(new[] { '1' })
            .Max(x => x.Length);

        return result;
    }
```