namespace avl;

class Node<T> {
    public T Value { get; init; }

    public readonly Node<T>? Parent;
    public readonly Node<T>? Left, Right;

    public Node(T value) {
        Value = value;
    }
}
