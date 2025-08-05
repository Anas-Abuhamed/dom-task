// Task 1
// 1
const body = document.body;
console.log(body.lastElementChild.tagName)
console.log(body.childNodes.length - body.children.length) // childNodes counts text, comment and element nodes. children counts only element nodes, 

// 2
console.log(body.childNodes[0].nodeType); // it will print 3 for text node
console.log(body.childNodes[0].nodeName) // it will print #text for text node
// the first paragraph and second paragraph is siblings, because they have the same parent node (they are in same level in the DOM tree)

// There is unexpected text nodes, like whitespace or new line between elements, which are counted as text nodes in childNodes.



// Task 2

const card = document.createElement('div');
card.className = "card";
card.dataset.role = "admin";
const h2 = document.createElement("h2");
h2.textContent = "Access Panel";
const p = document.createElement("p")
p.textContent = "Authenticated";
card.append(h2, p);
body.append(card);

console.log(card.dataset.role)
p.textContent = "Welcome back, Admin";
card.classList.add("authenticated", "highlight")
if (card.classList.contains("card")) {
    card.classList.remove("card");
}