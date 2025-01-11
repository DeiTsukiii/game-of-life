# Conway's Game of Life

A reproduction of Conway's Game of Life built with [Phaser.js](https://phaser.io). This project implements the classic cellular automaton simulation with added interactive features for enhanced user experience.

## 🌟 Features

- **Zoom**: Adjust the grid size with zoom in/out functionality for better visualization.  
- **Speed Control**: Customize the simulation speed to observe cellular evolution in real-time or slow motion.  
- **Play/Pause**: Start or pause the simulation at any point.  
- **Cell Editing**: Bring cells to life or kill them manually with simple mouse interactions.  

## 📜 What is Conway's Game of Life?

Conway's Game of Life is a cellular automaton devised by the British mathematician **John Horton Conway** in 1970. Despite its simplicity, the game demonstrates how complex behaviors can emerge from simple rules, making it a fascinating study in mathematics, computer science, and biology.

### **How it works**

The game is played on an infinite 2D grid composed of square cells. Each cell has two possible states:  
- **Alive** (populated)  
- **Dead** (empty)  

The state of the grid evolves in discrete steps, where the next state of each cell depends on the current states of its 8 neighbors (adjacent horizontally, vertically, or diagonally).

### **Rules of Life**
1. **Underpopulation**: A live cell with fewer than two live neighbors dies (loneliness).  
2. **Overpopulation**: A live cell with more than three live neighbors dies (overcrowding).  
3. **Survival**: A live cell with two or three live neighbors survives to the next generation.  
4. **Reproduction**: A dead cell with exactly three live neighbors becomes a live cell (birth).  

These rules result in a variety of patterns, including static structures, oscillators, and patterns that move across the grid (spaceships).

---

## 🤖 Turing-Completeness of the Game of Life

Conway's Game of Life is **Turing-complete**, meaning that it can simulate any computation that a Turing machine can perform, given sufficient time and space. This makes it not just a simple game, but a theoretical model of computation.

### **What does Turing-completeness mean?**
Turing-completeness is a concept in computer science that describes systems capable of performing any calculation, provided they are given the necessary resources. In the context of the Game of Life, this means that the grid and its rules can be used to construct computational structures like:
- **Logic gates** (AND, OR, NOT, etc.)  
- **Memory storage** (using stable patterns).  
- **Universal constructors**, which can replicate any pattern or machine.  

### **How is computation achieved in the Game of Life?**
Complex patterns like **gliders** (moving cells) and **glider guns** (structures that produce gliders periodically) can interact to create logical operations. By carefully arranging these patterns, one can simulate computational devices such as:
- Adders for arithmetic operations.
- Finite-state machines.
- Entire computer architectures.

This discovery is significant because it shows how a simple set of rules can produce a system as powerful as a modern computer, highlighting the universality of the principles of computation.

---

### **Why is it interesting?**
- **Emergent Complexity**: Simple rules can create incredibly complex behaviors.  
- **Mathematical Beauty**: Many patterns, such as the "glider" and "pulsar," have been discovered, and the game has connections to Turing machines.  
- **Educational Value**: It’s a great introduction to topics like cellular automata, algorithms, artificial life, and computation theory.  

---

## 🎮 Play

[Try it out here](https://deitsuki.netlify.app/game-of-life)

## 🛠️ Technologies Used

- **Programming Language**: JavaScript  
- **Framework**: [Phaser.js](https://phaser.io)  

---

Feel free to explore, modify, and contribute to this project. Enjoy the simulation! 🚀
