'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

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
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
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

function CompareLists(llist1, llist2) {
    let current1 = llist1;
    let current2 = llist2;

    let counter1 = 0;
    let counter2 = 0;

    if (current1 === null && current2 === null)      {return 1;}
    else if (current1 === null && current2 !== null) {return 0;}
    else if (current1 !== null && current2 === null) {return 0;}
    else {

        while (current1 !== null) {
            if (current2 === null) { return 0;}
            else if (current1.data !== current2.data) {return 0;}
            else {
                current1 = current1.next;
                current2 = current2.next;
                counter1++;
                counter2++;
            }
        }
        
    }

    if (counter1 === counter2) {return 1;}
    else                       {return 0;}

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let result = CompareLists(llist1.head, llist2.head);

        ws.write((result ? 1 : 0) + "\n");
    }

    ws.end();
}
