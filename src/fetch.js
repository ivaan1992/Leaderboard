export default function request(url, { method, body }) {
    return (fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body
    }))
}