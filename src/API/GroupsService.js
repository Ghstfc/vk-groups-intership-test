import data from '../groups.json';

export default class GroupsService {
    static async getAll() {
        return new Promise((resolve, reject) => {

            // Задержка, которую требовалось реализовать
            setTimeout(async () => {
                fetch('../groups.json')
                    .then((response) => {

                        // Проверки которые должны быть в реальном мире (и которые просилось сделать),
                        // но в ответе метода 'fetch' нет полей 'result' и 'data' поэтому проверка осталась под комменатриями

                        // if (!response.result)
                        //     reject(Error('Can not get data, server unavailable!!!'))
                        // if (!response.data)
                        //     reject(Error('Server did not get some data, come later!!!'))

                        // Отдаем данные из локального .json файла
                        resolve(data)
                    })
                    .catch(err => reject(err.message))
            }, 1000)
        })
    }
}