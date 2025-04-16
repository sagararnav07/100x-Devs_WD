**C++ Complete Reference: Data Types, Built-in Methods, and STL**

---

## 1. C++ Data Types

### **1.1 Primitive Data Types**
- **Integer Types:** `int`, `short`, `long`, `long long`
- **Floating-Point Types:** `float`, `double`, `long double`
- **Character Type:** `char`
- **Boolean Type:** `bool`
- **Void Type:** `void` (used for functions that return nothing)
- **Wide Character Type:** `wchar_t`

### **1.2 Derived Data Types**
- **Pointers:** `int* ptr;`
- **Arrays:** `int arr[10];`
- **References:** `int &ref = var;`

### **1.3 User-Defined Data Types**
- **Structures:** `struct { int x; float y; };`
- **Classes:** `class MyClass { };`
- **Unions:** `union { int a; char b; };`
- **Enumerations:** `enum Color { RED, GREEN, BLUE };`
- **Typedef and Using:** `typedef unsigned int uint;`

---

## 2. Built-in Functions & Methods

### **2.1 Math Functions (cmath)**
- `sqrt(x)`, `pow(x, y)`, `abs(x)`, `ceil(x)`, `floor(x)`, `sin(x)`, `cos(x)`, `tan(x)`, `log(x)`, `exp(x)`

### **2.2 String Functions (cstring & string)**
- `strlen(s)`, `strcmp(s1, s2)`, `strcpy(dest, src)`, `strcat(dest, src)`, `substr(pos, len)`, `find(substr)`, `append(str)`, `erase(pos, len)`, `replace(pos, len, str)`

### **2.3 Utility Functions (cstdlib)**
- `rand()`, `srand(seed)`, `atoi(str)`, `atof(str)`, `system(command)`

---

## 3. Standard Template Library (STL)

### **3.1 Containers**
#### Sequence Containers:
- `vector<T>`: Dynamic array
- `list<T>`: Doubly linked list
- `deque<T>`: Double-ended queue
- `array<T, N>`: Static array

#### Associative Containers:
- `set<T>`: Ordered unique elements
- `map<K, V>`: Key-value pairs
- `multiset<T>`: Allows duplicates
- `multimap<K, V>`: Key-value pairs allowing duplicate keys

#### Unordered Associative Containers:
- `unordered_set<T>`: Unordered unique elements
- `unordered_map<K, V>`: Unordered key-value pairs
- `unordered_multiset<T>`: Allows duplicates
- `unordered_multimap<K, V>`: Allows duplicate keys

### **3.2 Algorithms (algorithm)**
- `sort(begin, end)`, `reverse(begin, end)`, `find(begin, end, val)`, `count(begin, end, val)`, `binary_search(begin, end, val)`, `lower_bound(begin, end, val)`, `upper_bound(begin, end, val)`

### **3.3 Iterators**
- `begin()`, `end()`, `rbegin()`, `rend()`, `cbegin()`, `cend()`

#### **Types of Iterators in C++**
1. **Input Iterator** - Read values sequentially (e.g., `istream_iterator`)
2. **Output Iterator** - Write values sequentially (e.g., `ostream_iterator`)
3. **Forward Iterator** - Move forward only (e.g., `forward_list<T>::iterator`)
4. **Bidirectional Iterator** - Move both forward and backward (e.g., `list<T>::iterator`)
5. **Random Access Iterator** - Access any element directly (e.g., `vector<T>::iterator`, `array<T, N>::iterator`)
6. **Const Iterator** - Read-only iterator (`const_iterator`)
7. **Reverse Iterator** - Iterate in reverse order (`rbegin()`, `rend()`)

### **3.4 Utility Components**
- `pair<T1, T2>`, `tuple<T1, T2, T3>`, `make_pair(a, b)`, `tie(x, y) = tuple`

### **3.5 Functional Utilities**
- `greater<T>`, `less<T>`, `plus<T>`, `minus<T>`

---

## 4. Other Important Features

### **4.1 OOP Concepts**
- Encapsulation, Inheritance, Polymorphism, Abstraction
- Constructors & Destructors
- Operator Overloading

### **4.2 Exception Handling**
- `try`, `catch`, `throw`

### **4.3 File Handling (fstream)**
- `ifstream`, `ofstream`, `fstream`
- `open()`, `close()`, `read()`, `write()`

### **4.4 Multithreading (thread)**
- `std::thread`, `join()`, `detach()`, `mutex`

---

This document provides an overview of C++ essentials, including data types, built-in functions, STL, and key features. For deeper learning, refer to the official C++ documentation or books like *The C++ Programming Language* by Bjarne Stroustrup.

