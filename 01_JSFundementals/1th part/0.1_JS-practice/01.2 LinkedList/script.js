function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}


// ---> Add to Head
LinkedList.prototype.addToHead = function (value){
    let newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};

var ll = new LinkedList();
ll.addToHead(1.1);
ll.addToHead(1.2);
// ll.addToHead(1.3);
// ll.addToHead(1.4);
//
// console.log(ll);


// ---> Add to Tail

LinkedList.prototype.addToTail = function (value){
    let newNode= new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

// ---> Testing add to tail


let myLL = new LinkedList();
myLL.addToTail(2.1);
myLL.addToTail(2.2);
myLL.addToTail(2.3);

myLL.addToHead(100)

// console.log(myLL);
// console.log(myLL.tail.prev.prev.prev)



//---> Remove Head Method



LinkedList.prototype.removeHead = function(){
    if(!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
};


// ---> Testing Remove Head

var ll = new LinkedList();

ll.addToHead(1000)
ll.addToHead(2000)

ll.addToTail(3000)


ll.removeHead();
// console.log(ll.removeHead());


//---> Remove Tail Method

LinkedList.prototype.removeTail = function(){
    if(!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;
};

var ll = new LinkedList();

ll.addToHead(4000)
ll.addToHead(5000)
ll.addToTail(6000)

ll.removeTail()

console.log(ll.removeTail())


















