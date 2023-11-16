#include <bit>
#include <cassert>
#include <chrono>
#include <cstdint>
#include <functional>
#include <iostream>
#include <ranges>
#include <set>
#include <string>
#include <unordered_set>

using elem_t = std::uint64_t;

const elem_t N_ELEMENTS = 10000000;
#define LOOPS 10

template <typename T> struct strategy {
  virtual std::string name() const = 0;
  virtual T elements() = 0;

  template <typename C> void run(C &&s) {
    using namespace std;

    cout << "\nBenchmarking:\t\t" << name() << '\n';

    auto start = chrono::steady_clock::now();
    for (auto x : elements()) {
      s.insert(x);
    }
    auto after_insertion = chrono::steady_clock::now();

    auto insertion_time =
        chrono::duration_cast<chrono::milliseconds>(after_insertion - start);
    cout << "Insertion phase:\t" << insertion_time << "\n";

    start = chrono::steady_clock::now();
    for (int i = 0; i < LOOPS; ++i) {
      for (auto x : elements()) {
        assert(s.contains(x));
      }
    }
    auto after_lookups = chrono::steady_clock::now();

    auto lookup_time =
        chrono::duration_cast<chrono::milliseconds>(after_lookups - start);
    cout << "Lookup phase:\t\t" << lookup_time << "\n";
  }

  virtual ~strategy() = default;
};

using iota_t =
    decltype(std::views::iota(static_cast<elem_t>(0), static_cast<elem_t>(0)));

struct ascending_ordered_sequence : public strategy<iota_t> {
  std::string name() const override { return "ordered sequence (ascending)"; }
  iota_t elements() override {
    return std::views::iota(static_cast<elem_t>(0), N_ELEMENTS);
  }
};

static elem_t reverse(elem_t x) { return static_cast<elem_t>(N_ELEMENTS) - x; }
using reversed_iota_t =
    decltype(std::views::iota(static_cast<elem_t>(0), static_cast<elem_t>(0)) |
             std::views::transform(reverse));

struct descending_ordered_sequence : public strategy<reversed_iota_t> {
  std::string name() const override { return "ordered sequence (descending)"; }
  reversed_iota_t elements() override {
    return std::views::iota(static_cast<elem_t>(1), N_ELEMENTS + 1) |
           std::views::transform(reverse);
  }
};

static elem_t attack(elem_t x) { return x << (5 + std::bit_width(x)); }
using attacked_iota_t =
    decltype(std::views::iota(static_cast<elem_t>(0), static_cast<elem_t>(0)) |
             std::views::transform(attack));

struct progressive_ascending_attack : public strategy<attacked_iota_t> {
  std::string name() const override {
    return "progressive sequence that self-heals on resize";
  }
  attacked_iota_t elements() override {
    return std::views::iota(static_cast<elem_t>(0), N_ELEMENTS) |
           std::views::transform(attack);
  }
};

using reversed_attacked_iota_t =
    decltype(std::views::iota(static_cast<elem_t>(0), static_cast<elem_t>(0)) |
             std::views::transform(reverse) | std::views::transform(attack));

struct progressive_descending_attack
    : public strategy<reversed_attacked_iota_t> {
  std::string name() const override {
    return "progressive sequence that self-heals in the end";
  }
  reversed_attacked_iota_t elements() override {
    return std::views::iota(static_cast<elem_t>(1), N_ELEMENTS + 1) |
           std::views::transform(reverse) | std::views::transform(attack);
  }
};

static elem_t shift(elem_t x) { return x << 32; }
using shifted_iota_t =
    decltype(std::views::iota(static_cast<elem_t>(0), static_cast<elem_t>(0)) |
             std::views::transform(shift));

struct hard_attack : public strategy<shifted_iota_t> {
  std::string name() const override { return "carefully chosen numbers"; }
  shifted_iota_t elements() override {
    return std::views::iota(static_cast<elem_t>(0), N_ELEMENTS) |
           std::views::transform(shift);
  }
};

template <typename C> void run_all(const std::string &note) {
  std::cout << "\n«" << note << "»\n";

  ascending_ordered_sequence{}.run(C{});
  descending_ordered_sequence{}.run(C{});
  progressive_ascending_attack{}.run(C{});
  progressive_descending_attack{}.run(C{});
  hard_attack{}.run(C{});
}

int main() {
  run_all<std::unordered_set<elem_t>>("hash table");
  run_all<std::set<elem_t>>("red-black tree");

  return 0;
}
