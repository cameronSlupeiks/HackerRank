"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
  }
};

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

function insertNodeAtTail(head, data) {
  let current = head;
  let node = new SinglyLinkedListNode(data, null);

  if (current == null) {
    head = node;
  } else {
    while (current != null) {
      if (current.next == null) {
        current.next = node;
        break;
      } else {
        current = current.next;
      }
    }
  }

  return head;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const llistCount = parseInt(readLine(), 10);

  let llist = new SinglyLinkedList();

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10);
    const llist_head = insertNodeAtTail(llist.head, llistItem);
    llist.head = llist_head;
  }

  printSinglyLinkedList(llist.head, "\n", ws);
  ws.write("\n");

  ws.end();
}
