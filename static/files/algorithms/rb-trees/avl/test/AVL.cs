namespace AVL.Test;

public class AVL {
    [Fact]
    public void EmptyTree() {
        var t = new AVL<int>();

        Assert.Equal(0, t.Count);

        for (int i = 0; i < 10; ++i) {
            Assert.False(t.Contains(i), $"Empty tree should not contain {i}");
        }

        Assert.True(t.IsCorrect(), "AVL invariants hold for an empty tree");
    }

    [Fact]
    public void OneNode() {
        var t = new AVL<int> {
            123
        };

        Assert.Equal(1, t.Count);
        Assert.True(t.Contains(123), "Tree contains the added element 123");

        Assert.True(t.IsCorrect(), "AVL invariants hold");
    }

    [Fact]
    public void TwoNodes() {
        var t = new AVL<int> {
            1, 2
        };

        Assert.Equal(2, t.Count);
        Assert.True(t.Contains(1), "Tree contains the added element 1");
        Assert.True(t.Contains(2), "Tree contains the added element 2");

        Assert.True(t.IsCorrect(), "AVL invariants hold");
    }

    [Fact]
    public void TwoNodesReversed() {
        var t = new AVL<int> {
            2, 1
        };

        Assert.Equal(2, t.Count);
        Assert.True(t.Contains(1), "Tree contains the added element 1");
        Assert.True(t.Contains(2), "Tree contains the added element 2");

        Assert.True(t.IsCorrect(), "AVL invariants hold");
    }

    [Fact]
    public void ThreeNodes() {
        var t = new AVL<int> {
            1, 2, 3
        };

        Assert.Equal(3, t.Count);
        Assert.True(t.Contains(1), "Tree contains the added element 1");
        Assert.True(t.Contains(2), "Tree contains the added element 2");
        Assert.True(t.Contains(3), "Tree contains the added element 3");

        Assert.True(t.IsCorrect(), "AVL invariants hold");
    }


    [Fact]
    public void BiggerTree() {
        var t = new AVL<int>();

        for (int i = -10; i <= 10; ++i) {
            t.Add(i);
        }

        Assert.Equal(21, t.Count);

        for (int i = -100; i <= 100; ++i) {
            Assert.Equal(-10 <= i && i <= 10, t.Contains(i));
        }

        Assert.True(t.IsCorrect(), "AVL invariants hold");
    }
}
