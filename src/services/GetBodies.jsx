const url = 'https://api.unionavatars.com/bodies'

const myHeaders = new Headers()
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZTJlYzRlZmYtMDZjMS00YzVlLWE4ODItNGEwYzk4YmFmMzlmIiwiZXhwIjoxNjYyMDEzMjc0fQ.zdysAeFTjZVnfN70r6ZgZxqQBP55lVj0XLEVVUDJyGQ'
myHeaders.append('Authorization', `Bearer ${token}`);
myHeaders.append('Content-Type', 'application/json');
export const getBodies = async () => {
    const res = await fetch(url, {
        headers: myHeaders

    })
        .then(res => res.json())
    return res

}