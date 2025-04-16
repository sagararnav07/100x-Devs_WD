## listing files and folders
1. *ls Recruit CRM* --> You can directly see what in other folder without any need to cd it first

2. *ls -l "Recruit CRM"* -->

{Output
 -rw-r--r--@ 1 arnavsagar  staff      100 Mar  3 16:53 Recruit CRM video link.txt
-rw-r--r--@ 1 arnavsagar  staff   378048 Mar  3 16:51 Recruit CRM_ Review, Limitations, and Improvement Suggestions.docx}

```permissions : -rw-r--r--@```
<refrences: 1
owner : arnavsagar 
group owner: staff
last modified date and timestamp: 100 Mar  3 16:53
filename with extension : Recruit CRM video link.txt></refrences>

3. *ls -R* -->

{Output
Recruit CRM video link.txt
Recruit CRM_ Review, Limitations, and Improvement Suggestions.docx
}

4. *ls -a* --> Show hidden files
5. *ls -lR | grep .json* --> To find files with specific extension here it is .json

{Output 
-rw-r--r--    1 arnavsagar  staff  85104 Apr 13 15:59 package-lock.json
-rw-r--r--    1 arnavsagar  staff    698 Apr 13 16:01 package.json
  -rw-r--r--   1 arnavsagar  staff   1626 Apr 12 23:24 package.json
  -rw-r--r--  1 arnavsagar  staff  35785 Ap
}

6. ls co* --> when you do co* it can seach for words containing co, with this command you can search for exact file you want 
{Output
constant.js

controllers:
user.controllers.js
}


7. cd Folder -> move to a directory
8. cd .. -> move back from a directory

9. cat a.txt -> display the contents of a file
10. cat > a.txt -> you can write in your file
{
    cat > a.txt
    uwhhkwn
    ndknknk
    nknknkn
}

{Output
   cat a.txt
uwhhkwn
    ndknknk
    nknknkn
}

11. cat >> a.txt -> make chnages to a file
12. mkdir -> makes a directory for you
13. mkdir -p create multiple directories recursively
{ like this:
    mkdir Folder
    mkdir -p Folder/Frontend
    mkdir -p Folder/Backend
}

14. mv Users/arnavsagar/Master-TailwindCSS Users/arnavsagar/Developer :- move a folder into another folder : here moving folder Master-TailwindCSS into folder Developer

15. cp name.txt Developer :- copy a file into folder
here name.txt into Developer

# ----------------------------------------------
The permission `-rw-r--r--` is a standard Unix-style file permission string that shows who can read/write/execute a file.

Let's break it down:

```
-rw-r--r--
```

### 1. First character (`-`)
- `-` means it is a **regular file**.
- If it were a directory, it would be `d`.

### 2. Next three characters (`rw-`) – **Owner permissions**
- `r` = read
- `w` = write
- `-` = no execute permission  
So, the **owner** of the file can **read and write** the file, but not execute it.

### 3. Next three characters (`r--`) – **Group permissions**
- `r` = read
- `--` = no write or execute  
So, users in the **same group** can only **read** the file.

### 4. Last three characters (`r--`) – **Others (everyone else)**
- `r` = read
- `--` = no write or execute  
Everyone else can **only read** the file.

---

### Summary:
- Owner: read, write  
- Group: read  
- Others: read

16. chmod : to give and take permission for i.e
chmod u+ : to add permission
chmod u-: to remove permission


{
    *1. Add an executebale permission into this file*
   -rw-r--r--  1 arnavsagar  staff  0 Apr 15 11:03 a.txt 
     *chmod u+x a.txt*
  *added*  -rwxr--r--  1 arnavsagar  staff  0 Apr 15 11:03 a.txt   
    *chmod u-x a.txt removed executable*
    -rw-r--r--  1 arnavsagar  staff  0 Apr 15 11:03 a.txt
    *chmod u-rw a.txt removed even read write*
    ----r--r--  1 arnavsagar  staff  0 Apr 15 11:03 a.txt

}
```we can do it numerically also as each digit represent 4--> read 2--> write 1--> execute```

if i want to give all the permission to a file it will be 7 --> 4+2+1

{
    for i.e
    ----r--r--  1 arnavsagar  staff   0 Apr 15 14:17 a.txt
    *input :- chmod 7 a.txt*
    -------rwx  1 arnavsagar  staff   0 Apr 15 14:17 a.txt
}

if I only want to give read and write it will be 6 --> 4+2

<Example {1.When we did ls -l : index .js has all the permissions so after doing :- node index.js we were getting an output, but after we did chmod u-rwx we snathced all the permissions and then wehen we run the file it gave error
    -rw-r--r--  1 arnavsagar  staff  57 Apr 15 14:21 index.js
❯ chmod u-rwx index.js
❯ node index.js
node:internal/fs/sync:25
  return binding.readFileUtf8(path, stringToFlags(flag));
                 ^
Error: EACCES: permission denied, open '/Users/arnavsagar/Desktop/Folder/index.js'
}></Example>

-------------------------------------
17. If you want specific parts of the file you can use head or tail feature for i.e *head a.txt* or *tail a.txt*

The `head` and `tail` commands in Unix/Linux are used to display the beginning or end of a file, respectively.

### 1. `head a.txt`
- **Purpose**: Shows the **first 10 lines** of `a.txt` (by default).
- **Example Output**:
  ```
  Line 1
  Line 2
  ...
  Line 10
  ```
- **Custom number of lines**:
  ```bash
  head -n 5 a.txt    # Shows first 5 lines
  ```

---

### 2. `tail a.txt`
- **Purpose**: Shows the **last 10 lines** of `a.txt` (by default).
- **Example Output**:
  ```
  ...
  Line N-9
  Line N-8
  ...
  Line N
  ```
- **Custom number of lines**:
  ```bash
  tail -n 15 a.txt   # Shows last 15 lines
  ```

---

### Bonus: Live Updates with `tail`
To **watch a file in real-time** (like a log file):
```bash
tail -f a.txt
```

18. Pipe command -->`|` :- for i.e command 1 | command 2
Whatever output comes from command number 1 flows through command number 2

{Output
❯ head -n +5 b.txt | tail -n +5 b.txt
4
5
6
7
8
9

12
34
56
78
90

12
34
56
78
90

98
87
76
65
43
21
}

We can also do "line count, Word Count or character Count in the file"

19. wc :- Word count
wc b.txt
     line count - 29     word count:- 25     character count:-70 b.txt

20. grep :- helps us find out occurences of and character, regex or word etc

for i.e{Output
    ❯ grep 1 b.txt
1
12
12
21
}

or
{
    ❯ grep ar x.txt
ar
art
ary
art
are
arw
arf
arv
}

21. grep -hir "ar" . :-search the word across directory, here "." is the current directory you can change the directory as per your liking

22. grep -o "ar" a.txt :- will only return the character searched no more no less

23. grep -w "ar" a.txt :- will return every word that contains the searched element






