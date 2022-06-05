#  count_triangles c# solution

**Solution**
```
    //count_triangles(new int[] { 10, 2, 5, 1, 8, 12 })
    static int count_triangles(int[] A)
    {
        int triangles = 0;
        Array.Sort(A);
        for (int i = 0; i < A.Length - 2; i++)
        {
            int k = i + 2;
            for (int j = i +1; j < A.Length - 1; j++)
            {
                while (k < A.Length && A[i] + A[j] > A[k] && A[j] + A[k] > A[i] && A[k] + A[i] > A[j])
                    k++;

                triangles += k - j - 1;
                
            }
        }
        return triangles;
    }
```