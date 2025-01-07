


class Node{

    contructor(val){

        this.value = val;
        this.next = null;

    }
}



const head = new Node(1);

head.next = new Node(2);

head.next.next = new Node(3);

head.next.next.next = new Node(4);

// 4 again points to 2  (to make a loop)



head.next.next.next.next = head.next;



function detectLoop(head){

    let slow = head;
    let fast = head;

    while(fast && fast.next){

        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            console.log("Loop detected");
            return fast;
            
        }

    }

    return null;
}


function removeLoop(head){

    let ptr1 = head;
    let meet = detectLoop(head);

    if(meet === null){
        console.log("No loop present");
        return;
        
    }

    let ptr2 = meet;

    // detect first node of loop

    while(ptr1 !== ptr2){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;

    }

    // detect last node of loop (node which point to this first node of loop)

    while(ptr2.next !== ptr1){

        ptr2 = ptr2.next;

    }


    ptr2.next = null;  // loop breaks



}



console.log(head);

removeLoop(head);

console.log(head);


















