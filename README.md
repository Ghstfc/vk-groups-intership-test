# VK Groups

*Disclaimer: на эту работу было потрачено не мало сил и времени, потому, если в случае
отрицательного ответа вы оставите хотя бы отзыв в ишью, будет очень славно*

## Запуск проекта

### `npm start`

## NPM Version : `10.2.0`

## Зависимости
В тз было сказано, что можно использовать любые зависимости, я же решил не таскать библиотеки и покзать проверяющему 
фундаментальные знания материала.

## Что надо было
Нужно было сделать одностраничное приложение с отображением групп, добавить фильтры к этим группам, отображать друзей в группах.

## Что было сделано

### Фильтры
Я добавил 3 фильтра, как и просилось, сделал одновременную возможность работы с помощью `useState()`, 
подписавшись на обновления фильтров. Не уверен, что это хорошая практика, ибо если у нас много фильтров, 
то большое количество сущностей и фильтров могут замедлить процесс фильтрации.

### Группы
Я добавил *API* с помощью которого можно в будущем общаться с сервером и делать запросы. Ответ замокал на данные из `groups.json`. 
Проверка на ответ сервера была учтена, но закомментирована, ибо в теле ответа метода `fetch()` нет полей `result` и `data`, поэтому *API*
возвращало бы ошибку, что привело бы к невозможности проверить задание. Так же в *API* оставлены комментарии по этому поводу.




