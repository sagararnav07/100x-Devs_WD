### **Loops in C++**  
Loops in C++ help execute a block of code multiple times. There are three primary types of loops:  

#### **1. `for` Loop**  
Used when the number of iterations is known beforehand.  
```cpp
for (int i = 0; i < 5; i++) {
    std::cout << i << " ";
}
// Output: 0 1 2 3 4
```

#### **2. `while` Loop**  
Used when the number of iterations is unknown, but a condition is given.  
```cpp
int i = 0;
while (i < 5) {
    std::cout << i << " ";
    i++;
}
// Output: 0 1 2 3 4
```

#### **3. `do-while` Loop**  
Executes at least once before checking the condition.  
```cpp
int i = 0;
do {
    std::cout << i << " ";
    i++;
} while (i < 5);
// Output: 0 1 2 3 4
```

---

### **Loop Control Statements**  
- `break;` → Exits the loop immediately.  
- `continue;` → Skips the current iteration and moves to the next.  

```cpp
for (int i = 0; i < 5; i++) {
    if (i == 2) continue;
    std::cout << i << " ";
}
// Output: 0 1 3 4
```

---

### **Iterators in C++**  
Iterators are used to traverse through containers like vectors, lists, and maps.  

#### **1. `begin()` and `end()` Iterators (Vectors Example)**
```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {10, 20, 30, 40, 50};

    for (auto it = v.begin(); it != v.end(); it++) {
        std::cout << *it << " ";
    }
}
// Output: 10 20 30 40 50
```

#### **2. `rbegin()` and `rend()` (Reverse Iterators)**
```cpp
for (auto it = v.rbegin(); it != v.rend(); it++) {
    std::cout << *it << " ";
}
// Output: 50 40 30 20 10
```

#### **3. Range-based `for` Loop (Modern C++11)**
```cpp
for (int x : v) {
    std::cout << x << " ";
}
// Output: 10 20 30 40 50
```

#### **4. `auto` Keyword with Iterators**
```cpp
for (auto it = v.begin(); it != v.end(); ++it) {
    std::cout << *it << " ";
}
```

#### **5. `std::map` Iterators**
```cpp
#include <iostream>
#include <map>

int main() {
    std::map<int, std::string> mp = {{1, "One"}, {2, "Two"}, {3, "Three"}};

    for (auto it = mp.begin(); it != mp.end(); it++) {
        std::cout << it->first << " -> " << it->second << "\n";
    }
}
```
**Output:**
```
1 -> One
2 -> Two
3 -> Three
```

Would you like more details on any of these? 🚀