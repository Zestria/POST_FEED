export class Post {
    constructor(text){
        this.text = text;
        this.countDis = 0;
        this.comments = []
    }
    
    toDislike() {
        this.countDis+=1;
        console.log(this.countDis)
    }
    
    toComment(text) {
        if(!text.trim()) return;
        this.comments.push(text.trim())
    }
}

export function createPost(text) {
    let post = new Post(text);

    let p = document.createElement("p");
    p.textContent = post.text;    

    let btnDis = document.createElement("button");
    let attrBtnDis = document.createAttribute("type");
    attrBtnDis.value = "button";
    btnDis.setAttributeNode(attrBtnDis);
    btnDis.textContent = 'Dislike';

    btnDis.onclick = () => post.toDislike();

    let input = document.createElement("input");
    let attrInput = document.createAttribute("type");
    attrInput.value = "text";
    input.setAttributeNode(attrInput);

    let btnComm = document.createElement("button");
    let attrBtnComm = document.createAttribute("type");
    attrBtnComm.value = "submit";
    btnComm.setAttributeNode(attrBtnComm);
    btnComm.textContent = "Add comment";

    let form = document.createElement("form");
    form.classList.add("writeComment");
    form.appendChild(input);
    form.appendChild(btnComm);

    form.onsubmit = e => {
        e.preventDefault();
        post.toComment(e.target[0].value);
        e.target[0].value = ""
        console.log(post)
    }

    let div = document.createElement("div");
    div.classList.add("post");
    div.appendChild(p);
    div.appendChild(btnDis);
    div.appendChild(form);

    return div;
}
