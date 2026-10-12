Readme for exercise 5.

1. string[][] means that there is an array inside of another array. (A 2d array) with string values inside.

2. the difference between studentFullNames[1] and studentFullNames[1][0] is that studentFullNames[1] is the second array in the list. While studentFullNames[1][0] is the first value in the second array. Or in this case the first name of the second person.

3. studentFullNames.length returns the amount of students in the array.

4. studentFullNames[0].length would return 2. Because it returns the amount of values in a persons array which would be the name and last name. 2 values.

5. We need two indexes to return a students first name because the array of the student is within another array. Therefore only the second array index picks first name or last name.

Console Output:

[ 'David', 'Thörnqvist' ]
[ 'David', 'Lövgren Forssén' ]
David
Thörnqvist

1. [ 'David', 'Thörnqvist' ]
2. [ 'Hugo', 'Nyberg' ]
3. [ 'Vilhelm', 'Gustafsson' ]
4. [ 'David', 'Lövgren Forssén' ]

5
[
[ 'David', 'Thörnqvist' ],
[ 'Hugo', 'Nyberg' ],
[ 'William', 'Gustafsson' ],
[ 'David', 'Lövgren Forssén' ],
[ 'Alex', 'Huica' ]
]
