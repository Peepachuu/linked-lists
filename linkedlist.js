const LinkedList = function(head) {
    function append(value) {
        let currentNode = head;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = value;
    }

    function prepend(value) {

    }

    function size() {

    }

    function getHead() {
        return head;
    }

    function getTail() {

    }

    function at(index) {

    }

    function pop() {

    }

    function contains(value) {

    }

    function find(value) {

    }

    function toString() {

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
linkedList1 = LinkedList(head1);
linkedList1.append(newNode);
console.log(linkedList1.getHead());