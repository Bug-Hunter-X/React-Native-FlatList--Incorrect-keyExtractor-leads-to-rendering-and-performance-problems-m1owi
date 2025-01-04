# React Native FlatList: Incorrect keyExtractor

This repository demonstrates a common error in React Native's FlatList component: using an incorrect `keyExtractor` function. The `keyExtractor` function is vital for efficient rendering and updating of FlatList items.  If it doesn't provide unique keys for each item, the FlatList's behavior becomes unpredictable, causing performance issues and incorrect display.

## The Problem

The `bug.js` file shows an example of incorrect `keyExtractor` usage. Duplicating `id` values without a proper unique key leads to problems.

## The Solution

The `bugSolution.js` file provides the correct implementation of `keyExtractor`.  It uses a unique identifier (`id` in this case) to ensure each item has a distinct key.  If an `id` property isn't available, a unique string using index and item data is constructed to avoid collisions. 

Always ensure your `keyExtractor` returns a unique value for each item to avoid issues with FlatList.