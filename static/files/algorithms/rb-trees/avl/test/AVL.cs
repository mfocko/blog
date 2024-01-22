namespace avl.test;

public class AVL {
    [Fact]
    public void EmptyTree() {
        var t = new AVL<int>();

        Assert.Equal(0, t.Count);

        for (int i = 0; i < 10; ++i) {
            Assert.False(t.Contains(i));
        }
    }

    [Fact]
    public void OneNode() {
        var t = new AVL<int> {
            123
        };

        Assert.Equal(1, t.Count);
        Assert.True(t.Contains(1));
    }
}
