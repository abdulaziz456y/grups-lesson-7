const btn = document.getElementById('btn');
const username = document.getElementById('username');
const login = document.getElementById('login');
const register = document.getElementById('register');
const userblok = document.getElementById('users');

// let signUp = false;

// if (signUp) {
//     btn.textContent = 'login';
// } else {
//     btn.textContent = 'signUp';
// }


function registeration() {
    localStorage.setItem('users', String(username.value));
    addToLocalStorage(username.value)
    username.value = '';
}

function loginFn() {
    if (login.value === localStorage.getItem('users')) {
        console.log('siz login qildingiz');
        location.href = './index.html';
    } else {
        console.log('cant');
    }
} 


// function getLocalStorage() {
//     if (localStorage.getItem('users')) {
//        return JSON.parse(localStorage.getItem('users'))
//     } else {
//         return []
//     }
// }

// function addToLocalStorage(user) {
//     const data = { user };
//     const items = getLocalStorage();
//     items.push(data);
//     localStorage.setItem('users', JSON.stringify(items));
// }

// const users = JSON.parse(localStorage.getItem('users'));


// for (let i = 0; i < users.length; i++){
//     userblok.innerHTML += `<p class="demo">${users[i].user}</p>`
// }




// // const LS = {
// //     {}
// // }

// // localStorage.setItem('name', 'vali');
// // btn.textContent = localStorage.getItem('name')

// // const person = {
// //     name: 'ali',
// //     age: 20
// // };

// // localStorage.setItem('person', JSON.stringify(person))
// // localStorage.getItem('person')




// function some() {
//     console.log('djvbhfbv');
// }


// const btn = document.getElementById('btn');


// btn.addEventListener('click', function () {
     
//  })

// const img = document.getElementById('img');
// const name = document.getElementById('name');
// const desc = document.getElementById('desc');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');



// const data = [
//     {
//         img: null,
//         name: 'Ali',
//         desc: 'lorem lorem lorem',  
//     },
//     {
//         img: null,
//         name: 'Vali',
//         desc: 'lorem lorem lorem',  
//     },
//     {
//         img: null,
//         name: 'Ali',
//         desc: 'lorem lorem lorem',  
//     },
//     {
//         img: './images/home.jpg',
//         name: 'gani',
//         desc: 'lorem lorem lorem',  
//     },
//     {
//         img: null,
//         name: 'qani',
//         desc: 'lorem lorem lorem',  
//     },
//     {
//         img: null,
//         name: 'ketdi',
//         desc: 'lorem lorem lorem',  
//     },
// ]

// let currentElement = 0;

// name.textContent = data[currentElement].name;
// desc.textContent = data[currentElement].desc;



// next.addEventListener('click', function () {
//     currentElement++;
//     name.textContent = data[currentElement].name;
// desc.textContent = data[currentElement].desc;
// })
