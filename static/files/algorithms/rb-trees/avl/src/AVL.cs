using System.Collections;

namespace AVL;

class AVL<T>(IComparer<T> comparator) : IEnumerable<T> {
    private Node<T>? _root = null;

    public AVL() : this(Comparer<T>.Default) { }

    public int Count { get; private set; } = 0;
    public IComparer<T> Comparator { get; } = comparator;

    #region AVLSpecific

    private static (bool Correct, int Depth) Check(Node<T>? node, int depth) {
        if (node == null) {
            return (true, depth);
        }

        var left = Check(node.Left, 1 + depth);
        if (!left.Correct) {
            return (false, left.Depth);
        }

        var right = Check(node.Right, 1 + depth);

        var foundDepth = Math.Max(left.Depth, right.Depth);
        return (right.Correct && Math.Abs(left.Depth - right.Depth) <= 1, foundDepth);
    }

    public bool IsCorrect() => Check(_root, 0).Correct;

    private void InsertRebalance(List<Node<T>> nodes, T item) {
        // TODO
    }

    private void DeleteRebalance(List<Node<T>> nodes, T item) {
        // TODO
    }

    #endregion

    public bool Add(T item) {
        int cmp;

        // insert the node
        var path = new List<Node<T>>();
        var node = _root;
        while (node != null) {
            path.Add(node);
            cmp = Comparator.Compare(node.Value, item);

            if (cmp < 0) {
                node = node.Right;
            } else if (cmp == 0) {
                return false;
            } else {
                node = node.Left;
            }
        }

        var newItem = new Node<T>(item);
        ++Count;

        // adding root
        if (path.Count == 0) {
            _root = newItem;
            return true;
        }

        var lastIdx = path.Count - 1;
        cmp = Comparator.Compare(path[lastIdx].Value, item);

        if (cmp < 0) {
            path[lastIdx].Right = newItem;
        } else {
            path[lastIdx].Left = newItem;
        }

        // rebalance
        InsertRebalance(path, item);
        return true;
    }

    public bool Remove(T item) {
        // delete the node

        // rebalance

        throw new NotImplementedException();
    }

    public void Clear() => _root = null;

    public bool Contains(T item) {
        var node = _root;

        while (node != null) {
            var cmp = Comparator.Compare(node.Value, item);
            if (cmp < 0) {
                node = node.Right;
            } else if (cmp == 0) {
                return true;
            } else {
                node = node.Left;
            }
        }

        return false;
    }

    public void CopyTo(T[] array, int arrayIndex) {
        throw new NotImplementedException();
    }

    public IEnumerator<T> GetEnumerator() {
        throw new NotImplementedException();
    }

    IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
}
