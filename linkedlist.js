
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currentNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }
  insertBefore(nextNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let prevNode = this.head;

      while ((currNode !== null) && (currNode.value !== nextNode)) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      prevNode.next = new _Node(item, currNode);

    }
  }

  insertAfter(prevNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let prevNode = this.head;

      while ((currNode !== null) && (currNode.value !== prevNode)) {
        prevNode = currNode;
        currNode = currNode.next;
      }
      if (currNode !== null) {
        console.log('Item not found on list');
        return;
      }
      prevNode.next = new _Node(item, currNode);

    }
  }

  insertAt(index, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let currNode = this.head;
    let prevNode = this.head;
    let i = 0;

    while (i !== index) {
      if (!currNode.next) {
        console.log('This index does not exist use insertLast to add to the end of the list');
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
      i++;
    }
    if (currNode === null) {
      console.log('Item not found on list (insertAt)');
      return;
    }

    let pushedItem = prevNode;
    let newItem = new _Node(item, prevNode.next);
    pushedItem.next = newItem;

  }


}


function main() {
  let singlyList = new LinkedList();
  singlyList.insertFirst('Apollo Creed');
  singlyList.insertFirst('Boomer');
  singlyList.insertFirst('Rocky Balboa');
  singlyList.insertFirst('Husker');
  singlyList.insertFirst('Starbuck');
  singlyList.insertFirst('Tauhida');
  singlyList.remove('squirrel');
  singlyList.insertBefore('Apollo Creed', 'John');
  singlyList.insertAfter('Apollo Creed', 'Tom');
  singlyList.insertAt(9, 'Kimbo Slice');
  console.log(JSON.stringify(singlyList));
  display(singlyList);
  size(singlyList);
  isEmpty(singlyList);
  findPrevious(singlyList, 'Tom');
  findLast(singlyList);
  middleList(singlyList);
}

main();



function display(list) {
  if (list.head) {
    console.log(list.head.value);
  } else {
    console.log('Empty List');
    return;
  }
}

function size(list) {

  let currNode = list.head;
  let i = 0;

  while (currNode.next !== null) {
    currNode = currNode.next;
    i++;
  }
  console.log(i);
  return i;
}


function isEmpty(list) {
  if (list.head) {
    console.log('false');
  } else {
    console.log('true');
  }
}

function findPrevious(list, key) {
  if (!list.head) {
    return;
  }

  let currNode = list.head;
  let prevNode = list.head;

  while (currNode.value !== key) {
    prevNode = currNode;
    currNode = currNode.next;
  }
  console.log(prevNode.value);
  return prevNode.value;
}

function findLast(list) {
  if (!list.head) {
    return;
  }

  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  console.log(currNode.value);
  return currNode.value;
}



function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) { 
    let newNode = current;
    while (newNode.next !== null) { 
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}


function reverse(list) {
  if (!list.head) {
    return;
  }
  let currNode = list.head;
  let i = 0;

  while (currNode.next !== null) {
    currNode = currNode.next;
    i++;
  }

  console.log(list);
  return currNode.value;
}

function middleList(list) {

  let mid = size(list) / 2;
  mid = Math.round(mid);

  let currNode = list.head;
  let prevNode = list.head;
  let i = 0;

  while (i !== mid) {
    if (!currNode.next) {
      return;
    }
    prevNode = currNode;
    currNode = currNode.next;
    i++;
  }
  if (currNode === null) {
    return;
  }

  let middle = prevNode;
  return console.log(list.find(middle.value));
}

const sortList = new LinkedList()


function sortLinkedList(linkedList) {
  let currentNode = linkedList.head
  let head = linkedList.head
  let storeNode;
  let shouldSort = true;
 


  while (shouldSort) {
    shouldSort = false;
  
    while (currentNode.next !== null) {
      if (currentNode.value > currentNode.next.value) {
        storeNode = currentNode.value
        currentNode.value = currentNode.next.value
        currentNode.next.value = storeNode
        shouldSort = true
      }
      currentNode = currentNode.next
    
    }
    if(!currentNode.next) {
      currentNode = linkedList.head
    }
  }
}

sortLinkedList(sortList)
display(sortList)