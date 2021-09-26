export default function({store, redirect}) {
    if (store.state.data.length === 0) {
        return redirect('/')
    }
}