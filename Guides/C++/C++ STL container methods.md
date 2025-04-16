C++ provides several built-in data structures through the **Standard Template Library (STL)**. Below is a comprehensive list of **inbuilt methods** for each data structure.

---

# **1. Vector (`std::vector`)**
📌 **Header:** `<vector>`
```cpp
#include <vector>
std::vector<int> v = {1, 2, 3};
```

### **Common Methods:**
```cpp
v.push_back(4);     // Adds element to the end
v.pop_back();       // Removes last element
v.insert(v.begin(), 10); // Insert at beginning
v.erase(v.begin()); // Erase first element
v.size();           // Returns number of elements
v.empty();          // Checks if vector is empty
v.clear();          // Removes all elements
v.front();          // Access first element
v.back();           // Access last element
std::sort(v.begin(), v.end()); // Sort elements
std::reverse(v.begin(), v.end()); // Reverse elements
```

---

# **2. List (`std::list`)**
📌 **Header:** `<list>`
```cpp
#include <list>
std::list<int> l = {1, 2, 3};
```

### **Common Methods:**
```cpp
l.push_back(4);     // Add at end
l.push_front(0);    // Add at front
l.pop_back();       // Remove last element
l.pop_front();      // Remove first element
l.insert(l.begin(), 5); // Insert at beginning
l.erase(l.begin()); // Remove first element
l.remove(2);        // Remove all occurrences of 2
l.size();           // Get size
l.reverse();        // Reverse the list
l.sort();           // Sort the list
```

---

# **3. Deque (`std::deque`)**
📌 **Header:** `<deque>`
```cpp
#include <deque>
std::deque<int> d = {1, 2, 3};
```

### **Common Methods:**
```cpp
d.push_back(4);     // Add at end
d.push_front(0);    // Add at front
d.pop_back();       // Remove last element
d.pop_front();      // Remove first element
d.insert(d.begin(), 5); // Insert at beginning
d.erase(d.begin()); // Remove first element
d.size();           // Get size
d.clear();          // Remove all elements
d.front();          // Access first element
d.back();           // Access last element
```

---

# **4. Stack (`std::stack`)**
📌 **Header:** `<stack>`
```cpp
#include <stack>
std::stack<int> s;
```

### **Common Methods:**
```cpp
s.push(10);         // Push element to top
s.pop();            // Remove top element
s.top();            // Access top element
s.size();           // Get number of elements
s.empty();          // Check if stack is empty
```

---

# **5. Queue (`std::queue`)**
📌 **Header:** `<queue>`
```cpp
#include <queue>
std::queue<int> q;
```

### **Common Methods:**
```cpp
q.push(10);         // Add element at the back
q.pop();            // Remove front element
q.front();          // Get front element
q.back();           // Get last element
q.size();           // Get number of elements
q.empty();          // Check if queue is empty
```

---

# **6. Priority Queue (`std::priority_queue`)**
📌 **Header:** `<queue>`
```cpp
#include <queue>
std::priority_queue<int> pq;
```

### **Common Methods:**
```cpp
pq.push(10);        // Insert element
pq.pop();           // Remove top element
pq.top();           // Get max/min element
pq.size();          // Get number of elements
pq.empty();         // Check if queue is empty
```
🔹 **By default, `priority_queue` is a max-heap (largest element on top).**
🔹 **For min-heap:**  
```cpp
std::priority_queue<int, std::vector<int>, std::greater<int>> pq;
```

---

# **7. Set (`std::set`)**
📌 **Header:** `<set>`
```cpp
#include <set>
std::set<int> s = {1, 2, 3};
```

### **Common Methods:**
```cpp
s.insert(4);        // Insert element
s.erase(2);         // Remove element
s.find(3);          // Search element
s.count(3);         // Count occurrences
s.size();           // Get size
s.empty();          // Check if set is empty
s.clear();          // Remove all elements
```

---

# **8. Unordered Set (`std::unordered_set`)**
📌 **Header:** `<unordered_set>`
```cpp
#include <unordered_set>
std::unordered_set<int> us = {1, 2, 3};
```

### **Common Methods:**
```cpp
us.insert(4);       // Insert element
us.erase(2);        // Remove element
us.find(3);         // Search element
us.count(3);        // Count occurrences
us.size();          // Get size
us.empty();         // Check if set is empty
us.clear();         // Remove all elements
```
🔹 **Unordered sets have faster average-case lookup (`O(1)`) but are unordered.**

---

# **9. Map (`std::map`)**
📌 **Header:** `<map>`
```cpp
#include <map>
std::map<int, std::string> mp;
```

### **Common Methods:**
```cpp
mp[1] = "One";      // Insert or update key-value pair
mp.insert({2, "Two"}); // Insert pair
mp.erase(1);        // Remove key
mp.find(2);         // Find key
mp.count(3);        // Count occurrences
mp.size();          // Get size
mp.clear();         // Remove all elements
```
🔹 **Stores elements in sorted order by key.**

---

# **10. Unordered Map (`std::unordered_map`)**
📌 **Header:** `<unordered_map>`
```cpp
#include <unordered_map>
std::unordered_map<int, std::string> ump;
```

### **Common Methods:**
```cpp
ump[1] = "One";     // Insert or update key-value pair
ump.insert({2, "Two"}); // Insert pair
ump.erase(1);       // Remove key
ump.find(2);        // Find key
ump.count(3);       // Count occurrences
ump.size();         // Get size
ump.clear();        // Remove all elements
```
🔹 **Unordered maps offer faster lookups (`O(1)` average case) but store elements in no specific order.**

---

# **11. Multiset (`std::multiset`)**
📌 **Header:** `<set>`
```cpp
#include <set>
std::multiset<int> ms;
```

### **Common Methods:**
```cpp
ms.insert(10);      // Insert element
ms.insert(10);      // Insert duplicate element
ms.erase(10);       // Remove all occurrences of 10
ms.count(10);       // Count occurrences of 10
ms.find(10);        // Find first occurrence of 10
```
🔹 **Allows duplicate elements and stores in sorted order.**

---

# **12. Multimap (`std::multimap`)**
📌 **Header:** `<map>`
```cpp
#include <map>
std::multimap<int, std::string> mm;
```

### **Common Methods:**
```cpp
mm.insert({1, "One"}); // Insert key-value pair
mm.insert({1, "First"}); // Allows duplicate keys
mm.erase(1);        // Remove all occurrences of key
mm.find(1);         // Find first occurrence of key
```

---

## **Conclusion**
Each STL container in C++ provides different built-in methods for efficient data manipulation. If you need explanations for any specific functions, let me know! 🚀