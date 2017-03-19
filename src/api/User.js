export async function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                firstName: 'Igor',
                lastName: 'Romanov'
            });
        }, 2000);
    });
}