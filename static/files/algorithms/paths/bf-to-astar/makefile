CXX=c++
CXXFLAGS=-std=c++20 -Wall -Wextra -g

all: format
	$(CXX) $(CXXFLAGS) main.cpp -o main

format:
	clang-format -i -style=google *.hpp *.cpp
