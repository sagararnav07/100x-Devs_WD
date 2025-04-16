C++ provides a vast number of predefined functions (methods) spread across different libraries. Below is a categorized list of commonly used predefined functions in C++.  

---

## **1. I/O Functions (`iostream`)**  
Header: `<iostream>`  
```cpp
#include <iostream>

std::cout << "Hello, World!";  // Output to console
std::cin >> x;                 // Input from user
std::cerr << "Error!";         // Standard error output
std::clog << "Logging...";     // Logging messages
```

---

## **2. String Functions (`string`)**  
Header: `<string>`  
```cpp
#include <iostream>
#include <string>

std::string str = "Hello";
str.length();        // Returns length of the string
str.size();          // Same as length()
str.append(" World"); // Concatenates strings
str.insert(2, "LL"); // Inserts "LL" at index 2
str.erase(1, 2);     // Removes characters at index 1-2
str.find("ll");      // Finds the position of "ll"
str.substr(1, 3);    // Extracts substring
str.compare("Hello"); // Compares strings
str.empty();         // Checks if string is empty
str.clear();         // Clears the string
```

---

## **3. Math Functions (`cmath`)**  
Header: `<cmath>`  
```cpp
#include <cmath>

double sqrt(double x);    // Square root
double pow(double x, y);  // Power (x^y)
double log(double x);     // Natural log (ln)
double log10(double x);   // Log base 10
double exp(double x);     // e^x
double ceil(double x);    // Rounds up
double floor(double x);   // Rounds down
double round(double x);   // Rounds to nearest
double abs(double x);     // Absolute value
double sin(double x);     // Sine (radians)
double cos(double x);     // Cosine (radians)
double tan(double x);     // Tangent (radians)
```

---

## **4. Character Functions (`cctype`)**  
Header: `<cctype>`  
```cpp
#include <cctype>

char ch = 'a';
isalpha(ch);   // Checks if alphabet (true)
isdigit(ch);   // Checks if digit (false)
isalnum(ch);   // Checks if alphanumeric (true)
islower(ch);   // Checks if lowercase (true)
isupper(ch);   // Checks if uppercase (false)
toupper(ch);   // Converts to uppercase ('A')
tolower(ch);   // Converts to lowercase ('a')
isspace(ch);   // Checks if whitespace
```

---

## **5. Vector Methods (`vector`)**  
Header: `<vector>`  
```cpp
#include <vector>

std::vector<int> v = {1, 2, 3};
v.push_back(4);   // Add element at end
v.pop_back();     // Remove last element
v.size();         // Get size of vector
v.empty();        // Check if empty
v.front();        // Get first element
v.back();         // Get last element
v.begin();        // Iterator to first element
v.end();          // Iterator to last+1 element
v.insert(v.begin() + 1, 10); // Insert at index 1
v.erase(v.begin() + 1);  // Remove at index 1
v.clear();         // Remove all elements
```

---

## **6. Algorithm Functions (`algorithm`)**  
Header: `<algorithm>`  
```cpp
#include <algorithm>
#include <vector>

std::vector<int> v = {3, 1, 4, 5, 2};
std::sort(v.begin(), v.end());    // Sort vector
std::reverse(v.begin(), v.end()); // Reverse vector
std::max_element(v.begin(), v.end()); // Get max element
std::min_element(v.begin(), v.end()); // Get min element
std::count(v.begin(), v.end(), 3);    // Count occurrences of 3
std::find(v.begin(), v.end(), 4);     // Find element 4
std::binary_search(v.begin(), v.end(), 4); // Binary search
std::next_permutation(v.begin(), v.end()); // Next permutation
std::prev_permutation(v.begin(), v.end()); // Previous permutation
```

---

## **7. Random Number Functions (`cstdlib`)**  
Header: `<cstdlib>`  
```cpp
#include <cstdlib>
#include <ctime>

srand(time(0));    // Seed for random numbers
int r = rand();    // Generates random number
int r1 = rand() % 100;  // Random number (0-99)
```

---

## **8. Time Functions (`ctime`)**  
Header: `<ctime>`  
```cpp
#include <ctime>

time_t now = time(0);  // Get current time
char* dt = ctime(&now);  // Convert to readable format
tm* localtm = localtime(&now); // Get local time
tm* gmtm = gmtime(&now);  // Get UTC time
```

---

## **9. File Handling Functions (`fstream`)**  
Header: `<fstream>`  
```cpp
#include <fstream>

std::ofstream outFile("file.txt");
outFile << "Hello, File!"; // Write to file
outFile.close();           // Close file

std::ifstream inFile("file.txt");
std::string content;
inFile >> content;          // Read from file
inFile.close();
```

---

## **10. Exception Handling (`exception`, `stdexcept`)**  
Header: `<exception>`  
```cpp
#include <iostream>
#include <exception>

try {
    throw std::runtime_error("Error Occurred!");
} catch (const std::exception &e) {
    std::cout << e.what();
}
```

---

## **11. Thread Functions (`thread`)**  
Header: `<thread>`  
```cpp
#include <iostream>
#include <thread>

void func() { std::cout << "Thread Running"; }

std::thread t1(func);
t1.join();  // Wait for thread to finish
```

---

## **12. Map Functions (`map`)**  
Header: `<map>`  
```cpp
#include <map>

std::map<int, std::string> mp;
mp[1] = "One";
mp.insert({2, "Two"});
mp.erase(1);   // Remove key 1
mp.size();     // Get size
mp.find(2);    // Find key 2
```

---

## **Conclusion**  
C++ provides many built-in functions across different libraries for various functionalities. Let me know if you need explanations for any specific ones! 🚀