namespace AVL;

enum NodeType {
    Minus,
    Zero,
    Plus,
}

class Node<T> {
    public T Value { get; init; }

    public Node<T>? Left = null, Right = null;
    public NodeType Type = NodeType.Zero;

    public Node(T value) {
        Value = value;
    }
}
