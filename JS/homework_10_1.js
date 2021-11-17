// С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} Placeholder Fake Api
// и вывести его на страницу с версткой в виде блоков.
//     Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных)
// и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
//     Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.
$(document).ready(function () {
    function deleteUser (idUsers){
        let deletInform = fetch(`https://jsonplaceholder.typicode.com/users/${idUsers}`, {
            method: 'DELETE',
        });
        return deletInform;
    }
    async function getAddress (key){
        let userList = await fetch(`https://jsonplaceholder.typicode.com/users/${key}`)
        let contentUserList =  await userList.json()
            let adrresList = `Город:${contentUserList.address.city},
            Улица:${contentUserList.address.street},
            Апартаменты:${contentUserList.address.suite},
            Индекс:${contentUserList.address.zipcode},
            Координаты:(${contentUserList[key].address.geo.lat} ${contentUserList.address.geo.lng})`;
        return adrresList
    }
    let key;
    getUsers();

    async function getUsers() {
        let userList = await fetch('https://jsonplaceholder.typicode.com/users')
        let contentUserList = await userList.json()
        console.log(contentUserList)
        let list = document.querySelector('.listInformUser');
        for (key in contentUserList) {

            let companyList = `Название:${contentUserList[key].company.name},
            Ключевые слова:${contentUserList[key].company.bs},
            слоган:${contentUserList[key].company.catchPhrase}`;
            let adrresList = `Город:${contentUserList[key].address.city},
            Улица:${contentUserList[key].address.street},
            Апартаменты:${contentUserList[key].address.suite},
            Индекс:${contentUserList[key].address.zipcode},
            Координаты:(${contentUserList[key].address.geo.lat} ${contentUserList[key].address.geo.lng})`;
            list.innerHTML += `
                <th>${contentUserList[key].id}</th>
                <th>${contentUserList[key].name}</th>
                <th>${contentUserList[key].username}</th>
                <th><a href="mailto:${contentUserList[key].email}">${contentUserList[key].email}</a></th>
                <th>${adrresList}</th>
                <th>${companyList}</th>
                <th><a href="tel:${contentUserList[key].phone}">${contentUserList[key].phone}</a></th>
                <th><a href="https://${contentUserList[key].website}">${contentUserList[key].website}</a></th>
                `
        }
    }
});