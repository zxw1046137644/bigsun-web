export function getWorld() {
    this.axios.get(
        '/api/user/world',
    )
        .then
        (
            (res) => {
                console.log(res)
            }
        )
        .catch
        (
            (err) => {
                console.log(err)
            }
        )
}
