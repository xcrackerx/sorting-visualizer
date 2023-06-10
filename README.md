<h1 align="center">
    Sorting Algorithms Visualizer
</h1>

## Responsive visualizer built using React for popular algorithms

<a href="algorithm-sorting-visualizer.netlify.app/"><img src="visualizer.png" alt="cover" /></a>

---

### An attempt to help in learning popular sorting algorithms by visualization

Algorithms represented in this project

- Bubble Sort
- Selection Sort
- Insertion Sort
- Heap Sort
- Merge Sort
- Quick Sort

Helps to

- understand the working of sorting algorithm
- check total swaps required
- check total comparisions
- compare algorithms side by side
- know the time taken (time is just an approximate unit for comparision)

Features

- Sort any given array of 3 digits positive integers
- Alter the speed of execution
- Start, pause and reset the execution
- Generate random array of numbers of sorting

### Technologies

- React with hooks
- [Styled components](https://styled-components.com/) + [React material](https://material-ui.com/) (css and component libraries)
- [Zustand](https://github.com/pmndrs/zustand) (hooks based state management library)
- [Vite](https://vitejs.dev/) (Bundler)

### Features built using

- Animations are done using pure CSS and uses [FLIP principle](https://aerotwist.com/blog/flip-your-animations/)
- Flex is used for array display and manipulation of positions (flex order property)
- JavaScript async generators are used heavily for the controlled execution of algorithms

### Run in your local

- ```git clone https://github.com/xcrackerx/sorting-visualizer.git```
- ```npm install``` (after navigating inside the directory)
- ```npm run dev```
