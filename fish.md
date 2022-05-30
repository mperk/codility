#  fish c# solution

**Solution**
```
    // Console.WriteLine(fish(new int[] { 4, 3, 2, 1, 5 }, new int[] { 0, 1, 0, 0, 0 }));
    static int fish(int[] A, int[] B)
    {
        Stack<int> alives = new Stack<int>();
        for (int i = 0; i < A.Length; i++)
        {
            if (alives.Count == 0)
                alives.Push(i);
            else
            {
                while (alives.Count != 0 && B[i] - B[alives.Peek()] == -1 && A[alives.Peek()] < A[i])
                    alives.Pop();

                if (alives.Count == 0)
                {
                    alives.Push(i);    
                }
                else
                {
                    if (B[i] - B[alives.Peek()] != -1)
                        alives.Push(i);
                }
            }
        }
        return alives.Count;
    }
```