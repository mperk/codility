#  nesting c# solution

**Solution**
```
    // Console.WriteLine(nesting("(()(())())"));
    static int nesting(string S)
    {
        Stack<string> strings = new Stack<string>();
        Dictionary<string, string> map = new Dictionary<string, string>();
        map.Add("(", ")");
        for (int i = 0; i < S.Length; i++)
        {
            if (S[i].ToString() == "(")
                strings.Push("(");
            else
            {
                if (strings.Count > 0 && strings.Peek() == "(")
                    strings.Pop();
                else
                    return 0;
            }
        }

        if (strings.Count > 0) return 0;
        else return 1;
    }
```