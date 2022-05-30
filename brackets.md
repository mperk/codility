#  brackets c# solution

**Solution**
```
    // Console.WriteLine(brackets("{[()()]}"));
    // Console.WriteLine(brackets("{([)()]"));
    static int brackets(String S)
    {
        Dictionary<string, string> pairs = new Dictionary<string, string>();
        pairs.Add("{", "}");
        pairs.Add("[", "]");
        pairs.Add("(", ")");
        List<string> set = new List<string>();
        for (int i = 0; i < S.Length; i++)
        {
            if (S[i].ToString() == "{" || S[i].ToString() == "[" || S[i].ToString() == "(")
                set.Add(S[i].ToString());
            else
            {
                if (set.Count == 0) return 0;
                string last = set.LastOrDefault();
                if (S[i].ToString() != pairs[last])
                    return 0;
                set.RemoveAt(set.Count - 1);
            }
        }
        if(set.Count > 0) return 0;
        else return 1;
    }
```