CXX=clang++
CXXFLAGS=-std=c++20 -Wall -Wextra -Werror -g -pedantic

test: matrix-sort
	./matrix-sort

matrix-sort: format tidy
	$(CXX) $(CXXFLAGS) matrix-sort.cpp -o matrix-sort

format:
	clang-format -i -style=webkit *.cpp

tidy:
	clang-tidy *.cpp -- $(CXXFLAGS)

.PHONY: matrix-sort format tidy
