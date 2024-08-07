import java.util.Arrays;

public class BottomUp {
    public static int longestSlideDown(int[][] pyramid) {
        int[][] slideDowns = new int[pyramid.length][];

        slideDowns[pyramid.length - 1] = Arrays.copyOf(pyramid[pyramid.length - 1],
                pyramid[pyramid.length - 1].length);

        for (int y = pyramid.length - 2; y >= 0; --y) {
            int[] row = Arrays.copyOf(pyramid[y], pyramid[y].length);

            for (int x = 0; x < row.length; ++x) {
                int under = slideDowns[y + 1][x];
                int toRight = x + 1 < slideDowns[y + 1].length
                                ? slideDowns[y + 1][x + 1]
                                : Integer.MIN_VALUE;
                row[x] += Math.max(under, toRight);
            }

            slideDowns[y] = row;
        }

        return slideDowns[0][0];
    }

    public static void main(String[] args) {
        System.out.print("Test #1: ");
        System.out.println(longestSlideDown(new int[][] {
                { 3 },
                { 7, 4 },
                { 2, 4, 6 },
                { 8, 5, 9, 3 }
        }) == 23 ? "passed" : "failed");

        System.out.print("Test #2: ");
        System.out.println(longestSlideDown(new int[][] {
                { 75 },
                { 95, 64 },
                { 17, 47, 82 },
                { 18, 35, 87, 10 },
                { 20, 4, 82, 47, 65 },
                { 19, 1, 23, 75, 3, 34 },
                { 88, 2, 77, 73, 7, 63, 67 },
                { 99, 65, 4, 28, 6, 16, 70, 92 },
                { 41, 41, 26, 56, 83, 40, 80, 70, 33 },
                { 41, 48, 72, 33, 47, 32, 37, 16, 94, 29 },
                { 53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14 },
                { 70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57 },
                { 91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48 },
                { 63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31 },
                { 4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23 },
        }) == 1074 ? "passed" : "failed");
    }
}
