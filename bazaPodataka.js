/* let baza = [
    {
        id: 1,
        ime: 'Lukic Dejan',
        pozicija: 'JS dev',
        email: 'dejan@gmail.com',
        tel: '062 123 456'
    },
    {
        id: 2,
        ime: 'Petar Ilic',
        pozicija: 'FS dev',
        email: 'petar@gmail.com',
        tel: '062 123 456'
    },
    {
        id: 3,
        ime: 'Andreja Markovic',
        pozicija: 'Lead dev',
        email: 'andreja@gmail.com',
        tel: '062 123 456'
    },
    {
        id: 4,
        ime: 'Filip Jotic',
        pozicija: 'PHP dev',
        email: 'fica@gmail.com',
        tel: '062 123 456'
    }
]; */
 let baza = [];
if(localStorage.baza) {
    baza = JSON.parse(localStorage.baza);
} 