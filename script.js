const body = document.querySelector('body');
let h5 = document.createElement('h5');
body.appendChild(h5);


for (let i = 5; i >= 1; i--) {
    let h = document.createElement(`h${i}`);
    body.appendChild(h);
    h.innerText = (`Rad${6 - i}`);
    h.style.backgroundColor = `hsl(${i * 20}, 50%,50%)`;
    h.style.textAlign = ('center');
    h.style.color = ('#571414');
}

let divis = document.createElement('div');
body.appendChild(divis);
divis.style.border = ('solid black 4px');
divis.style.display = ('flex');
divis.style.justifyContent = 'space-evenly';


let box1 = document.createElement('ul');
let box2 = document.createElement('ul');
let box3 = document.createElement('ul');


divis.appendChild(box1);

box1.style.listStyleType = ('none');
box1.style.backgroundColor = ('#82a3d9');
box1.style.padding = ('10px');


divis.appendChild(box2);

box2.style.listStyleType = ('none');
box2.style.backgroundColor = ('#82a3d9');
box2.style.padding = ('10px');

divis.appendChild(box3);

box3.style.listStyleType = ('none');
box3.style.backgroundColor = ('#82a3d9');
box3.style.padding = ('10px');










for (let i = 0; i < 10; i++) {

    let list1 = document.createElement('li');
    list1.innerText = i;
    box1.appendChild(list1);
    list1.style.width = '50px';
    list1.style.textAlign = ('start');
    list1.style.backgroundColor = ('white');

    if (i === 4) {
        list1.style.backgroundColor = ('#82a3d9');
    }

    else if (i % 2 === 0) {
        list1.style.backgroundColor = ('black');
        list1.style.color = ('white')
    }
    else {
        list1.style.backgroundColor = ('white')
        list1.style.color = ('black');
    }



}




{
    for (let i = 9; i >= 0; i--) {
        let list2 = document.createElement('li');
        box2.appendChild(list2);
        list2.innerText = i;
        list2.style.width = '50px';
        list2.style.textAlign = ('center');
        list2.style.backgroundColor = ('black');

        if (i === 8) {
            list2.style.backgroundColor = ('#82a3d9');
        }

        else if (i % 2 === 0) {
            list2.style.backgroundColor = ('black');
            list2.style.color = ('white')
        }

        else {
            list2.style.backgroundColor = ('white')
            list2.style.color = ('black');
        }

    }


    const nummer = [`ett`, `två`, `tre`, `fyra`, `fem`, `sex`, `sju`, `åtta`, `nio`, `tio`];
    for (let i = 0; i < nummer.length; i++) {
        let list3 = document.createElement('li');
        box3.appendChild(list3);
        list3.innerText = nummer[i];
        list3.style.width = '50px'
        list3.style.textAlign = ('end')
        if (i === 5) {
            list3.style.backgroundColor = ('#82a3d9');

        }

        else if (i % 2 === 0) {
            list3.style.backgroundColor = ('black');
            list3.style.color = ('white');
        }

        else {
            list3.style.backgroundColor = ('white')
            list3.style.color = ('black');
        }


    }

}
