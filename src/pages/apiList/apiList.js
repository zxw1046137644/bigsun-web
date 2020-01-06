module.exports = {

    findResult() {
        this.$router.push('result');
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
    },


}