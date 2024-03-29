# VK Groups

*Disclaimer: на эту работу было потрачено не мало сил и времени, потому, если в случае
отрицательного ответа вы оставите хотя бы отзыв в ишью, будет очень славно*

## Запуск проекта

### `npm install`
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
- Я добавил *API* с помощью которого можно в будущем общаться с сервером и делать запросы. Ответ замокал на данные из `groups.json`. 
    Проверка на ответ сервера была учтена, но закомментирована, ибо в теле ответа метода `fetch()` нет полей `result` и `data`, поэтому *API*
    возвращало бы ошибку, что привело бы к невозможности проверить задание. Так же в *API* оставлены комментарии по этому поводу.
- Также в *API* была реализована задержка ответа сервера в 1 секунду, которую можно закомментировать и получится то, что примерно должно выглядеть как *API*
- Также хочется сказать по поводу отображения аватарок. В тз было сказано не отображать поля, если данных для их отрисовки нет. Я решил отображать аватарки групп 
    нейтральным (серым) цветом, как бы аватарка по умолчанию.

### Друзья
Для отображения друзей я решил сделать модальное окно, ибо считаю, что это немного сложнее реализовать, нежели просто отображать друзей в том же блоке что и группа 
(хочется показать бОльший спектр своих навыков)

### Компоненты
Для разделения стилей были использованы модули, считаю что это хорошая практика

### CSS
В ТЗ было сказано, не обращать внимание на стили, но не хочется отдавать проект незаконченным, а без приемлимого *CSS* проект - не проект


### Что можно добавить
- Адаптивный дизайн
- Фильтрация / Поиск по названию
- Динамическая подгрузка групп при скроллинге
- Роутер для различных страниц (с ошибкой и тд)

### Тесты
Их нет
