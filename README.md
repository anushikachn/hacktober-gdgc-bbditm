# To-Do List Application

## Overview
This To-Do List application allows users to manage tasks effectively. It features the ability to add tasks, set due dates and times, toggle between light and dark themes, and sort tasks based on various criteria. The application provides a user-friendly interface to help users stay organized.

## Features

### 1. Dark Theme Toggle
- Users can switch between light and dark themes by clicking the toggle button.
- The selected theme is saved in local storage, ensuring persistence between page reloads.

### 2. Task Management
- Users can add tasks with the following details:
  - Contributor Name
  - Task Content
  - Due Date
  - Due Time
- Tasks are displayed in a list format, showing essential information for each task.

### 3. Due Date and Time Handling
- Each task has an associated due date and time.
- If the current date and time exceed the task's due date and time, the task is highlighted in red to indicate that it is past due.

### 4. Sorting Options
- Users can sort tasks based on:
  - **Due Date**: Sorts tasks in ascending order based on their due dates and times.
  - **Timestamp**: Sorts tasks by their creation timestamps, displaying the oldest tasks first.
  - **Completion Status**: Sorts tasks to show completed tasks first.

### 5. Dynamic Display of Sorting Options
- Sorting options are only displayed after the user has added three or more tasks. This ensures a cleaner interface when fewer tasks are present.

## Usage

1. **Add Tasks**:
   - Fill in the contributor name, task content, due date, and due time in the form.
   - Click the "Add Task" button to save the task.

2. **Toggle Theme**:
   - Click the "Toggle Theme" button to switch between light and dark modes.

3. **Sort Tasks**:
   - After adding three or more tasks, the sorting options will appear.
   - Click on the desired sorting option to rearrange the tasks accordingly.

4. **View Past Due Tasks**:
   - Any tasks that have passed their due date and time will be displayed with a red background.

5. **Complete or Delete Tasks**:
   - Click the "Complete" button to mark a task as completed or the "Delete" button to remove it from the list.

## Technologies Used
- HTML
- CSS
- JavaScript

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anushikachn/hacktober-gdgc-bbditm.git

