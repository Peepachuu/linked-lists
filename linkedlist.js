const LinkedList = function(headNode) {
    let head = headNode;
    function append(value) {
        let currentNode = head;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = value;
    }

    function prepend(value) {
        value.nextNode = head;
        head = value;
    }

    function size() {
        let n = 0;
        let currentNode = head;
        while (currentNode != null) {
            currentNode = currentNode.nextNode;
            ++n;
        }
        return n;
    }

    function getHead() {
        return head;
    }

    function getTail() {
        let currentNode = head;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    function at(index) {
        let currentNode = head;
        let currentIndex = 0;
        while (currentIndex != index) {
            ++currentIndex;
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    function pop() {
        let currentNode = head;
        if (currentNode.nextNode == null) {
            head = null;
            return ;
        }
        while (currentNode.nextNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
    }

    function contains(value) {
        let currentNode = head;
        while (currentNode != null) {
            if (currentNode == value)
                return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    function find(value) {
        let currentNode = head;
        let index = 0;
        while (currentNode != null) {
            if (currentNode == value)
                return index;
            ++index;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    function toString() {
        let currentNode = head;
        let stringRepresentation = "";
        while (currentNode != null) {
            stringRepresentation += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        stringRepresentation += "null";
        return stringRepresentation;
    }

    return {
        append,
        prepend,
        size,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        toString
    }
};

const Node = function(value=null, nextNode=null) {
    return {
        value,
        nextNode
    };
};

head1 = Node(12);
newNode = Node(54);
newerNode = Node(134);
linkedList1 = LinkedList(head1);
linkedList1.append(newNode);
linkedList1.append(newerNode);
console.log(linkedList1.getHead());
console.log(linkedList1.size());
console.log(linkedList1.at(0));
console.log(linkedList1.getTail());
console.log("gapppp");
console.log(linkedList1.toString());