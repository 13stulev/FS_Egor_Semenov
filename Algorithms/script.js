class Stack {
    constructor() {
        this.stack = [];
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        return this.stack.pop();
    }
}

class Node {
    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        let newNode = new Node(value);

        if (this.tail){
            this.tail.next = newNode;
        }

        newNode.previous = this.tail;

        this.tail = newNode;


        if(!this.head){
            this.head = newNode;
        }
    }
    setByIndex(value, index){
        let node = new Node(value);
        let nodeByIndex = this.head;
        for(let i = 0; i < index; i++){
            nodeByIndex = nodeByIndex.next;
        }
        let tempNode = nodeByIndex;
        nodeByIndex = nodeByIndex.previous;

        tempNode.previous = node;
        node.next = tempNode;

        nodeByIndex.next = node;
        node.previous = nodeByIndex;
    }
    changeValue(value, index){
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        currentNode.value = value;
    }
    deleteByIndex(index){
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        let nextNode = currentNode.next;
        let previousNode = currentNode.previous;

        nextNode.previous = previousNode;
        previousNode.next = nextNode;

        currentNode = null;
    }
    get(index){
        let node = this.head;
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        return node.value;
    }
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


//QuickSort
let arr = [5, 4, 3, 2, 1];
console.log(`Массив до ${arr}`);
quickSort(arr, 0, arr.length - 1);
console.log(`Массив после ${arr} `);
console.log(`Работа со стеком`);
//Stack
let stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
console.log(stack.pop());
console.log(stack.peek());
//LinkedList
console.log("LinkedList");
let list = new LinkedList();
list.add(5);
list.add(4);
list.add(3);
list.setByIndex(15, 2);
console.log(list.get(2));
list.deleteByIndex(2);
console.log(list.get(2));
list.changeValue(1000, 2);
console.log(list.get(2));
console.log(list);