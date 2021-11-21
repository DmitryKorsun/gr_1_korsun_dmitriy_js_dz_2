// С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} Placeholder Fake Api
// и вывести его на страницу с версткой в виде блоков.
//     Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных)
// и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
//     Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.
<!--python3 -m http.server 8000-->
<!--http://localhost:8000-->
<!DOCTYPE html>
<html>
<head>
    <title>Календарь</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="./CSS/main.css">
</head>
<body>
<button id="authorize_button">Авторизация</button>
<button id="signout_button">Выход</button>
<pre id="content" style="white-space: pre-wrap;"></pre>
<div class="form-block">

    <form class="formGet" name="formDevelopmentsGet" action="javascript:getEvent()">
        <div class="nameformGet">Вывод информации по событию</div>
        <label>IdElement</label>
        <input name="getElement">
        <input name="submitGetElement" type="submit">
    </form>
    <form class="formAdd" name="formDevelopments" action="javascript:AddEvents()">
        <div class="nameformAdd">Добавить событие</div>
        <label>Заглавие</label>
        <input name="summary">
        <label>Адресс</label>
        <input name="location">
        <label>О событии</label>
        <input name="description">
        <label>Начало события</label>
        <input type="datetime-local" name="startDateTime" value="2021-11-16T09:00">
        <label>Конец события</label>
        <input type="datetime-local" name="endDateTime" value="2021-11-16T09:00">
        <input name="submit" type="submit">
    </form>
    <form class="formDelete" name="deletform" action="javascript:deleteEvent()">
        <div class="nameformDelete">Удалить событие</div>
        <label>idEvent</label>
        <input name="idDelete">
        <input name="delete" type="submit" value="Удалить">
    </form>
</div>
<div id="LinkAddEvents"></div>
<script type="text/javascript">
    // Подключение клиента
    var CLIENT_ID = '538109197555-9k7ibo4cbn1tsknan89467fh3eqrj5nu.apps.googleusercontent.com';
    var API_KEY = 'AIzaSyBdo9dbDUbZutGw5WNyZtdavC4EDR7aPmA';

    //Подключение версий API Календаря
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

    //Авторизация пользователя
    var SCOPES = "https://www.googleapis.com/auth/calendar";

    var authorizeButton = document.getElementById('authorize_button');
    var signoutButton = document.getElementById('signout_button');

    function ClientLoad() {
        gapi.load('client:auth2', initClient);
    }

    function initClient() {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function () {
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            authorizeButton.onclick = AuthClick;
            signoutButton.onclick = SignoutClick;
        }, function (error) {
            appendPre(JSON.stringify(error, null, 2));
        });
    }

    function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
            authorizeButton.style.display = 'none';
            signoutButton.style.display = 'block';
            listUpcomingEvents();
        } else {
            authorizeButton.style.display = 'block';
            signoutButton.style.display = 'none';
        }
    }

    //Авторизация пользователя
    function AuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
    }

    //Выход пользователя
    function SignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
    }

    //Добавление текста в контейнер контента
    function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
    }

    //Вывод общей информации по событиям
    function listUpcomingEvents() {
        gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': '2021-11-16T09:00:00-07:00',
            'timeMax': '2021-11-28T09:00:00-07:00',
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        }).then(function (response) {
            var events = response.result.items;
            appendPre('События пользователя:');
            console.log(events);
            if (events.length > 0) {
                for (i = 0; i < events.length; i++) {
                    var event = events[i];
                    var when = event.start.dateTime;
                    var idEvent = event.id;
                    if (!when) {
                        when = event.start.date;
                        idEvent = event.id;
                    }
                    appendPre(event.summary + ' (' + when + ')' + 'idEvent' + ' (' + idEvent + ')')
                }
            } else {
                appendPre('Нет событий у пользователя');
            }
        });
    }

    //Добавление события
    function AddEvents() {
        let formAddEvents = document.forms.formDevelopments;
        let summary = formAddEvents.elements.summary;
        let location = formAddEvents.elements.location;
        let description = formAddEvents.elements.description;
        let startDateTime = formAddEvents.elements.startDateTime;
        let endDateTime = formAddEvents.elements.endDateTime;
        console.log(startDateTime.value, endDateTime.value)
        let event = {
            'summary': `${summary.value}`,
            'location': `${location.value}`,
            'description': `${description.value}`,
            'start': {
                'dateTime': `${startDateTime.value}:00+02:00`,
                'timeZone': `Europe/Kiev`
            },
            'end': {
                'dateTime': `${endDateTime.value}:00+02:00`,
                'timeZone': `Europe/Kiev`
            }
        };
        var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        });
        request.execute(function (event) {
            let LinkAddEvents = document.getElementById('LinkAddEvents');
            let LinkAddEventsCreate = document.createElement('a');
            LinkAddEventsCreate.href = `${event.htmlLink}`;
            LinkAddEventsCreate.appendChild(document.createTextNode(`${event.htmlLink}`));
            LinkAddEvents.appendChild(LinkAddEventsCreate);
        });
    }

    //Поиск и вывод события с уникальным номером
    function getEvent() {
        let formDevelopmentsGet = document.forms.formDevelopmentsGet;
        let getElement = formDevelopmentsGet.elements.getElement;
        gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': '2021-11-16T09:00:00-07:00',
            'timeMax': '2021-11-28T09:00:00-07:00',
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        }).then(function (response) {
            var events = response.result.items;
            console.log(events);
            if (events.length > 0) {
                for (i = 0; i < events.length; i++) {
                    var event = events[i];
                }
                gapi.client.load('calendar', 'v3', function () {
                    var request = gapi.client.calendar.events.get({
                        'calendarId': 'primary',
                        'eventId': `${getElement.value}`
                    });
                    request.execute(function (response) {
                        if (response.error || response == false) {
                            alert('Error');
                        } else {
                            alert(`
                            Id элемента:${event.id}
                            Имя события:${event.summary}
                            Адресс проведения:${event.location}
                            О событии:${event.description}
                            Организатор:${event.organizer.email}
                            Дата начала:${event.start.dateTime}
                            Дата конца:${event.end.dateTime}
                            `);
                        }
                    });
                });
            }
        })
    }

    //Поиск и удаление события с уникальным номером
    function deleteEvent() {
        let deletform = document.forms.deletform;
        let idcalendar = deletform.elements.idDelete;
        gapi.client.load('calendar', 'v3', function () {
            var request = gapi.client.calendar.events.delete({
                'calendarId': 'primary',
                'eventId': `${idcalendar.value}`
            });
            request.execute(function (response) {
                if (response.error || response == false) {
                    alert('Ошибка удаления');
                } else {
                    alert('Удалено');
                }
            });
        });
    }
</script>
<script async defer src="https://apis.google.com/js/api.js"
        onload="this.onload=function(){};ClientLoad()"
        onreadystatechange="if (this.readyState === 'complete') this.onload()">
</script>
</body>
</html>
