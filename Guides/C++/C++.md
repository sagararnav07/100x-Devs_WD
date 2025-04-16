# C++ Methods Reference

## String Methods (std::string)
### `string::append(str)`

Appends a string to the end of the current string.

```cpp
using namespace std;
string str1 = "hello";
string str2 = " world";
str1.append(str2);
cout << str1;
// Output: hello world
```

### `string::substr(pos, len)`

Returns a substring starting at position pos with length len.

```cpp
using namespace std;
string str = "hello world";
cout << str.substr(0, 5);
// Output: hello
```

### `string::find(str, pos)`

Finds the first occurrence of a substring starting from position pos.

```cpp
using namespace std;
string str = "hello world";
cout << str.find("world");
// Output: 6
```

### `string::rfind(str, pos)`

Finds the last occurrence of a substring starting from position pos.

```cpp
using namespace std;
string str = "hello world hello";
cout << str.rfind("hello");
// Output: 12
```

### `string::replace(pos, len, str)`

Replaces len characters from position pos with str.

```cpp
using namespace std;
string str = "hello world";
str.replace(6, 5, "C++");
cout << str;
// Output: hello C++
```

### `string::insert(pos, str)`

Inserts a string at the specified position.

```cpp
using namespace std;
string str = "hello";
str.insert(5, " world");
cout << str;
// Output: hello world
```

### `string::erase(pos, len)`

Erases len characters starting at position pos.

```cpp
using namespace std;
string str = "hello world";
str.erase(5, 6);
cout << str;
// Output: hello
```

### `string::clear()`

Clears the contents of the string.

```cpp
using namespace std;
string str = "hello world";
str.clear();
cout << "Length after clear: " << str.length();
// Output: Length after clear: 0
```

### `string::length() / string::size()`

Returns the length of the string.

```cpp
using namespace std;
string str = "hello";
cout << str.length();
// Output: 5
```

### `string::empty()`

Checks if the string is empty.

```cpp
using namespace std;
string str = "";
cout << boolalpha << str.empty();
// Output: true
```

### `string::compare(str)`

Compares two strings.

```cpp
using namespace std;
string str1 = "apple";
string str2 = "banana";
cout << str1.compare(str2);
// Output: -1 (str1 is lexicographically smaller than str2)
```

### `string::push_back(c)`

Appends a character to the end of the string.

```cpp
using namespace std;
string str = "hello";
str.push_back('!');
cout << str;
// Output: hello!
```

### `string::pop_back()`

Removes the last character from the string.

```cpp
using namespace std;
string str = "hello!";
str.pop_back();
cout << str;
// Output: hello
```

### `string::at(pos)`

Returns the character at the specified position.

```cpp
using namespace std;
string str = "hello";
cout << str.at(1);
// Output: e
```

### `string::front()`

Returns the first character of the string.

```cpp
using namespace std;
string str = "hello";
cout << str.front();
// Output: h
```

### `string::back()`

Returns the last character of the string.

```cpp
using namespace std;
string str = "hello";
cout << str.back();
// Output: o
```

## Vector Methods (std::vector)
### `vector::push_back(value)`

Adds an element to the end of the vector.

```cpp
using namespace std;
vector<int> v;
v.push_back(10);
v.push_back(20);
cout << v[0] << " " << v[1];
// Output: 10 20
```

### `vector::pop_back()`

Removes the last element from the vector.

```cpp
using namespace std;
vector<int> v = {10, 20, 30};
v.pop_back();
cout << v.size();
// Output: 2
```

### `vector::size()`

Returns the number of elements in the vector.

```cpp
using namespace std;
vector<int> v = {10, 20, 30};
cout << v.size();
// Output: 3
```

### `vector::empty()`

Checks if the vector is empty.

```cpp
using namespace std;
vector<int> v;
cout << boolalpha << v.empty();
// Output: true
```

### `vector::clear()`

Removes all elements from the vector.

```cpp
using namespace std;
vector<int> v = {10, 20, 30};
v.clear();
cout << v.size();
// Output: 0
```

### `vector::insert(position, value)`

Inserts an element at the specified position.

```cpp
using namespace std;
vector<int> v = {10, 30};
auto it = v.begin() + 1;
v.insert(it, 20);
for (int i : v) cout << i << " ";
// Output: 10 20 30
```

### `vector::erase(position)`

Removes an element at the specified position.

```cpp
using namespace std;
vector<int> v = {10, 20, 30};
v.erase(v.begin() + 1);
for (int i : v) cout << i << " ";
// Output: 10 30
```

### `vector::front()`

Returns a reference to the first element.

```cpp
using namespace std;
vector<int> v = {10, 20, 30};
cout << v.front();
// Output: 10
```

### `vector::back()`

Returns a reference to the last element.

```cpp
using namespace std;
vector<int> v = {10, 20, 30};
cout << v.back();
// Output: 30
```

### `vector::reserve(size)`

Reserves memory for a specified number of elements.

```cpp
using namespace std;
vector<int> v;
v.reserve(10);
cout << v.capacity();
// Output: 10 (or greater)
```

### `vector::resize(size, value)`

Resizes the vector to contain the specified number of elements.

```cpp
using namespace std;
vector<int> v = {1, 2, 3};
v.resize(5, 0);
for (int i : v) cout << i << " ";
// Output: 1 2 3 0 0
```

## Algorithm Functions (std::algorithm)
### `std::sort(first, last)`

Sorts elements in a range.

```cpp
using namespace std;
vector<int> v = {3, 1, 4, 2};
sort(v.begin(), v.end());
for (int i : v) cout << i << " ";
// Output: 1 2 3 4
```

### `std::find(first, last, value)`

Finds an element in a range.

```cpp
using namespace std;
vector<int> v = {10, 20, 30, 40};
auto it = find(v.begin(), v.end(), 30);
if (it != v.end()) cout << "Found at position: " << (it - v.begin());
// Output: Found at position: 2
```

### `std::binary_search(first, last, value)`

Checks if a value exists in a sorted range.

```cpp
using namespace std;
vector<int> v = {10, 20, 30, 40};
bool found = binary_search(v.begin(), v.end(), 20);
cout << boolalpha << found;
// Output: true
```

### `std::count(first, last, value)`

Counts occurrences of a value in a range.

```cpp
using namespace std;
vector<int> v = {1, 2, 2, 3, 2, 4};
int c = count(v.begin(), v.end(), 2);
cout << c;
// Output: 3
```

### `std::min_element(first, last)`

Finds the minimum element in a range.

```cpp
using namespace std;
vector<int> v = {3, 1, 4, 2};
auto it = min_element(v.begin(), v.end());
cout << *it;
// Output: 1
```

### `std::max_element(first, last)`

Finds the maximum element in a range.

```cpp
using namespace std;
vector<int> v = {3, 1, 4, 2};
auto it = max_element(v.begin(), v.end());
cout << *it;
// Output: 4
```

### `std::reverse(first, last)`

Reverses elements in a range.

```cpp
using namespace std;
vector<int> v = {1, 2, 3, 4};
reverse(v.begin(), v.end());
for (int i : v) cout << i << " ";
// Output: 4 3 2 1
```

### `std::accumulate(first, last, init)`

Computes the sum of a range of elements.

```cpp
using namespace std;
vector<int> v = {1, 2, 3, 4};
int sum = accumulate(v.begin(), v.end(), 0);
cout << sum;
// Output: 10
```

### `std::transform(first1, last1, first2, result, op)`

Applies a function to a range and stores the result in another range.

```cpp
using namespace std;
vector<int> v = {1, 2, 3, 4};
vector<int> result(v.size());
transform(v.begin(), v.end(), result.begin(), [](int x) { return x * x; });
for (int i : result) cout << i << " ";
// Output: 1 4 9 16
```

### `std::for_each(first, last, f)`

Applies a function to each element in a range.

```cpp
using namespace std;
vector<int> v = {1, 2, 3, 4};
for_each(v.begin(), v.end(), [](int& x) { x *= 2; });
for (int i : v) cout << i << " ";
// Output: 2 4 6 8
```

### `std::remove(first, last, value)`

Removes all occurrences of a value.

```cpp
using namespace std;
vector<int> v = {1, 2, 3, 2, 4};
auto new_end = remove(v.begin(), v.end(), 2);
v.erase(new_end, v.end());
for (int i : v) cout << i << " ";
// Output: 1 3 4
```

## Map Methods (std::map)
### `map::insert({key, value})`

Inserts an element into the map.

```cpp
using namespace std;
map<string, int> m;
m.insert({"apple", 5});
m.insert({"banana", 8});
cout << m["apple"];
// Output: 5
```

### `map::erase(key)`

Removes an element with the specified key.

```cpp
using namespace std;
map<string, int> m = {{"apple", 5}, {"banana", 8}};
m.erase("apple");
cout << m.size();
// Output: 1
```

### `map::find(key)`

Searches for an element with the specified key.

```cpp
using namespace std;
map<string, int> m = {{"apple", 5}, {"banana", 8}};
auto it = m.find("apple");
if (it != m.end()) cout << "Found: " << it->second;
// Output: Found: 5
```

### `map::count(key)`

Counts elements with the specified key.

```cpp
using namespace std;
map<string, int> m = {{"apple", 5}, {"banana", 8}};
cout << m.count("apple");
// Output: 1
```

### `map::size()`

Returns the number of elements in the map.

```cpp
using namespace std;
map<string, int> m = {{"apple", 5}, {"banana", 8}};
cout << m.size();
// Output: 2
```

### `map::empty()`

Checks if the map is empty.

```cpp
using namespace std;
map<string, int> m;
cout << boolalpha << m.empty();
// Output: true
```

### `map::clear()`

Removes all elements from the map.

```cpp
using namespace std;
map<string, int> m = {{"apple", 5}, {"banana", 8}};
m.clear();
cout << m.size();
// Output: 0
```

## Set Methods (std::set)
### `set::insert(value)`

Inserts an element into the set.

```cpp
using namespace std;
set<int> s;
s.insert(10);
s.insert(20);
for (int i : s) cout << i << " ";
// Output: 10 20
```

### `set::erase(value)`

Removes an element with the specified value.

```cpp
using namespace std;
set<int> s = {10, 20, 30};
s.erase(20);
for (int i : s) cout << i << " ";
// Output: 10 30
```

### `set::find(value)`

Searches for an element with the specified value.

```cpp
using namespace std;
set<int> s = {10, 20, 30};
auto it = s.find(20);
if (it != s.end()) cout << "Found: " << *it;
// Output: Found: 20
```

### `set::count(value)`

Counts elements with the specified value.

```cpp
using namespace std;
set<int> s = {10, 20, 30};
cout << s.count(20);
// Output: 1
```

### `set::size()`

Returns the number of elements in the set.

```cpp
using namespace std;
set<int> s = {10, 20, 30};
cout << s.size();
// Output: 3
```

## I/O Streams
### `iostream::getline(stream, str)`

Reads a line from the input stream.

```cpp
using namespace std;
string line;
// Example of reading a line from user input:
// getline(cin, line);
// For demonstration:
stringstream ss("Hello world");
getline(ss, line);
cout << line;
// Output: Hello world
```

### `cin >> variable`

Reads data from the standard input stream.

```cpp
using namespace std;
int x;
// Example of reading an integer from user input:
// cin >> x;
// For demonstration:
stringstream ss("42");
ss >> x;
cout << x;
// Output: 42
```

### `cout << value`

Writes data to the standard output stream.

```cpp
using namespace std;
cout << "Hello" << " " << "world" << "!";
// Output: Hello world!
```

### `fixed` & `setprecision()`

Controls floating-point output precision.

```cpp
using namespace std;
double pi = 3.14159265359;
cout << fixed << setprecision(2) << pi;
// Output: 3.14
```

## File Operations
### `fstream::open(filename, mode)`

Opens a file.

```cpp
using namespace std;
ofstream file;
file.open("example.txt", ios::out);
// If file is open, write to it
if (file.is_open()) {
    file << "Hello, file!";
    file.close();
}
```

### `fstream::close()`

Closes a file.

```cpp
using namespace std;
ofstream file("example.txt");
file << "Hello, file!";
file.close();
```

### `ifstream::getline(str)`

Reads a line from a file.

```cpp
using namespace std;
ifstream file("example.txt");
string line;
if (file.is_open()) {
    getline(file, line);
    cout << line;
    file.close();
}
// Output: Content of first line in example.txt
```

## Smart Pointers
### `make_unique<T>(args...)`

Creates a unique_ptr to an object of type T.

```cpp
using namespace std;
auto ptr = make_unique<int>(42);
cout << *ptr;
// Output: 42
```

### `make_shared<T>(args...)`

Creates a shared_ptr to an object of type T.

```cpp
using namespace std;
auto ptr = make_shared<int>(42);
cout << *ptr;
// Output: 42
```

### `shared_ptr::use_count()`

Returns the number of shared_ptr objects referring to the same managed object.

```cpp
using namespace std;
auto ptr1 = make_shared<int>(42);
auto ptr2 = ptr1;
cout << ptr1.use_count();
// Output: 2
```

## Math Functions
### `std::abs(x)`

Returns the absolute value of x.

```cpp
using namespace std;
cout << abs(-5);
// Output: 5
```

### `std::pow(x, y)`

Returns x raised to the power y.

```cpp
using namespace std;
cout << pow(2, 3);
// Output: 8
```

### `std::sqrt(x)`

Returns the square root of x.

```cpp
using namespace std;
cout << sqrt(16);
// Output: 4
```

### `std::min(a, b)`

Returns the smaller of a and b.

```cpp
using namespace std;
cout << min(10, 5);
// Output: 5
```

### `std::max(a, b)`

Returns the larger of a and b.

```cpp
using namespace std;
cout << max(10, 5);
// Output: 10
```

### `std::floor(x)`

Returns the largest integer not greater than x.

```cpp
using namespace std;
cout << floor(3.7);
// Output: 3
```

### `std::ceil(x)`

Returns the smallest integer not less than x.

```cpp
using namespace std;
cout << ceil(3.7);
// Output: 4
```

### `std::round(x)`

Returns the value of x rounded to the nearest integer.

```cpp
using namespace std;
cout << round(3.7);
// Output: 4
```

## Random Number Generation
### `std::random_device`

Generates a non-deterministic random number.

```cpp
using namespace std;
random_device rd;
cout << rd();
// Output: A random unsigned integer
```

### `std::mt19937`

Mersenne Twister pseudo-random generator.

```cpp
using namespace std;
random_device rd;
mt19937 gen(rd());
cout << gen();
// Output: A random unsigned integer
```

### `std::uniform_int_distribution`

Produces random integers uniformly distributed on a range.

```cpp
using namespace std;
random_device rd;
mt19937 gen(rd());
uniform_int_distribution<int> dist(1, 6); // dice
cout << dist(gen);
// Output: A random integer between 1 and 6
```

### `std::uniform_real_distribution`

Produces random floating-point values uniformly distributed on a range.

```cpp
using namespace std;
random_device rd;
mt19937 gen(rd());
uniform_real_distribution<double> dist(0.0, 1.0);
cout << fixed << setprecision(2) << dist(gen);
// Output: A random number between 0.0 and 1.0
```

## Chrono Library (Time)
### `chrono::system_clock::now()`

Gets the current time point.

```cpp
using namespace std;
auto now = chrono::system_clock::now();
time_t current_time = chrono::system_clock::to_time_t(now);
cout << "Current time: " << ctime(&current_time);
// Output: Current time: Wed Apr 12 15:30:45 2025 (example)
```

### `chrono::duration_cast<Duration>(d)`

Casts a duration to another duration unit.

```cpp
using namespace std;
auto start = chrono::high_resolution_clock::now();
// Some operation
auto end = chrono::high_resolution_clock::now();
auto duration = chrono::duration_cast<chrono::milliseconds>(end - start);
cout << "Time taken: " << duration.count() << " ms";
// Output: Time taken: X ms
```

## Memory Management
### `new` Operator

Dynamically allocates memory.

```cpp
using namespace std;
int* p = new int(42);
cout << *p;
delete p;
// Output: 42
```

### `delete` Operator

Deallocates memory previously allocated by new.

```cpp
using namespace std;
int* p = new int(42);
delete p;
// Memory is freed
```

### `new[]` Operator

Dynamically allocates an array.

```cpp
using namespace std;
int* arr = new int[3]{1, 2, 3};
cout << arr[0] << arr[1] << arr[2];
delete[] arr;
// Output: 123
```

### `delete[]` Operator

Deallocates an array.

```cpp
using namespace std;
int* arr = new int[3]{1, 2, 3};
delete[] arr;
// Array memory is freed
```

## Threading
### `thread`

Creates a new thread of execution.

```cpp
using namespace std;
void func() {
    cout << "Thread running" << endl;
}

thread t(func);
t.join();
// Output: Thread running
```

### `thread::join()`

Waits for the thread to finish execution.

```cpp
using namespace std;
void func() {
    cout << "Thread finished" << endl;
}

thread t(func);
t.join();
// Main thread waits for t to finish
// Output: Thread finished
```

### `mutex`

Provides basic mutual exclusion facility.

```cpp
using namespace std;
mutex mtx;
int counter = 0;

void increment() {
    mtx.lock();
    ++counter;
    mtx.unlock();
}

// Usage in threads:
// thread t1(increment);
// thread t2(increment);
// t1.join();
// t2.join();
```

### `lock_guard`

Provides RAII-style mechanism for owning a mutex.

```cpp
using namespace std;
mutex mtx;
int counter = 0;

void increment() {
    lock_guard<mutex> lock(mtx);
    ++counter;
}

// Usage in threads:
// thread t1(increment);
// thread t2(increment);
// t1.join();
// t2.join();
```

## Lambda Expressions
### Basic Lambda

Creates an anonymous function object.

```cpp
using namespace std;
auto add = [](int a, int b) { return a + b; };
cout << add(5, 3);
// Output: 8
```

### Lambda with Capture

Captures variables from enclosing scope.

```cpp
using namespace std;
int x = 10;
auto add_x = [x](int a) { return a + x; };
cout << add_x(5);
// Output: 15
```

## Regular Expressions
### `regex_match(str, regex)`

Checks if the entire string matches the regex.

```cpp
using namespace std;
bool is_match = regex_match("test", regex("t.*t"));
cout << boolalpha << is_match;
// Output: true
```

### `regex_search(str, regex)`

Searches for a match of the regex in the string.

```cpp
using namespace std;
bool contains_match = regex_search("testing", regex("test"));
cout << boolalpha << contains_match;
// Output: true
```

### `regex_replace(str, regex, fmt)`

Replaces matches of the regex in the string.

```cpp
using namespace std;
string result = regex_replace("Hello world", regex("world"), "C++");
cout << result;
// Output: Hello C++
```

## Tuple Operations
### `make_tuple`

Creates a tuple object.

```cpp
using namespace std;
auto t = make_tuple(1, "hello", 3.14);
cout << get<1>(t);
// Output: hello
```

### `tuple_size`

Gets the size of a tuple.

```cpp
using namespace std;
auto t = make_tuple(1, "hello", 3.14);
cout << tuple_size<decltype(t)>::value;
// Output: 3
```

### `get<N>(tuple)`

Gets the Nth element of the tuple.

```cpp
using namespace std;
auto t = make_tuple(1, "hello", 3.14);
cout << get<0>(t);
// Output: 1
```

## Utility Functions
### `std::swap(a, b)`

Swaps the values of a and b.

```cpp
using namespace std;
int a = 5, b = 10;
swap(a, b);
cout << a << " " << b;
// Output: 10 5
```

### `std::move(obj)`

Indicates that an object may be moved from.

```cpp
using namespace std;
string str1 = "hello";
string str2 = move(str1);
cout << "str2: " << str2 << ", str1 length: " << str1.length();
// Output: str2: hello, str1 length: 0
```

### `std::pair<T1, T2>`

A template class to hold a pair of values.

```cpp
using namespace std;
pair<string, int> p = make_pair("apple", 5);
cout << p.first << ": " << p.second;
// Output: apple: 5
```

### `std::tie(variables...)`

Creates a tuple of references to unpack returned tuples.

```cpp
using namespace std;
int a, b;
tie(a, b) = make_pair(10, 20);
cout << a << " " << b;
// Output: 10 20
```

### `std::optional<T>` (C++17)

A wrapper for optional values.

```cpp
using namespace std;
optional<int> getNumber(bool has_value) {
    if (has_value) return 42;
    return nullopt;
}

auto result = getNumber(true);
if (result.has_value()) {
    cout << "Value: " << *result;
}
// Output: Value: 42
```

### `std::variant<Types...>` (C++17)

Type-safe union container.

```cpp
using namespace std;
variant<int, string, double> v = "hello";
cout << get<string>(v);
// Output: hello
```

### `std::any` (C++17)

A type-safe container for single values of any copyable type.

```cpp
using namespace std;
any a = 5;
cout << any_cast<int>(a);
// Output: 5
```