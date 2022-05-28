#  odd_occurrences_in_array c# solution

**Solution**
```
    //OddOccurrencesInArray(new List<int> { 9, 3, 9, 3, 9, 7, 9 }.ToArray())
    static int OddOccurrencesInArray(int[] A)
    {
        var odd = A.GroupBy(x => x).First(x => x.Count() % 2 == 1).Key;
        return odd;
    }
```