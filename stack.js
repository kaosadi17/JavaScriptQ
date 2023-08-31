// implement stack data structure

class Stack{
  items = [];

  push(item){
    this.items.push(item);
  }

  pop(){
    return this.items.pop();
  }

  size(){
    return this.items.length;
  }

  isEmpty(){
    return this.size() === 0
  }

  peek(){ //next time remove item
    return (this.items[this.size()-1]);
  }
}

const stack = new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
