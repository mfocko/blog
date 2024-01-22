using System.Collections;

namespace avl;

class AVL<T>(IComparer<T> comparator) : IEnumerable<T> {
    private Node<T>? _root = null;

    public AVL() : this(Comparer<T>.Default) { }

    public int Count { get; private set; } = 0;
    public IComparer<T> Comparator { get; } = comparator;

    public bool Add(T item) {
        throw new NotImplementedException();
    }

    public bool Remove(T item) {
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
