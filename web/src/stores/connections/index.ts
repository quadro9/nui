import cnnApi from "@/api/connection"
import { Connection } from "@/types/Connection"
import { StoreCore, createStore } from "@priolo/jon"



const setup = {

	state: {
		all: <Connection[]>null,
	},

	getters: {
		getById(id: string, store?: ConnectionStore) {
			if (!id) return null
			return store.state.all?.find(cnn => cnn.id == id)
		},
		getIndexById(id: string, store?: ConnectionStore) {
			if (!id) return null
			return store.state.all?.findIndex(cnn => cnn.id == id)
		},
	},

	actions: {
		async fetch(_: void, store?: ConnectionStore) {
			const cnn = await cnnApi.index()
			store.setAll(cnn)
		},
		async create(cnn: Connection, store?: ConnectionStore): Promise<Connection> {
			const cnnNew = await cnnApi.save(cnn)
			store.setAll([...store.state.all, cnnNew])
			return cnnNew
		},
		async delete(id: string, store?: ConnectionStore): Promise<void> {
			await cnnApi.remove(id)
			store.setAll(store.state.all.filter(c => c.id != id))
		},
		async modify(cnn:Connection, store?: ConnectionStore): Promise<void> {
			const index = store.getIndexById(cnn.id)
			const cnns = [...store.state.all]
			cnns[index] = cnn
			store.setAll(cnns)
		},
	},

	mutators: {
		setAll: (all: Connection[]) => ({ all }),
		updateConnection: (cnn: Connection, store?: ConnectionStore) => {
			const all = [...store.state.all]
			const index = all.findIndex(c => c.id == cnn.id)
			if (index == -1) return
			all[index] = cnn
			return { all }
		},
	},
}

export type ConnectionState = typeof setup.state
export type ConnectionGetters = typeof setup.getters
export type ConnectionActions = typeof setup.actions
export type ConnectionMutators = typeof setup.mutators
export interface ConnectionStore extends StoreCore<ConnectionState>, ConnectionGetters, ConnectionActions, ConnectionMutators {
	state: ConnectionState
}
//export default setup
const store = createStore(setup) as ConnectionStore
export default store