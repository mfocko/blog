#!/usr/bin/env python3

from functools import cached_property
from time import monotonic_ns

N_ELEMENTS = 10_000_000
LOOPS = 10


class Strategy:
    def __init__(self, data_structure=set):
        self._table = data_structure()

    @cached_property
    def elements(self):
        raise NotImplementedError("Implement for each strategy")

    @property
    def name(self):
        raise NotImplementedError("Implement for each strategy")

    def run(self):
        print(f"\nBenchmarking:\t\t{self.name}")

        # Extract the elements here, so that the evaluation of them does not
        # slow down the relevant part of benchmark
        elements = self.elements

        # Insertion phase
        start = monotonic_ns()
        for x in elements:
            self._table.add(x)
        after_insertion = monotonic_ns()

        print(f"Insertion phase:\t{(after_insertion - start) / 1000000:.2f}ms")

        # Lookup phase
        start = monotonic_ns()
        for _ in range(LOOPS):
            for x in elements:
                assert x in self._table
        after_lookups = monotonic_ns()

        print(f"Lookup phase:\t\t{(after_lookups - start) / 1000000:.2f}ms")


class AscendingOrderedSequence(Strategy):
    @property
    def name(self):
        return "ordered sequence (ascending)"

    @cached_property
    def elements(self):
        return [x for x in range(N_ELEMENTS)]


class DescendingOrderedSequence(Strategy):
    @property
    def name(self):
        return "ordered sequence (descending)"

    @cached_property
    def elements(self):
        return [x for x in reversed(range(N_ELEMENTS))]


class ProgressiveAttack(Strategy):
    @staticmethod
    def _break(n):
        return n << max(5, n.bit_length())


class ProgressiveAscendingAttack(ProgressiveAttack):
    @property
    def name(self):
        return "progressive sequence that self-heals on resize"

    @cached_property
    def elements(self):
        return [self._break(x) for x in range(N_ELEMENTS)]


class ProgressiveDescendingAttack(ProgressiveAttack):
    @property
    def name(self):
        return "progressive sequence that self-heals in the end"

    @cached_property
    def elements(self):
        return [self._break(x) for x in reversed(range(N_ELEMENTS))]


class HardAttack(Strategy):
    @property
    def name(self):
        return "carefully chosen numbers"

    @cached_property
    def elements(self):
        return [x << 32 for x in range(N_ELEMENTS)]


STRATEGIES = [
    AscendingOrderedSequence,
    DescendingOrderedSequence,
    ProgressiveAscendingAttack,
    ProgressiveDescendingAttack,
    HardAttack,
]


def main():
    for strategy in STRATEGIES:
        strategy().run()


if __name__ == "__main__":
    main()
