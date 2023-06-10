import { getScreenWidth } from "./helper";
import { BubbleSort } from "../sortingFunctions/BubbleSort";
import { SelectionSort } from "../sortingFunctions/SelectionSort";
import { InsertionSort } from "../sortingFunctions/InsertionSort";
import { QuickSort } from "../sortingFunctions/QuickSort";
import { HeapSort } from "../sortingFunctions/HeapSort.js";
import { MergeSort } from "../sortingFunctions/MergeSort";

// colors setting
export const comparisionColor = "#FFA07A";
export const swapColor = "#AFEEEE";
export const sortedColor = "#00FF7F";
export const pivotColor = "#D8BFD8";

// time setting
export let swapTime = 1000;
export let compareTime = 500;

// init array
export let sortingArray = initArrayForScreenSize();

export const sortingAlgorithms = [
  { component: BubbleSort, title: "Bubble", name: "BubbleSort" },
  { component: SelectionSort, title: "Selection", name: "SelectionSort" },
  { component: InsertionSort, title: "Insertion", name: "InsertionSort" },
  { component: HeapSort, title: "Heap", name: "HeapSort" },
  { component: MergeSort, title: "Merge", name: "MergeSort" },
  { component: QuickSort, title: "Quick", name: "QuickSort" },
];

function initArrayForScreenSize() {
  const screenSize = getScreenWidth();
  if (screenSize < 460) return [5, 4, 3, 2, 1];
  else if (screenSize < 720) return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  return [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
}