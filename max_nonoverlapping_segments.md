#  max_nonoverlapping_segments c# solution

**Solution**
```
    //max_nonoverlapping_segments(new int[] { 1, 3, 7, 9, 9 }, new int[] { 5, 6, 8, 9, 10 })
    static int max_nonoverlapping_segments(int[] A, int[] B)
    {
        int nonOverlap = 0;
        int last = -1;
        for (int i = 0; i < A.Length; i++)
        {
            if ((last < 0) || (A[i] > B[last]))
            {
                last = i;
                ++nonOverlap;
            }

        }

        return nonOverlap;
    }
```