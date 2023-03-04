#include <algorithm>
#include <cassert>
#include <vector>

using matrix = std::vector<std::vector<int>>;

template <typename T>
class diagonal {
    using matrix_t = std::vector<std::vector<T>>;

    matrix_t& matrix;
    std::size_t x;
    std::size_t y;

    class diagonal_iter {
        // we need to keep reference to the matrix itself
        std::reference_wrapper<matrix_t> m;

        // we need to be able to tell our current position
        std::size_t x;
        std::size_t y;

    public:
        using difference_type = std::ptrdiff_t;
        using value_type = T;
        using pointer = T*;
        using reference = T&;
        using iterator_category = std::random_access_iterator_tag;

        diagonal_iter(matrix_t& matrix,
            std::size_t x,
            std::size_t y)
            : m(matrix)
            , x(x)
            , y(y)
        {
        }

        bool operator==(const diagonal_iter& rhs) const
        {
            return x == rhs.x && y == rhs.y && m.get() == rhs.m.get();
        }

        diagonal_iter& operator++()
        {
            // we are moving along the diagonal, so we increment both ‹x› and ‹y›
            // at the same time
            x++;
            y++;
            return *this;
        }

        reference operator*() const { return m.get()[y][x]; }

        // exactly opposite to the incrementation
        diagonal_iter operator--()
        {
            x--;
            y--;
            return *this;
        }

        // moving ‹n› steps back is same as calling decrementation ‹n›-times, so
        // we can just return a new iterator and subtract ‹n› from both
        // coordinates in the matrix
        diagonal_iter operator-(difference_type n) const
        {
            return diagonal_iter { m, x - n, y - n };
        }

        // here we assume that we are given two iterators on the same diagonal
        difference_type operator-(const diagonal_iter& rhs) const
        {
            assert(m.get() == rhs.m.get());
            return x - rhs.x;
        }

        // counterpart of moving ‹n› steps backwards
        diagonal_iter operator+(difference_type n) const
        {
            return diagonal_iter { m, x + n, y + n };
        }

        // we compare the coordinates, and also assume that those 2 iterators are
        // lying on the same diagonal
        bool operator<(const diagonal_iter& rhs) const
        {
            assert(m.get() == rhs.m.get());
            return x < rhs.x && y < rhs.y;
        }
    };

public:
    diagonal(matrix_t& matrix, std::size_t x, std::size_t y)
        : matrix(matrix)
        , x(x)
        , y(y)
    {
    }

    diagonal_iter begin() const { return diagonal_iter { matrix, x, y }; }

    diagonal_iter end() const
    {
        auto max_x = matrix[y].size();
        auto max_y = matrix.size();

        // we need to find the distance in which we get out of bounds (either in
        // column or row)
        auto steps = std::min(max_x - x, max_y - y);

        return diagonal_iter { matrix, x + steps, y + steps };
    }
};

template <typename T>
class diagonals {
    using matrix_t = std::vector<std::vector<T>>;

    class diagonals_iter {
        matrix_t& m;
        std::size_t x;
        std::size_t y;

    public:
        diagonals_iter(matrix_t& matrix, std::size_t x, std::size_t y)
            : m(matrix)
            , x(x)
            , y(y)
        {
        }

        bool operator!=(const diagonals_iter& rhs) const
        {
            // iterators are not equal if they reference different matrices, or
            // their positions differ
            return x != rhs.x || y != rhs.y || m != rhs.m;
        }

        diagonals_iter& operator++()
        {
            if (y != 0) {
                // iterating through diagonals down the first column
                y++;
                return *this;
            }

            // iterating the diagonals along the first row
            x++;
            if (x == m.front().size()) {
                // switching to diagonals in the first column
                x = 0;
                y++;
            }

            return *this;
        }

        diagonal<T> operator*() const { return diagonal { m, x, y }; }
    };

    matrix_t& _matrix;

public:
    diagonals(matrix_t& m)
        : _matrix(m)
    {
    }
    diagonals_iter begin() { return diagonals_iter { _matrix, 0, 0 }; }
    diagonals_iter end() { return diagonals_iter { _matrix, 0, _matrix.size() }; }
};

class Solution {
public:
    matrix diagonalSort(matrix mat)
    {
        // we iterate over the diagonals
        for (auto d : diagonals(mat)) {
            // and we sort each diagonal
            std::sort(d.begin(), d.end());
        }

        // we take the matrix by copy, so we can sort in-situ and return the copy
        // that we sorted
        return mat;
    }
};

static void test_case_1()
{
    // Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
    // Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

    Solution s;
    assert((s.diagonalSort(std::vector { std::vector { 3, 3, 1, 1 },
                std::vector { 2, 2, 1, 2 },
                std::vector { 1, 1, 1, 2 } })
        == std::vector { std::vector { 1, 1, 1, 1 },
            std::vector { 1, 2, 2, 2 },
            std::vector { 1, 2, 3, 3 } }));
}

static void test_case_2()
{
    // Input: mat =
    // [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
    // Output:
    // [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]

    Solution s;
    assert((s.diagonalSort(std::vector { std::vector { 11, 25, 66, 1, 69, 7 },
                std::vector { 23, 55, 17, 45, 15, 52 },
                std::vector { 75, 31, 36, 44, 58, 8 },
                std::vector { 22, 27, 33, 25, 68, 4 },
                std::vector { 84, 28, 14, 11, 5, 50 } })
        == std::vector { std::vector { 5, 17, 4, 1, 52, 7 },
            std::vector { 11, 11, 25, 45, 8, 69 },
            std::vector { 14, 23, 25, 44, 58, 15 },
            std::vector { 22, 27, 31, 36, 50, 66 },
            std::vector { 84, 28, 75, 33, 55, 68 } }));
}

int main()
{
    test_case_1();
    test_case_2();

    return 0;
}