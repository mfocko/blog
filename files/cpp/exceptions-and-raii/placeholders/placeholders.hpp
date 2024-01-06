#include <exception>
#include <format>
#include <string>

class _todo : public std::exception {
    std::string cause;

   public:
    _todo() : cause("not yet implemented") {}
    _todo(std::string&& excuse) : cause("not yet implemented: " + excuse) {}
    virtual const char* what() const throw() { return cause.c_str(); }
};

/**
 * @brief Indicates unfinished code.
 */
[[noreturn]] void todo() { throw _todo(); }

/**
 * @brief Indicates unfinished code.
 * @param fmt an object that represents the format string
 * @param args arguments to be formatted
 */
template <class... Args>
[[noreturn]] void todo(std::format_string<Args...> fmt, Args&&... args) {
    throw _todo(std::format(fmt, args...));
}

class _unimplemented : public std::exception {
    std::string cause;

   public:
    _unimplemented() : cause("not implemented") {}
    _unimplemented(std::string&& excuse)
        : cause("not implemented: " + excuse) {}
    virtual const char* what() const throw() { return cause.c_str(); }
};

/**
 * @brief Indicates unimplemented code by throwing with a message of “not implemented”.
 */
[[noreturn]] void unimplemented() { throw _unimplemented(); }

/**
 * @brief Indicates unimplemented code by throwing with a message of “not implemented”.
 * @param fmt an object that represents the format string
 * @param args arguments to be formatted
 */
template <class... Args>
[[noreturn]] void unimplemented(std::format_string<Args...> fmt, Args&&... args) {
    throw _unimplemented(std::format(fmt, args...));
}

class _unreachable : public std::exception {
    std::string cause;

   public:
    _unreachable() : cause("entered unreachable code") {}
    _unreachable(std::string&& excuse)
        : cause("entered unreachable code: " + excuse) {}
    virtual const char* what() const throw() { return cause.c_str(); }
};

/**
 * @brief Indicates unreachable code.
 */
[[noreturn]] void unreachable() { throw _unreachable(); }

/**
 * @brief Indicates unreachable code.
 * @param fmt an object that represents the format string
 * @param args arguments to be formatted
 */
template <class... Args>
[[noreturn]] void unreachable(std::format_string<Args...> fmt, Args&&... args) {
    throw _unreachable(std::format(fmt, args...));
}
