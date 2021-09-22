export const state = () => ({
    degrees: ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ']
})

export const getters = {
    degrees: s => {
        return s.degrees
    }
}