var {LinkedList,Node} = require('../modules/LinkedList');

describe("CreateList", function() {
  it("Should create an object with an array inside", function() {
    var list = new LinkedList();

    expect(list._length).toBe(0);
    expect(list.head).toBe(null);
  });
});

// describe("consoleLogAll", function() {
//   it("should log all the nodes in the list", function() {
//     console.log = jasmine.createSpy("log");
//     var list = new LinkedList();
//     list.AddToTheBeginning("1");
//     list.AddToTheBeginning("3")

//     list.consoleLogAll();
//     expect(console.log).toHaveBeenCalledWith("3");
//     expect(console.log).toHaveBeenCalledWith("1");
//   });
// });

describe("AddToTheBeginning", function() {
  it("should create newNode with the data, add it to the beginning of the list and increase the length by 1", function() {
    var list = new LinkedList();

    list.AddToTheBeginning('3');
    expect(list.head.data).toBe('3');
    expect(list.head.next).toBe(null);
    expect(list._length).toBe(1);    
  });
  it("should create newNode with the data, add it to the beginning of the list and increase the length by 1", function() {
    var list = new LinkedList();

    list.AddToTheBeginning('test');
    expect(list.head.data).toBe('test');
    expect(list.head.next).toBe(null);
    expect(list._length).toBe(1);    
  });
});

// describe("DeleteItem", function() {
//   it("should find the node that matches the data, remove it from the list and reduce length by 1", function() {
//     console.log = jasmine.createSpy("log");
//     var list = new LinkedList();
//     list.AddToTheBeginning('2');
//     list.AddToTheBeginning('5');
//     list.AddToTheBeginning('3');
    
//     list.DeleteItem('5');
    
//     list.consoleLogAll();
//     expect(console.log).toHaveBeenCalledWith('2');    
//     expect(console.log).toHaveBeenCalledWith('3');    
    
//     expect(list._length).toBe(2);
//   });
// });

// describe("AddToTheEnd", function() {
//   it("should create newNode with the data, add it to the end of the list and increase the length by 1", function() {
//       var list = new LinkedList();
//       list.AddToTheEnd('3');
//       list.AddToTheEnd('2');

//       expect(list.head.data).toBe('3');
//       expect(list.head.next.data).toBe('2');
//       expect(list._length).toBe(2);   

//    });
// });

// describe("RemoveItemByIndex", function() {
//   it("should find the node that matches the index received, remove it and reduce length by 1", function() {
//     var list = new LinkedList();
//     list.AddToTheBeginning('2');
//     list.AddToTheBeginning('5');
//     list.AddToTheBeginning('3');

//     list.RemoveItemByIndex(1);
    
//     expect(list.head.data).toBe('3');
//     expect(list.head.next.data).toBe('2');   
    
//     expect(list._length).toBe(2);

//   });
// });