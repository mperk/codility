#  frog_jmp c# solution

**Solution**
```
    //frog_jmp(10, 85, 30)
    public static int frog_jmp(int X, int Y, int D)
    {
        if ((Y - X) % D == 0) return (Y - X) / D;
        else return (Y - X) / D + 1;
    }
```