const appRoutes = []
const modules = import.meta.glob('@/views/*.rt.js', {eager: true})
Object.values(modules).forEach((value) => {
	appRoutes.push(value.default)
})
export default appRoutes
