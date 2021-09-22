export const state = () => ({
    today: true
})

export const mutations = {
    changeFlag(state, flag) {
        state.today = flag
    }
}