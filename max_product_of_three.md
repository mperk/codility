#  max_product_of_three c# solution

**Solution**
```
    //max_product_of_three(new int[] { -3, 1, 2, -2, 5, 6 })
    static int max_product_of_three(int[] A)
    {
        int count = A.Length;
        if (count == 3) return A.Aggregate((x, y) => x * y);
        var l = A.ToList();
        l.Sort();
        int max1 = l[count - 3] * l[count - 2] * l[count - 1];
        int max2 = l[0] * l[1] * l[count - 1];
        if (max1 > max2) return max1;
        else return max2;
    }
```