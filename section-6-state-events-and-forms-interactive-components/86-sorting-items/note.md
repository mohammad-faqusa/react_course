## 86. Sorting Items

### the process

1. add to pacakge list , div(select)
   1. input
   2. description
   3. packed
2. create state sortBy
3. add onChange handler to select element
4. add derived state
   1. let sortedItems
   2. add conditional statements
   3. slide(), to create a copy of array
   4. sort(a,b => a.description.localCompare(b.description))
   5. a.packed - b.packed
